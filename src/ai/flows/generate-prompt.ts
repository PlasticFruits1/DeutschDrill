'use server';
/**
 * @fileOverview A reading prompt generation AI agent.
 *
 * - generateReadingPrompt - A function that handles the reading prompt generation process.
 * - GenerateReadingPromptInput - The input type for the generateReadingPrompt function.
 * - GenerateReadingPromptOutput - The return type for the generateReadingPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateReadingPromptInputSchema = z.object({
  level: z
    .enum(['A1', 'B1', 'C1'])
    .describe('The German language level for the reading prompt.'),
});
export type GenerateReadingPromptInput = z.infer<typeof GenerateReadingPromptInputSchema>;

const GenerateReadingPromptOutputSchema = z.object({
  prompt: z.string().describe('The generated reading comprehension prompt.'),
  answer: z.string().describe('The answer to the generated prompt.'),
});
export type GenerateReadingPromptOutput = z.infer<typeof GenerateReadingPromptOutputSchema>;

export async function generateReadingPrompt(
  input: GenerateReadingPromptInput
): Promise<GenerateReadingPromptOutput> {
  return generateReadingPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateReadingPromptPrompt',
  input: {schema: GenerateReadingPromptInputSchema},
  output: {schema: GenerateReadingPromptOutputSchema},
  prompt: `You are a German language teacher. Generate a German reading comprehension prompt for a student.

Level: {{{level}}}

- The prompt should consist of a short text in German followed by a multiple-choice question with four options (A, B, C, D).
- The question should be answerable based on the provided text.
- The answer should be the letter of the correct option.
- The text and question should be appropriate for the specified language level.
- Provide only the prompt (text and question with four options) and the answer.
- Do not include any explanations or additional text.
`,
});

const generateReadingPromptFlow = ai.defineFlow(
  {
    name: 'generateReadingPromptFlow',
    inputSchema: GenerateReadingPromptInputSchema,
    outputSchema: GenerateReadingPromptOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
