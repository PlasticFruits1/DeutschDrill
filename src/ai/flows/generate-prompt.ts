
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
  history: z.array(z.string()).optional().describe('A list of recently generated questions to avoid repetition.'),
});
export type GenerateReadingPromptInput = z.infer<typeof GenerateReadingPromptInputSchema>;

const GenerateReadingPromptOutputSchema = z.object({
  prompt: z.string().describe('The generated reading comprehension prompt, including the text, question, and four multiple-choice options labeled A, B, C, and D.'),
  answer: z.string().describe('The letter of the correct option (A, B, C, or D).'),
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

- The prompt must consist of a short text in German followed by a multiple-choice question.
- The question must have exactly four options, labeled A, B, C, and D.
- The question must be answerable based on the provided text.
- The answer must be only the letter of the correct option (e.g., "A", "B", "C", or "D").
- Provide only the prompt (text, question, and four options) and the answer.
- Do not include any explanations or additional text.
{{#if history}}
- Do not generate any of the following questions that have been asked recently:
{{#each history}}
- {{{this}}}
{{/each}}
{{/if}}
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
