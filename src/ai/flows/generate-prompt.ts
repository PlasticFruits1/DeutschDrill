'use server';
/**
 * @fileOverview A reading prompt generation AI agent.
 *
 * - generateReadingPrompt - A function that handles the reading prompt generation process.
 * - GenerateReadingPromptInput - The input type for the generateReadingPrompt function.
 * - GenerateReadingPromptOutput - The return type for the generateReadingPrompt function.
 */

import { z } from 'zod';

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

const prompts = {
  A1: [
    'Lies die folgenden Sätze und beantworte die Frage: Maria ist 20 Jahre alt. Sie wohnt in Berlin. Sie arbeitet in einem Café. Was macht Maria beruflich?',
    'Lies die folgenden Sätze und beantworte die Frage: Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Peter und meine Schwester heißt Anna. Wie viele Geschwister habe ich?',
    'Lies den Text: Das ist mein Freund Paul. Er ist 25 Jahre alt und kommt aus Hamburg. Er spricht Deutsch und Englisch. Frage: Woher kommt Paul?',
    'Lies den Text: Am Samstag gehe ich einkaufen. Ich kaufe Brot, Milch und Eier. Dann koche ich das Abendessen. Frage: Was kaufe ich am Samstag?',
    'Lies den Text: Meine Lieblingsfarbe ist Blau. Ich habe ein blaues T-Shirt und eine blaue Hose. Mein Zimmer ist auch blau. Frage: Was ist meine Lieblingsfarbe?',
  ],
  B1: [
    'Lies den folgenden Text und beantworte die Frage: Das neue Museum in der Stadt bietet eine beeindruckende Sammlung moderner Kunst. Es wurde erst vor einem Jahr eröffnet und hat bereits viele Besucher angezogen. Welche Art von Kunst kann man im Museum sehen?',
    'Lies den folgenden Text und beantworte die Frage: Aufgrund von Bauarbeiten ist die Hauptstraße ab morgen für zwei Wochen gesperrt. Der Verkehr wird über die Nebenstraßen umgeleitet. Wie lange wird die Hauptstraße gesperrt sein?',
    'Lesen Sie die E-Mail: Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich mit Ihrer letzten Lieferung nicht zufrieden war. Das bestellte Buch kam beschädigt an. Ich bitte um eine Ersatzlieferung. Mit freundlichen Grüßen, Max Mustermann. Frage: Warum schreibt Max Mustermann die E-Mail?',
    'Lesen Sie den Artikel: Immer mehr Menschen entscheiden sich für eine vegetarische Ernährung. Die Gründe dafür sind vielfältig: ethische Bedenken, gesundheitliche Vorteile oder der Schutz der Umwelt. Frage: Nennen Sie einen Grund für vegetarische Ernährung.',
    'Lesen Sie die Anzeige: Große Wohnung zu vermieten! 3 Zimmer, Küche, Bad, 85qm, Balkon, zentrale Lage, 950€ Kaltmiete. Bei Interesse melden Sie sich unter 01234/56789. Frage: Wie hoch ist die Miete ohne Nebenkosten?',
  ],
  C1: [
    'Lies den folgenden Artikel und fasse die Hauptargumente zusammen: Die Debatte über die Auswirkungen der Globalisierung auf lokale Kulturen ist vielschichtig. Einerseits ermöglicht sie den Austausch von Ideen und Traditionen, andererseits droht eine Homogenisierung und der Verlust kultureller Vielfalt. Welche zwei Seiten der Globalisierung werden im Artikel diskutiert?',
    'Lies den folgenden Essay und analysiere die Intention des Autors: In seinem Essay argumentiert der Autor, dass die zunehmende Digitalisierung unserer Gesellschaft sowohl Chancen als auch Risiken birgt. Er betont die Notwendigkeit, einen kritischen Blick auf die technologischen Entwicklungen zu bewahren und ethische Aspekte zu berücksichtigen. Welche Notwendigkeit betont der Autor im Bezug auf die Digitalisierung?',
    'Analysieren Sie den Kommentar: Der Autor des Kommentars kritisiert die aktuelle Bildungspolitik scharf. Er bemängelt die mangelnde finanzielle Ausstattung der Schulen und fordert tiefgreifende Reformen, um die Chancengleichheit zu gewährleisten. Frage: Was ist die Hauptkritik des Autors an der Bildungspolitik?',
    'Fassen Sie den wissenschaftlichen Text zusammen: Die Studie untersucht den Einfluss von sozialem Engagement auf die psychische Gesundheit von Senioren. Die Ergebnisse deuten darauf hin, dass regelmäßige soziale Aktivitäten mit einem höheren Wohlbefinden und einer geringeren Depressionsrate korrelieren. Frage: Welchen Zusammenhang untersucht die Studie?',
    'Interpretieren Sie das Zitat: "Bildung ist die mächtigste Waffe, die du verwenden kannst, um die Welt zu verändern." - Nelson Mandela. Was bedeutet dieses Zitat im Kontext gesellschaftlicher Entwicklung?',
  ],
};


export async function generateReadingPrompt(input: GenerateReadingPromptInput): Promise<GenerateReadingPromptOutput> {
  const { level } = GenerateReadingPromptInputSchema.parse(input);

  const promptList = prompts[level];

  if (!promptList || promptList.length === 0) {
    return { prompt: 'No reading prompt found for the given level.' };
  }

  const randomIndex = Math.floor(Math.random() * promptList.length);
  const selectedPrompt = promptList[randomIndex];

  return { prompt: selectedPrompt };
}
