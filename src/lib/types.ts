import { z } from "zod";

export const GuestbookSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  enhance: z.boolean().default(false),
});

export type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
};

export const RsvpSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contact: z.string().optional(),
  guests: z.number().int().min(1, { message: "At least one guest." }),
  dietary: z.string().optional(),
});

export type Rsvp = z.infer<typeof RsvpSchema>;
