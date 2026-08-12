import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StartNowForm } from "@/components/StartNowForm";

interface StartNowDialogProps {
  trigger: React.ReactNode;
}

export function StartNowDialog({ trigger }: StartNowDialogProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-[#0f1122] border-white/10 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Start your free assessment
          </DialogTitle>
          <DialogDescription className="text-white/60">
            Tell us about your codebase and we'll prepare a tailored modernisation roadmap. Chris will reply within 1 business day.
          </DialogDescription>
        </DialogHeader>
        <StartNowForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
