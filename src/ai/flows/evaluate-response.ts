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
  prompt: z.string().describe('The reading prompt that was given to the user.'),
  response: z.string().describe("The user's response to the reading prompt."),
});
export type EvaluateReadingResponseInput = z.infer<typeof EvaluateReadingResponseInputSchema>;

const EvaluateReadingResponseOutputSchema = z.object({
  feedback: z.string().describe('Feedback on the user\'s response, explaining if it is correct and why.'),
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
  prompt: `You are a German language teacher. Evaluate the user's response to the reading prompt.

Determine if the user's response accurately answers the question based on the provided text.

Provide brief, encouraging feedback on their response. If the user is incorrect, gently explain the correct answer based on the text.

Reading Prompt:
{{{prompt}}}

User's Response:
{{{response}}}`,
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
