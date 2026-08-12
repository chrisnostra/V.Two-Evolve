import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";

// ---------------------------------------------------------------------------
// Schema — mirrors backend validation
// TODO: extract into a shared @workspace/api-zod manual schema
// ---------------------------------------------------------------------------
const startNowSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  codebaseSize: z.string().optional(),
  techStack: z.string().optional(),
  message: z
    .string()
    .max(2000, "Message must be under 2,000 characters")
    .optional(),
  website: z.string().optional(), // honeypot
});

type StartNowValues = z.infer<typeof startNowSchema>;

const CODEBASE_SIZES = [
  "< 10k LOC",
  "10k–100k LOC",
  "100k–1M LOC",
  "1M+ LOC",
  "Not sure",
] as const;

interface StartNowFormProps {
  onSuccess?: () => void;
}

export function StartNowForm({ onSuccess }: StartNowFormProps) {
  const { toast } = useToast();
  const [networkError, setNetworkError] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<StartNowValues>({
    resolver: zodResolver(startNowSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      codebaseSize: undefined,
      techStack: "",
      message: "",
      website: "", // honeypot
    },
  });

  const onSubmit = async (data: StartNowValues) => {
    setNetworkError(false);
    try {
      const res = await fetch("/api/start-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok && res.status !== 202) {
        throw new Error(`Server responded with ${res.status}`);
      }

      toast({
        title: "Thanks — Chris will reply within 1 business day.",
      });
      onSuccess?.();
    } catch {
      setNetworkError(true);
      toast({
        title: "Something went wrong",
        description:
          "We couldn't submit your request. Please try again or email Chris directly.",
        variant: "destructive",
      });
    }
  };

  // Build mailto fallback with pre-filled fields
  const buildMailtoHref = () => {
    const subject = encodeURIComponent("V.Two Evolve — Start Now");
    const body = encodeURIComponent(
      "Hi Chris,\n\nI'd like to learn more about V.Two Evolve.\n\nName: \nCompany: \nTech stack: \n\nThanks!",
    );
    return `mailto:chris@vtwo.co?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      {/* Honeypot — hidden from humans */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-name" className="text-white/90">
          Name <span className="text-red-400">*</span>
        </Label>
        <Input
          id="start-now-name"
          placeholder="Jane Smith"
          aria-describedby={errors.name ? "start-now-name-error" : undefined}
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#9b6bf4]"
          {...register("name")}
        />
        {errors.name && (
          <p id="start-now-name-error" className="text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-email" className="text-white/90">
          Email <span className="text-red-400">*</span>
        </Label>
        <Input
          id="start-now-email"
          type="email"
          placeholder="jane@acme.com"
          aria-describedby={
            errors.email ? "start-now-email-error" : undefined
          }
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#9b6bf4]"
          {...register("email")}
        />
        {errors.email && (
          <p id="start-now-email-error" className="text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-company" className="text-white/90">
          Company <span className="text-red-400">*</span>
        </Label>
        <Input
          id="start-now-company"
          placeholder="Acme Inc."
          aria-describedby={
            errors.company ? "start-now-company-error" : undefined
          }
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#9b6bf4]"
          {...register("company")}
        />
        {errors.company && (
          <p id="start-now-company-error" className="text-sm text-red-400">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Codebase size — optional */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-codebase" className="text-white/90">
          Codebase size
        </Label>
        <Select
          onValueChange={(val) => setValue("codebaseSize", val)}
        >
          <SelectTrigger
            id="start-now-codebase"
            className="bg-white/5 border-white/15 text-white data-[placeholder]:text-white/40 focus:ring-[#9b6bf4]"
          >
            <SelectValue placeholder="Select size (optional)" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1d2e] border-white/15 text-white">
            {CODEBASE_SIZES.map((size) => (
              <SelectItem
                key={size}
                value={size}
                className="focus:bg-white/10 focus:text-white"
              >
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tech stack — optional */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-tech" className="text-white/90">
          Tech stack
        </Label>
        <Input
          id="start-now-tech"
          placeholder="e.g. Java Spring, .NET, COBOL, Node/React"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#9b6bf4]"
          {...register("techStack")}
        />
      </div>

      {/* Message — optional */}
      <div className="space-y-1.5">
        <Label htmlFor="start-now-message" className="text-white/90">
          Message
        </Label>
        <Textarea
          id="start-now-message"
          placeholder="Anything you'd like us to know before the call?"
          rows={3}
          aria-describedby={
            errors.message ? "start-now-message-error" : undefined
          }
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-[#9b6bf4] resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p id="start-now-message-error" className="text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] text-white font-semibold py-3 h-12 hover:opacity-90 transition-opacity shadow-[0_6px_24px_rgba(155,107,244,0.35)] border-0"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2" />
            Sending…
          </>
        ) : (
          "Request your free assessment"
        )}
      </Button>

      {/* Fallback mailto on network error */}
      {networkError && (
        <p className="text-sm text-white/60 text-center">
          Or{" "}
          <a
            href={buildMailtoHref()}
            className="text-[#b091ff] underline hover:text-white transition-colors"
          >
            email Chris directly →
          </a>
        </p>
      )}
    </form>
  );
}
