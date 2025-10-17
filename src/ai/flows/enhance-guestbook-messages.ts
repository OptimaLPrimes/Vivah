'use server';
/**
 * @fileOverview An AI agent that enhances guestbook messages with cultural or personalized information.
 *
 * - enhanceGuestbookMessage - A function that enhances a guestbook message.
 * - EnhanceGuestbookMessageInput - The input type for the enhanceGuestbookMessage function.
 * - EnhanceGuestbookMessageOutput - The return type for the enhanceGuestbookMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceGuestbookMessageInputSchema = z.object({
  message: z.string().describe('The original guestbook message to enhance.'),
  brideName: z.string().describe('The name of the bride.'),
  groomName: z.string().describe('The name of the groom.'),
  weddingDate: z.string().describe('The date of the wedding (e.g., December 12, 2025).'),
});
export type EnhanceGuestbookMessageInput = z.infer<typeof EnhanceGuestbookMessageInputSchema>;

const EnhanceGuestbookMessageOutputSchema = z.object({
  enhancedMessage: z.string().describe('The enhanced guestbook message.'),
});
export type EnhanceGuestbookMessageOutput = z.infer<typeof EnhanceGuestbookMessageOutputSchema>;

export async function enhanceGuestbookMessage(input: EnhanceGuestbookMessageInput): Promise<EnhanceGuestbookMessageOutput> {
  return enhanceGuestbookMessageFlow(input);
}

const enhanceGuestbookMessagePrompt = ai.definePrompt({
  name: 'enhanceGuestbookMessagePrompt',
  input: {schema: EnhanceGuestbookMessageInputSchema},
  output: {schema: EnhanceGuestbookMessageOutputSchema},
  prompt: `You are an expert in crafting heartfelt and culturally relevant wedding wishes.

  Given the original guestbook message, the names of the bride and groom, and the wedding date, enhance the message to make it more thoughtful and meaningful.
  Incorporate traditional Indian wedding blessings, cultural references, or personalized details related to the couple.
  If the original message is already perfect, return it without changes.  If the original message is short, add to it to make it longer.

  Original Message: {{{message}}}
  Bride's Name: {{{brideName}}}
  Groom's Name: {{{groomName}}}
  Wedding Date: {{{weddingDate}}}

  Enhanced Message:`, // Ensure the response is directly the enhanced message
});

const enhanceGuestbookMessageFlow = ai.defineFlow(
  {
    name: 'enhanceGuestbookMessageFlow',
    inputSchema: EnhanceGuestbookMessageInputSchema,
    outputSchema: EnhanceGuestbookMessageOutputSchema,
  },
  async input => {
    const {output} = await enhanceGuestbookMessagePrompt(input);
    return {
      enhancedMessage: output!.enhancedMessage,
    };
  }
);
