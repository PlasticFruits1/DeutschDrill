'use server';

/**
 * @fileOverview Grammar exercise generation flow.
 *
 * - generateGrammarExercise - A function that generates a grammar exercise based on the specified level and type.
 * - GenerateGrammarExerciseInput - The input type for the generateGrammarExercise function.
 * - GenerateGrammarExerciseOutput - The return type for the generateGrammarExercise function.
 */

import { z } from 'zod';

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

const exercises = {
    A1: {
        'fill-in-the-blank': [
            { exercise: 'Ich ____ ein Buch. (I ____ a book.)', answer: 'lese' },
            { exercise: 'Er ____ aus Berlin. (He ____ from Berlin.)', answer: 'kommt' },
            { exercise: 'Wir ____ ins Kino. (We ____ to the cinema.)', answer: 'gehen' },
            { exercise: '____ du Kaffee? (____ you like coffee?)', answer: 'Magst' },
            { exercise: 'Sie ____ Nudeln. (She ____ pasta.)', answer: 'kocht' },
        ],
        'multiple-choice': [
            { exercise: 'Was ist die richtige Form? Sie ____ einen Hund.\nA) habe B) hast C) hat D) haben', answer: 'C' },
            { exercise: 'Welches Wort passt? Ich trinke ____ Tee.\nA) ein B) eine C) einen D) einem', answer: 'C' },
            { exercise: 'Wie spät ist es? Es ist halb ____.\nA) neun B) neunte C) neunen D) neuner', answer: 'A' },
            { exercise: 'Er wohnt ____ der Schule.\nA) neben B) auf C) unter D) in', answer: 'A' },
            { exercise: 'Woher kommst du? Ich komme ____ Spanien.\nA) von B) aus C) in D) an', answer: 'B' },
        ],
    },
    B1: {
        'fill-in-the-blank': [
            { exercise: 'Ich interessiere mich ____ Politik. (I am interested ____ politics.)', answer: 'für' },
            { exercise: 'Er wartet ____ den Bus. (He is waiting ____ the bus.)', answer: 'auf' },
            { exercise: 'Sie erinnert sich ____ ihre Kindheit. (She remembers ____ her childhood.)', answer: 'an' },
            { exercise: 'Wir sprechen ____ das Wetter. (We are talking ____ the weather.)', answer: 'über' },
            { exercise: 'Bist du ____ einverstanden? (Do you agree ____ that?)', answer: 'damit' },
        ],
        'multiple-choice': [
            { exercise: 'Welches Wort passt in die Lücke? Er hat ____ nach Hause gegangen.\nA) den B) dem C) der D) das', answer: 'A' },
            { exercise: 'Wähle die richtige Präposition: Ich fahre ____ dem Fahrrad zur Arbeit.\nA) mit B) auf C) an D) zu', answer: 'A' },
            { exercise: 'Welche Konjunktion ist korrekt? Ich lerne Deutsch, ____ ich in Deutschland arbeiten möchte.\nA) weil B) obwohl C) trotzdem D) aber', answer: 'A' },
            { exercise: 'Fülle die Lücke: ____ des schlechten Wetters, sind wir spazieren gegangen.\nA) Trotz B) Wegen C) Während D) Anstatt', answer: 'A' },
            { exercise: 'Welches Relativpronomen ist richtig? Das ist der Mann, ____ ich gestern geholfen habe.\nA) der B) dem C) den D) dessen', answer: 'B' },
        ],
    },
    C1: {
        'fill-in-the-blank': [
            { exercise: 'Die von ihm ____ These ist umstritten. (The thesis ____ by him is controversial.)', answer: 'aufgestellte' },
            { exercise: 'Es ist wichtig, sich ____ der Konsequenzen bewusst zu sein. (It is important to be aware ____ the consequences.)', answer: 'der' },
            { exercise: '____ er das Risiko kannte, investierte er trotzdem. (____ he knew the risk, he invested anyway.)', answer: 'Obwohl' },
            { exercise: 'Sie plädiert ____ eine Reform des Bildungssystems. (She advocates ____ a reform of the education system.)', answer: 'für' },
            { exercise: 'Die Firma ist ____ ihrer innovativen Produkte bekannt. (The company is known ____ its innovative products.)', answer: 'für' },
        ],
        'multiple-choice': [
            { exercise: 'Wähle die passende Konjunktion: Er studiert Jura, ____ später als Anwalt zu arbeiten.\nA) um B) damit C) weil D) obwohl', answer: 'A' },
            { exercise: 'Welche Partizipialkonstruktion ist korrekt? ____, ging er nach Hause.\nA) Die Arbeit beendet B) Nachdem die Arbeit beendet war C) Die Arbeit beendet habend D) Nachdem er die Arbeit beendet hatte', answer: 'D' },
            { exercise: 'Fülle die Lücke: Die Regierung ergriff Maßnahmen, ____ die Wirtschaft anzukurbeln.\nA) um B) damit C) zu D) für', answer: 'A' },
            { exercise: 'Welcher Genitiv ist korrekt? Das Haus ____ ist sehr modern.\nA) des Architekten B) dem Architekten C) den Architekten D) der Architekt', answer: 'A' },
            { exercise: 'Wähle die richtige Präposition: ____ der Gefahr, blieb er ruhig.\nA) Angesichts B) Trotz C) Wegen D) Zufolge', answer: 'A' },
        ],
    },
};

export async function generateGrammarExercise(input: GenerateGrammarExerciseInput): Promise<GenerateGrammarExerciseOutput> {
  const { level, exerciseType } = GenerateGrammarExerciseInputSchema.parse(input);
  
  const exerciseList = exercises[level][exerciseType];
  
  if (!exerciseList || exerciseList.length === 0) {
    return {
        exercise: 'No exercise found for the given level and type.',
        answer: 'N/A',
    };
  }

  const randomIndex = Math.floor(Math.random() * exerciseList.length);
  const selectedExercise = exerciseList[randomIndex];

  return selectedExercise;
}
