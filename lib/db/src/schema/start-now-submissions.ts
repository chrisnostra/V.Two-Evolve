import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const startNowSubmissions = pgTable("start_now_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  codebaseSize: text("codebase_size"),
  techStack: text("tech_stack"),
  message: text("message"),
  sourceIp: text("source_ip"),
  emailDeliveredAt: timestamp("email_delivered_at", { withTimezone: true }),
});

export type StartNowSubmission = typeof startNowSubmissions.$inferSelect;
export type InsertStartNowSubmission = typeof startNowSubmissions.$inferInsert;
