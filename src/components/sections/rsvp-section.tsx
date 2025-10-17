"use client";

import { useActionState, useState } from "react";
import { useEffect } from "react";
import { submitRsvp } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RsvpSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Rsvp } from "@/lib/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { Input } from "../ui/input";
import { Confetti } from "../confetti";


function SubmitButton() {
  const [pending] = useTransition();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Confirm Attendance"}
    </Button>
  );
}

export function RsvpSection() {
  const [state, formAction] = useActionState(submitRsvp, {
    message: "",
    status: "idle",
  });
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const form = useForm<Rsvp>({
    resolver: zodResolver(RsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      guests: 1,
      dietary: "none",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "RSVP Confirmed!",
        description: state.message,
      });
      form.reset();
      setShowConfetti(true);
    } else if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: state.message,
      });
    }
  }, [state, toast, form]);
  
  return (
    <section id="rsvp" className="bg-background relative">
       {showConfetti && <Confetti />}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <Card className="shadow-2xl border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl text-primary">
                RSVP
              </CardTitle>
              <CardDescription>
                Please let us know if you can make it by November 20th, 2025.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Number of Guests</FormLabel>
                            <FormControl>
                            <Input type="number" min="1" max="10" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                      control={form.control}
                      name="dietary"
                      render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dietary Preferences</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                    <SelectItem value="vegan">Vegan</SelectItem>
                                    <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                       )}
                    />
                  </div>
                  <SubmitButton />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
