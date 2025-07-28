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
  prompt: z.string().describe('The full reading prompt given to the user, including the text, question, and options.'),
  userAnswer: z.string().describe("The user's selected option (e.g., 'A', 'B', 'C', or 'D')."),
  correctAnswer: z.string().describe("The correct option letter (e.g., 'A', 'B', 'C', or 'D')."),
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
  prompt: `You are a German language teacher. Your task is to evaluate a user's answer to a multiple-choice reading comprehension question.

The full prompt was:
"{{{prompt}}}"

The correct answer is option {{{correctAnswer}}}.
The user selected option {{{userAnswer}}}.

1.  Compare the user's answer to the correct answer.
2.  Set the 'isCorrect' field to true if they match, and false otherwise.
3.  Provide a very brief, one-sentence feedback.
    - If correct, say something encouraging like "Great job!" or "That's right!".
    - If incorrect, gently state the correct answer and briefly explain why, based on the text. For example: "Not quite. The correct answer is X, because the text says..."`,
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
