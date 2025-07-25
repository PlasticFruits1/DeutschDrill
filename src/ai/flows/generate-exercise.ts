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
});
export type GenerateGrammarExerciseInput = z.infer<typeof GenerateGrammarExerciseInputSchema>;

const GenerateGrammarExerciseOutputSchema = z.object({
  exercise: z.string().describe('The generated grammar exercise.'),
  answer: z.string().describe('The answer to the generated grammar exercise.'),
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
- For "multiple-choice", provide a question and four options (A, B, C, D). The answer should be the letter of the correct option.
- The exercise should be appropriate for the specified language level.
- Provide only the exercise text and the answer.
- Do not include any explanations or additional text.
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
