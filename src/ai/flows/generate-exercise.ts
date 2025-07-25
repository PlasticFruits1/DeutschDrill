
'use server';
/**
 * @fileOverview A grammar exercise generation AI agent.
 *
 * - generateGrammarExercise - A function that generates a grammar exercise based on the specified level and type.
 * - GenerateGrammarExerciseInput - The input type for the generateGrammarExercise function.
 * - GenerateGrammarExerciseOutput - The return type for the generateGrammarExercise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateGrammarExerciseInputSchema = z.object({
  level: z
    .enum(['A1', 'B1', 'C1'])
    .describe('The German language level for the grammar exercise.'),
  exerciseType: z
    .enum(['fill-in-the-blank', 'multiple-choice'])
    .describe('The type of grammar exercise to generate.'),
  history: z.array(z.string()).optional().describe('A list of recently generated questions to avoid repetition.'),
});
export type GenerateGrammarExerciseInput = z.infer<typeof GenerateGrammarExerciseInputSchema>;

const GenerateGrammarExerciseOutputSchema = z.object({
  exercise: z.string().describe('The generated grammar exercise. For multiple choice, this includes the question and four options labeled A, B, C, and D, each on a new line.'),
  answer: z.string().describe('The answer to the generated grammar exercise. For multiple choice, this is the letter of the correct option.'),
});
export type GenerateGrammarExerciseOutput = z.infer<typeof GenerateGrammarExerciseOutputSchema>;

export async function generateGrammarExercise(
  input: GenerateGrammarExerciseInput
): Promise<GenerateGrammarExerciseOutput> {
  return generateGrammarExerciseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateGrammarExercisePrompt',
  input: {schema: GenerateGrammarExerciseInputSchema},
  output: {schema: GenerateGrammarExerciseOutputSchema},
  prompt: `You are a German language teacher. Generate a German grammar exercise for a student.

Level: {{{level}}}
Exercise Type: {{{exerciseType}}}

- For "fill-in-the-blank", provide a sentence with a blank and the correct word for the blank as the answer.
- For "multiple-choice", provide a question and four options (A, B, C, D), each on a new line. The answer should be the letter of the correct option.
- The exercise should be appropriate for the specified language level.
- Provide only the exercise text and the answer.
- Do not include any explanations or additional text.
{{#if history}}
- Do not generate any of the following questions that have been asked recently:
{{#each history}}
- {{{this}}}
{{/each}}
{{/if}}
`,
});

const generateGrammarExerciseFlow = ai.defineFlow(
  {
    name: 'generateGrammarExerciseFlow',
    inputSchema: GenerateGrammarExerciseInputSchema,
    outputSchema: GenerateGrammarExerciseOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
