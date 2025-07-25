'use server';

/**
 * @fileOverview Grammar exercise generation flow.
 *
 * - generateGrammarExercise - A function that generates a grammar exercise based on the specified level and type.
 * - GenerateGrammarExerciseInput - The input type for the generateGrammarExercise function.
 * - GenerateGrammarExerciseOutput - The return type for the generateGrammarExercise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateGrammarExerciseInputSchema = z.object({
  level: z.enum(['A1', 'B1', 'C1']).describe('The German language level.'),
  exerciseType: z.enum(['fill-in-the-blank', 'multiple-choice']).describe('The type of grammar exercise to generate.'),
});
export type GenerateGrammarExerciseInput = z.infer<typeof GenerateGrammarExerciseInputSchema>;

const GenerateGrammarExerciseOutputSchema = z.object({
  exercise: z.string().describe('The generated grammar exercise.'),
  answer: z.string().describe('The answer to the generated grammar exercise.'),
});
export type GenerateGrammarExerciseOutput = z.infer<typeof GenerateGrammarExerciseOutputSchema>;

export async function generateGrammarExercise(input: GenerateGrammarExerciseInput): Promise<GenerateGrammarExerciseOutput> {
  return generateGrammarExerciseFlow(input);
}

const grammarTool = ai.defineTool({
  name: 'findGrammarProblems',
  description: 'This tool will provide German grammar exercises based on the selected level and exercise type.',
  inputSchema: z.object({
    level: z.enum(['A1', 'B1', 'C1']).describe('The German language level (A1, B1, C1).'),
    exerciseType: z.enum(['fill-in-the-blank', 'multiple-choice']).describe('The type of grammar exercise (fill-in-the-blank, multiple-choice).'),
  }),
  outputSchema: z.object({
    exercise: z.string().describe('A German grammar exercise.'),
    answer: z.string().describe('The answer to the grammar exercise.'),
  }),
  async (input) => {
    // Placeholder implementation for the grammar tool
    // In a real application, this would fetch or generate grammar exercises
    // based on the level and exercise type.
    if (input.level === 'A1' && input.exerciseType === 'fill-in-the-blank') {
      return {
        exercise: 'Ich ____ ein Buch. (I ____ a book.)',
        answer: 'lese',
      };
    } else if (input.level === 'B1' && input.exerciseType === 'multiple-choice') {
      return {
        exercise: 'Welches Wort passt in die Lücke? Er hat ____ nach Hause gegangen.\nA) den B) dem C) der D) das',
        answer: 'A',
      };
    } else {
      return {
        exercise: 'No exercise found for the given level and type.',
        answer: 'N/A',
      };
    }
  },
});

const prompt = ai.definePrompt({
  name: 'generateGrammarExercisePrompt',
  tools: [grammarTool],
  input: {schema: GenerateGrammarExerciseInputSchema},
  output: {schema: GenerateGrammarExerciseOutputSchema},
  prompt: `You are a German language tutor. Use the findGrammarProblems tool to generate a grammar exercise for the user.

  Level: {{{level}}}
  Exercise Type: {{{exerciseType}}}
  
  Return the exercise and the correct answer.
  `,
});

const generateGrammarExerciseFlow = ai.defineFlow(
  {
    name: 'generateGrammarExerciseFlow',
    inputSchema: GenerateGrammarExerciseInputSchema,
    outputSchema: GenerateGrammarExerciseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
