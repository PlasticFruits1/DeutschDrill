'use server';
/**
 * @fileOverview A reading response evaluation AI agent.
 *
 * - evaluateReadingResponse - A function that handles the reading response evaluation process.
 * - EvaluateReadingResponseInput - The input type for the evaluateReadingResponse function.
 * - EvaluateReadingResponseOutput - The return type for the evaluateReadingResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const EvaluateReadingResponseInputSchema = z.object({
  prompt: z.string().describe('The full reading prompt given to the user, including the text and question.'),
  userAnswer: z.string().describe("The user's selected answer text."),
  correctAnswer: z.string().describe("The correct answer text."),
});
export type EvaluateReadingResponseInput = z.infer<typeof EvaluateReadingResponseInputSchema>;

const EvaluateReadingResponseOutputSchema = z.object({
  feedback: z.string().describe("A very brief, one-sentence piece of feedback for the user. If correct, be encouraging. If incorrect, gently state the correct answer was 'X' and why, based on the text."),
  isCorrect: z.boolean().describe('Whether the user\'s response is correct.'),
});
export type EvaluateReadingResponseOutput = z.infer<typeof EvaluateReadingResponseOutputSchema>;

export async function evaluateReadingResponse(input: EvaluateReadingResponseInput): Promise<EvaluateReadingResponseOutput> {
  return evaluateReadingResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'evaluateReadingResponsePrompt',
  input: {schema: EvaluateReadingResponseInputSchema},
  output: {schema: EvaluateReadingResponseOutputSchema},
  prompt: `You are a German language teacher. Your task is to evaluate a user's answer to a reading comprehension question based on the provided text.

The prompt was:
"{{{prompt}}}"

The correct answer is: "{{{correctAnswer}}}"
The user selected: "{{{userAnswer}}}"

1.  Compare the user's answer to the correct answer. The user is correct if their answer means the same thing as the correct answer in the context of the text.
2.  Set the 'isCorrect' field to true if they are correct, and false otherwise.
3.  Provide a very brief, one-sentence feedback.
    - If correct, say something encouraging like "Great job!" or "That's right!".
    - If incorrect, gently state the correct answer and briefly explain why, based on the text. For example: "Not quite. The correct answer is '...', because the text says..."`,
});

const evaluateReadingResponseFlow = ai.defineFlow(
  {
    name: 'evaluateReadingResponseFlow',
    inputSchema: EvaluateReadingResponseInputSchema,
    outputSchema: EvaluateReadingResponseOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
