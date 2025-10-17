import { z } from "zod";

export const RsvpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  contact: z.string().optional(),
  guests: z.coerce.number().min(1, { message: "Please specify at least 1 guest." }),
  dietary: z.enum(["none", "vegetarian", "vegan", "gluten-free"]).default("none"),
});

export type Rsvp = z.infer<typeof RsvpSchema>;

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
