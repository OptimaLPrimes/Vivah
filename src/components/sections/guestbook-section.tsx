"use client";

import { useState, useTransition, useEffect, useOptimistic, useActionState } from "react";
import { submitGuestbookMessage } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { GuestbookEntry, GuestbookSchema } from "@/lib/types";
import { format } from "date-fns";
import { Sparkles } from "lucide-react";

function SubmitButton() {
  const [pending] = useTransition();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Leave a Message"}
    </Button>
  );
}

export function GuestbookSection({ initialMessages }: { initialMessages: GuestbookEntry[] }) {
  const [state, formAction] = useActionState(submitGuestbookMessage, {
    message: "",
    status: "idle",
  });
  const { toast } = useToast();
  const [form, setForm] = useState<HTMLFormElement | null>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    initialMessages,
    (state, newMessage: GuestbookEntry) => [newMessage, ...state]
  );

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      form?.reset();
    } else if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  const handleFormAction = async (formData: FormData) => {
    const validatedFields = GuestbookSchema.safeParse({
      name: formData.get("name"),
      message: formData.get("message"),
      enhance: formData.get("enhance") === "on",
    });

    if (validatedFields.success) {
        addOptimisticMessage({
            id: Math.random().toString(),
            name: validatedFields.data.name,
            message: validatedFields.data.message,
            createdAt: new Date(),
        });
    }
    
    formAction(formData);
  };

  return (
    <section id="guestbook" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-primary">
            Guestbook
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Share your love, wishes, and memories with us. We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Leave Your Blessings</CardTitle>
                <CardDescription>Your words will be cherished forever.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={setForm} action={handleFormAction} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="e.g., Jane Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" name="message" placeholder="Share a memory or wish us well..." required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="enhance" name="enhance" />
                    <Label htmlFor="enhance" className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Enhance with AI <Sparkles className="w-4 h-4 text-primary" />
                    </Label>
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4">
            <h3 className="font-headline text-2xl mb-4">Messages from Loved Ones</h3>
            {optimisticMessages.map((entry) => (
              <Card key={entry.id} className="bg-background/70">
                <CardContent className="p-4">
                  <p className="mb-2">"{entry.message}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <p className="font-bold text-primary">- {entry.name}</p>
                    <p className="text-muted-foreground">{format(new Date(entry.createdAt), "MMM d, yyyy")}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
