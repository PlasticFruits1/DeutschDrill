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
  answer: z.string().describe('The answer to the generated prompt.'),
});
export type GenerateReadingPromptOutput = z.infer<typeof GenerateReadingPromptOutputSchema>;

const prompts = {
  A1: [
    {
      prompt: 'Lies die folgenden Sätze: Maria ist 20 Jahre alt. Sie wohnt in Berlin. Sie arbeitet in einem Café. Was macht Maria beruflich?\nA) Sie ist Studentin\nB) Sie arbeitet in einem Café\nC) Sie ist Lehrerin\nD) Sie sucht Arbeit',
      answer: 'B',
    },
    {
      prompt: 'Lies die folgenden Sätze: Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Peter und meine Schwester heißt Anna. Wie viele Geschwister habe ich?\nA) Eins\nB) Zwei\nC) Drei\nD) Keine',
      answer: 'B',
    },
    {
      prompt: 'Lies den Text: Das ist mein Freund Paul. Er ist 25 Jahre alt und kommt aus Hamburg. Er spricht Deutsch und Englisch. Woher kommt Paul?\nA) Aus Berlin\nB) Aus München\nC) Aus Hamburg\nD) Aus Köln',
      answer: 'C',
    },
    {
      prompt: 'Lies den Text: Am Samstag gehe ich einkaufen. Ich kaufe Brot, Milch und Eier. Dann koche ich das Abendessen. Was kaufe ich am Samstag?\nA) Nur Brot\nB) Obst und Gemüse\nC) Brot, Milch und Eier\nD) Nichts',
      answer: 'C',
    },
    {
      prompt: 'Lies den Text: Meine Lieblingsfarbe ist Blau. Ich habe ein blaues T-Shirt und eine blaue Hose. Mein Zimmer ist auch blau. Was ist meine Lieblingsfarbe?\nA) Rot\nB) Grün\nC) Gelb\nD) Blau',
      answer: 'D',
    },
  ],
  B1: [
    {
      prompt: 'Lies den folgenden Text: Das neue Museum in der Stadt bietet eine beeindruckende Sammlung moderner Kunst. Es wurde erst vor einem Jahr eröffnet und hat bereits viele Besucher angezogen. Welche Art von Kunst kann man im Museum sehen?\nA) Klassische Kunst\nB) Moderne Kunst\nC) Skulpturen\nD) Fotografie',
      answer: 'B',
    },
    {
      prompt: 'Lies den folgenden Text: Aufgrund von Bauarbeiten ist die Hauptstraße ab morgen für zwei Wochen gesperrt. Der Verkehr wird über die Nebenstraßen umgeleitet. Wie lange wird die Hauptstraße gesperrt sein?\nA) Einen Tag\nB) Eine Woche\nC) Zwei Wochen\nD) Einen Monat',
      answer: 'C',
    },
    {
      prompt: 'Lesen Sie die E-Mail: Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich mit Ihrer letzten Lieferung nicht zufrieden war. Das bestellte Buch kam beschädigt an. Ich bitte um eine Ersatzlieferung. Mit freundlichen Grüßen, Max Mustermann. Warum schreibt Max Mustermann die E-Mail?\nA) Er möchte ein Buch bestellen.\nB) Das Buch war zu teuer.\nC) Das Buch war beschädigt.\nD) Er möchte die Bestellung stornieren.',
      answer: 'C',
    },
    {
      prompt: 'Lesen Sie den Artikel: Immer mehr Menschen entscheiden sich für eine vegetarische Ernährung. Die Gründe dafür sind vielfältig: ethische Bedenken, gesundheitliche Vorteile oder der Schutz der Umwelt. Nennen Sie einen Grund für vegetarische Ernährung laut Text.\nA) Es ist billiger.\nB) Es schmeckt besser.\nC) Ethische Bedenken.\nD) Es ist ein neuer Trend.',
      answer: 'C',
    },
    {
      prompt: 'Lesen Sie die Anzeige: Große Wohnung zu vermieten! 3 Zimmer, Küche, Bad, 85qm, Balkon, zentrale Lage, 950€ Kaltmiete. Bei Interesse melden Sie sich unter 01234/56789. Wie hoch ist die Miete ohne Nebenkosten?\nA) 85€\nB) 950€\nC) 1000€\nD) Nicht angegeben',
      answer: 'B',
    },
  ],
  C1: [
    {
      prompt: 'Lies den folgenden Artikel: Die Debatte über die Auswirkungen der Globalisierung auf lokale Kulturen ist vielschichtig. Einerseits ermöglicht sie den Austausch von Ideen und Traditionen, andererseits droht eine Homogenisierung und der Verlust kultureller Vielfalt. Welche zwei Seiten der Globalisierung werden im Artikel diskutiert?\nA) Wirtschaftliche und politische Aspekte.\nB) Kultureller Austausch und Verlust der Vielfalt.\nC) Technologischer Fortschritt und soziale Ungleichheit.\nD) Ökologische und ethische Fragen.',
      answer: 'B',
    },
    {
      prompt: 'Lies den folgenden Essay: In seinem Essay argumentiert der Autor, dass die zunehmende Digitalisierung unserer Gesellschaft sowohl Chancen als auch Risiken birgt. Er betont die Notwendigkeit, einen kritischen Blick auf die technologischen Entwicklungen zu bewahren und ethische Aspekte zu berücksichtigen. Was betont der Autor im Bezug auf die Digitalisierung?\nA) Nur die Chancen der Digitalisierung.\nB) Nur die Risiken der Digitalisierung.\nC) Die Notwendigkeit eines kritischen Blicks und ethischer Überlegungen.\nD) Die technischen Aspekte der Digitalisierung.',
      answer: 'C',
    },
    {
      prompt: 'Analysieren Sie den Kommentar: Der Autor des Kommentars kritisiert die aktuelle Bildungspolitik scharf. Er bemängelt die mangelnde finanzielle Ausstattung der Schulen und fordert tiefgreifende Reformen, um die Chancengleichheit zu gewährleisten. Was ist die Hauptkritik des Autors an der Bildungspolitik?\nA) Zu viele Schüler pro Klasse.\nB) Mangelnde finanzielle Ausstattung und fehlende Reformen.\nC) Schlechte Qualität der Lehrbücher.\nD) Zu lange Schulferien.',
      answer: 'B',
    },
    {
      prompt: 'Fassen Sie den wissenschaftlichen Text zusammen: Die Studie untersucht den Einfluss von sozialem Engagement auf die psychische Gesundheit von Senioren. Die Ergebnisse deuten darauf hin, dass regelmäßige soziale Aktivitäten mit einem höheren Wohlbefinden und einer geringeren Depressionsrate korrelieren. Welchen Zusammenhang untersucht die Studie?\nA) Ernährung und körperliche Gesundheit.\nB) Soziales Engagement und psychische Gesundheit.\nC) Schlafqualität und Gedächtnisleistung.\nD) Medikamenteneinnahme und Lebenserwartung.',
      answer: 'B',
    },
    {
      prompt: 'Interpretieren Sie das Zitat: "Bildung ist die mächtigste Waffe, die du verwenden kannst, um die Welt zu verändern." - Nelson Mandela. Was bedeutet dieses Zitat im Kontext gesellschaftlicher Entwicklung?\nA) Bildung ist nur für den persönlichen Erfolg wichtig.\nB) Bildung kann zu Konflikten führen.\nC) Bildung ist ein Werkzeug für gesellschaftlichen Wandel und Verbesserung.\nD) Wissen ist gefährlich.',
      answer: 'C',
    },
  ],
};


export async function generateReadingPrompt(input: GenerateReadingPromptInput): Promise<GenerateReadingPromptOutput> {
  const { level } = GenerateReadingPromptInputSchema.parse(input);

  const promptList = prompts[level];

  if (!promptList || promptList.length === 0) {
    return { prompt: 'No reading prompt found for the given level.', answer: 'N/A' };
  }

  const randomIndex = Math.floor(Math.random() * promptList.length);
  const selectedPrompt = promptList[randomIndex];

  return selectedPrompt;
}
