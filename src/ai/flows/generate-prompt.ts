'use server';
/**
 * @fileOverview A reading prompt generation AI agent.
 *
 * - generateReadingPrompt - A function that handles the reading prompt generation process.
 * - GenerateReadingPromptInput - The input type for the generateReadingPrompt function.
 * - GenerateReadingPromptOutput - The return type for the generateReadingPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReadingPromptInputSchema = z.object({
  level: z
    .enum(['A1', 'B1', 'C1'])
    .describe('The German language level for the reading prompt.'),
});
export type GenerateReadingPromptInput = z.infer<typeof GenerateReadingPromptInputSchema>;

const GenerateReadingPromptOutputSchema = z.object({
  prompt: z.string().describe('The generated reading comprehension prompt.'),
});
export type GenerateReadingPromptOutput = z.infer<typeof GenerateReadingPromptOutputSchema>;

export async function generateReadingPrompt(input: GenerateReadingPromptInput): Promise<GenerateReadingPromptOutput> {
  return generateReadingPromptFlow(input);
}

const getReadingPrompt = ai.defineTool({
  name: 'getReadingPrompt',
  description: 'Returns a reading comprehension prompt for a specific German language level.',
  inputSchema: z.object({
    level: z
      .enum(['A1', 'B1', 'C1'])
      .describe('The German language level for the reading prompt.'),
  }),
  outputSchema: z.string(),
  async resolve(input) {
    // Mock implementation - replace with actual data retrieval logic
    const prompts = {
      A1: [
        'Lies die folgenden Sätze und beantworte die Frage: Maria ist 20 Jahre alt. Sie wohnt in Berlin. Sie arbeitet in einem Café. Was macht Maria beruflich?',
        'Lies die folgenden Sätze und beantworte die Frage: Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Peter und meine Schwester heißt Anna. Wie viele Geschwister habe ich?',
      ],
      B1: [
        'Lies den folgenden Text und beantworte die Frage: Das neue Museum in der Stadt bietet eine beeindruckende Sammlung moderner Kunst. Es wurde erst vor einem Jahr eröffnet und hat bereits viele Besucher angezogen. Welche Art von Kunst kann man im Museum sehen?',
        'Lies den folgenden Text und beantworte die Frage: Aufgrund von Bauarbeiten ist die Hauptstraße ab morgen für zwei Wochen gesperrt. Der Verkehr wird über die Nebenstraßen umgeleitet. Wie lange wird die Hauptstraße gesperrt sein?',
      ],
      C1: [
        'Lies den folgenden Artikel und fasse die Hauptargumente zusammen: Die Debatte über die Auswirkungen der Globalisierung auf lokale Kulturen ist vielschichtig. Einerseits ermöglicht sie den Austausch von Ideen und Traditionen, andererseits droht eine Homogenisierung und der Verlust kultureller Vielfalt. Welche zwei Seiten der Globalisierung werden im Artikel diskutiert?',
        'Lies den folgenden Essay und analysiere die Intention des Autors: In seinem Essay argumentiert der Autor, dass die zunehmende Digitalisierung unserer Gesellschaft sowohl Chancen als auch Risiken birgt. Er betont die Notwendigkeit, einen kritischen Blick auf die technologischen Entwicklungen zu bewahren und ethische Aspekte zu berücksichtigen. Welche Notwendigkeit betont der Autor im Bezug auf die Digitalisierung?',
      ],
    };
    return prompts[input.level][Math.floor(Math.random() * prompts[input.level].length)];
  },
});

const generateReadingPromptFlow = ai.defineFlow(
  {
    name: 'generateReadingPromptFlow',
    inputSchema: GenerateReadingPromptInputSchema,
    outputSchema: GenerateReadingPromptOutputSchema,
  },
  async input => {
    const prompt = await getReadingPrompt(input);
    return { prompt };
  }
);
