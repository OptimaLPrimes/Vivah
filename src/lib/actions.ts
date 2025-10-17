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

    if (messages.length === 0) {
      // Add mock data if no messages are found
      return [
        {
          id: "1",
          name: "Gajanan Patange",
          message: "So excited to celebrate with you Di",
          createdAt: new Date(),
        },
        {
          id: "2",
          name: "Harishchandra Patange",
          message: "Congratulations, Vaishnavi and Suraj! Your journey together will be beautiful. Can't wait for the big day!",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
        {
          id: "3",
          name: "Grandma",
          message: "My dearest children, may your life together be filled with countless blessings and joy. My heart is full.",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
        },
      ];
    }

    return messages;
  } catch (error) {
    console.error("Error fetching messages: ", error);
    // Return mock data on error as well for preview purposes
    return [
        {
          id: "1",
          name: "Gajanan Patange",
          message: "Wishing you both a lifetime of love and happiness. So excited to celebrate with you!",
          createdAt: new Date(),
        },
        {
          id: "2",
          name: "Harishchandra Patange",
          message: "Congratulations, Vaishnavi and Suraj! Your journey together will be beautiful. Can't wait for the big day!",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
        {
          id: "3",
          name: "Ganesh K Kadam",
          message: "My dearest children, may your life together be filled with countless blessings and joy. My heart is full.",
          createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
        },
      ];
  }
}
