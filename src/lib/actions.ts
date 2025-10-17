"use server";

import { z } from "zod";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { GuestbookSchema, type GuestbookEntry } from "@/lib/types";
import { enhanceGuestbookMessage } from "@/ai/flows/enhance-guestbook-messages";
import { revalidatePath } from "next/cache";

type GuestbookFormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitGuestbookMessage(
  prevState: GuestbookFormState,
  formData: FormData
): Promise<GuestbookFormState> {
  const validatedFields = GuestbookSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
    enhance: formData.get("enhance") === "on",
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors in the form.",
      status: "error",
    };
  }
  
  let finalMessage = validatedFields.data.message;

  try {
    if (validatedFields.data.enhance) {
        const enhancedResult = await enhanceGuestbookMessage({
            message: validatedFields.data.message,
            brideName: "Vaishnavi",
            groomName: "Suraj",
            weddingDate: "December 12, 2025"
        });
        finalMessage = enhancedResult.enhancedMessage;
    }

    await addDoc(collection(db, "guestbook"), {
      name: validatedFields.data.name,
      message: finalMessage,
      createdAt: serverTimestamp(),
    });

    revalidatePath("/");
    return { message: "Thank you for your warm wishes!", status: "success" };
  } catch (error) {
    console.error("Error writing document: ", error);
    return {
      message: "Something went wrong. Please try again.",
      status: "error",
    };
  }
}

export async function getGuestbookMessages(): Promise<GuestbookEntry[]> {
  try {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const messages: GuestbookEntry[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      messages.push({
        id: doc.id,
        name: data.name,
        message: data.message,
        createdAt: data.createdAt.toDate(),
      });
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages: ", error);
    return [];
  }
}
