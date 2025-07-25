
type GrammarExercise = {
    question: string;
    answer: string;
    options?: Record<string, string>;
};

type ReadingExercise = {
    question: string;
    answer: string;
    options: Record<string, string>;
};

type LevelExercises = {
    grammar: {
        'fill-in-the-blank': GrammarExercise[];
        'multiple-choice': GrammarExercise[];
    };
    reading: ReadingExercise[];
};

export const exercises: Record<string, LevelExercises> = {
    A1: {
        grammar: {
            'fill-in-the-blank': [
                { question: 'Ich ___ aus Deutschland. (kommen)', answer: 'komme' },
                { question: 'Er ___ Student. (sein)', answer: 'ist' },
                { question: 'Wir ___ Deutsch. (lernen)', answer: 'lernen' },
                { question: '___ du einen Bruder? (haben)', answer: 'Hast' },
                { question: 'Sie ___ in Berlin. (wohnen)', answer: 'wohnt' },
                { question: 'Das Auto ist ___. (rot)', answer: 'rot' },
                { question: 'Ich trinke ___ Kaffee. (gern)', answer: 'gern' },
                { question: 'Der Tisch ist ___. (groß)', answer: 'groß' },
                { question: 'Sie heißt ___. (Anna)', answer: 'Anna' },
                { question: 'Was ___ das? (sein)', answer: 'ist' },
                // Add more A1 fill-in-the-blank questions here...
            ],
            'multiple-choice': [
                { question: 'Wie heißen ___?', options: { A: 'er', B: 'Sie', C: 'ich', D: 'wir' }, answer: 'B' },
                { question: 'Das ist ___ Buch.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'eins' }, answer: 'A' },
                { question: 'Er kommt ___ Italien.', options: { A: 'in', B: 'an', C: 'aus', D: 'auf' }, answer: 'C' },
                { question: 'Ich habe ___ Hunger.', options: { A: 'kein', B: 'keine', C: 'keinen', D: 'nicht' }, answer: 'C' },
                { question: 'Meine Schwester ist 18 ___ alt.', options: { A: 'Jahr', B: 'Jahre', C: 'Jahren', D: 'Jahres' }, answer: 'B' },
                // Add more A1 multiple-choice questions here...
            ],
        },
        reading: [
            {
                question: 'Text: Hallo, ich bin Paul. Ich komme aus Österreich und wohne in Wien. Ich bin 25 Jahre alt und arbeite als Lehrer. Frage: Woher kommt Paul?',
                options: { A: 'Deutschland', B: 'Schweiz', C: 'Österreich', D: 'Wien' },
                answer: 'C'
            },
            {
                question: 'Text: Das ist meine Familie. Mein Vater heißt Thomas und meine Mutter heißt Maria. Ich habe eine Schwester. Sie heißt Lena. Frage: Wie heißt die Schwester?',
                options: { A: 'Thomas', B: 'Maria', C: 'Paul', D: 'Lena' },
                answer: 'D'
            },
            // Add more A1 reading questions here...
        ],
    },
    A2: {
        grammar: {
            'fill-in-the-blank': [
                { question: 'Ich bin ___ als du. (groß)', answer: 'größer' },
                { question: 'Er hat ___ gestern angerufen. (ich)', answer: 'mich' },
                { question: 'Wir sind mit ___ Auto gefahren. (unser)', answer: 'unserem' },
                { question: 'Wenn ich Zeit ___, besuche ich dich. (haben)', answer: 'habe' },
                { question: 'Ich habe das Buch auf ___ Tisch gelegt. (der)', answer: 'den' },
            ],
            'multiple-choice': [
                { question: 'Ich helfe ___ alten Frau.', options: { A: 'der', B: 'die', C: 'dem', D: 'den' }, answer: 'A' },
                { question: 'Er interessiert sich ___ Politik.', options: { A: 'für', B: 'an', C: 'auf', D: 'über' }, answer: 'A' },
                { question: '___ du gestern im Kino warst, habe ich geschlafen.', options: { A: 'Als', B: 'Wenn', C: 'Obwohl', D: 'Weil' }, answer: 'A' },
                { question: 'Das ist der Mann, ___ ich gesehen habe.', options: { A: 'der', B: 'dem', C: 'den', D: 'dessen' }, answer: 'C' },
                { question: 'Ich würde gern einen Kaffee ___.', options: { A: 'trinken', B: 'trinkt', C: 'getrunken', D: 'trank' }, answer: 'A' },
            ],
        },
        reading: [
            {
                question: 'Text: Gestern war ich im Supermarkt. Ich wollte Äpfel, Brot und Milch kaufen. Aber die Äpfel waren nicht frisch, also habe ich nur Brot und Milch gekauft. Frage: Was hat die Person nicht gekauft?',
                options: { A: 'Brot', B: 'Milch', C: 'Äpfel', D: 'Käse' },
                answer: 'C'
            },
            {
                question: 'Text: Meine Freundin Lisa hat bald Geburtstag. Ich möchte ihr ein Geschenk kaufen. Sie liest gerne, also denke ich, ein Buch ist eine gute Idee. Sie mag Kriminalromane. Frage: Was für ein Geschenk ist eine gute Idee?',
                options: { A: 'Ein Film', B: 'Ein Buch', C: 'Eine CD', D: 'Ein Spiel' },
                answer: 'B'
            },
        ],
    },
    B1: {
        grammar: {
            'fill-in-the-blank': [
                { question: 'Er hat den ganzen Tag nichts ___. (tun)', answer: 'getan' },
                { question: '___ des schlechten Wetters sind wir zu Hause geblieben. (wegen)', answer: 'Wegen' },
                { question: 'Ich ärgere mich ___ den Lärm. (über)', answer: 'über' },
                { question: 'Das Fahrrad, ___ ich gekauft habe, war teuer. (das)', answer: 'das' },
                { question: 'Je mehr man lernt, ___ mehr versteht man. (desto)', answer: 'desto' },
            ],
            'multiple-choice': [
                { question: 'Erinnerst du dich ___ unseren Urlaub?', options: { A: 'auf', B: 'an', C: 'über', D: 'für' }, answer: 'B' },
                { question: 'Es ist wichtig, ___ man regelmäßig Sport treibt.', options: { A: 'dass', B: 'ob', C: 'weil', D: 'wenn' }, answer: 'A' },
                { question: '___ er krank war, ist er zur Arbeit gegangen.', options: { A: 'Weil', B: 'Dass', C: 'Als', D: 'Obwohl' }, answer: 'D' },
                { question: 'Ich habe vor, nächstes Jahr nach Japan ___ .', options: { A: 'fliegen', B: 'zu fliegen', C: 'geflogen', D: 'flog' }, answer: 'B' },
                { question: 'Weder mein Bruder ___ meine Schwester hat Zeit.', options: { A: 'und', B: 'oder', C: 'noch', D: 'als' }, answer: 'C' },
            ],
        },
        reading: [
            {
                question: 'Text: Die Digitalisierung hat die Arbeitswelt stark verändert. Viele Berufe, die früher wichtig waren, gibt es heute nicht mehr. Dafür sind neue Berufsfelder entstanden, die digitale Kompetenzen erfordern. Eine ständige Weiterbildung ist daher unerlässlich geworden. Frage: Was ist eine Folge der Digitalisierung?',
                options: { A: 'Es gibt weniger Arbeit.', B: 'Alle alten Berufe sind verschwunden.', C: 'Ständige Weiterbildung ist wichtig geworden.', D: 'Man braucht keine digitalen Kompetenzen.' },
                answer: 'C'
            },
            {
                question: 'Text: Umweltbewusstes Leben wird für viele Menschen immer wichtiger. Sie versuchen, Müll zu vermeiden, weniger Plastik zu verwenden und regionale Produkte zu kaufen. Das schont nicht nur die Umwelt, sondern unterstützt auch die lokale Wirtschaft. Frage: Was ist kein Beispiel für umweltbewusstes Leben?',
                options: { A: 'Müll vermeiden', B: 'Produkte aus der Region kaufen', C: 'Viel Plastik benutzen', D: 'Lokale Wirtschaft unterstützen' },
                answer: 'C'
            },
        ],
    },
    B2: {
        grammar: {
            'fill-in-the-blank': [
                { question: 'Der Film, ___ du mir empfohlen hast, war ausgezeichnet. (den)', answer: 'den' },
                { question: 'An ___ Stelle würde ich anders handeln. (du)', answer: 'deiner' },
                { question: 'Es wird darum ___, eine Lösung zu finden. (gehen)', answer: 'gehen' },
                { question: 'Er gilt ___ einer der besten Wissenschaftler. (als)', answer: 'als' },
                { question: '___ ich die Prüfung bestanden habe, war ich erleichtert. (Nachdem)', answer: 'Nachdem' },
            ],
            'multiple-choice': [
                { question: 'Die Veranstaltung findet statt, ___ das Wetter auch sein mag.', options: { A: 'wie auch immer', B: 'was auch immer', C: 'wo auch immer', D: 'wer auch immer' }, answer: 'A' },
                { question: 'Er tat so, ___ er alles wüsste.', options: { A: 'als ob', B: 'obwohl', C: 'damit', D: 'indem' }, answer: 'A' },
                { question: '___ fleißiger du lernst, desto besser werden deine Noten.', options: { A: 'Je', B: 'Desto', C: 'Umso', D: 'Als' }, answer: 'A' },
                { question: 'Er wurde ___ Diebstahls angeklagt.', options: { A: 'wegen', B: 'des', C: 'für', D: 'an' }, answer: 'B' },
                { question: 'Ich bin es ___, früh aufzustehen.', options: { A: 'gewohnt', B: 'gewöhnt', C: 'gewonnen', D: 'bewusst' }, answer: 'B' },
            ],
        },
        reading: [
            {
                question: 'Text: Die Debatte über künstliche Intelligenz (KI) ist vielschichtig. Einerseits bietet KI enorme Chancen in Bereichen wie Medizin und Forschung. Andererseits bestehen Bedenken hinsichtlich des Datenschutzes und des potenziellen Verlusts von Arbeitsplätzen. Eine gesellschaftliche Auseinandersetzung über die ethischen Rahmenbedingungen ist daher dringend geboten. Frage: Welcher Aspekt gehört nicht zu den Bedenken bei KI?',
                options: { A: 'Datenschutz', B: 'Verlust von Arbeitsplätzen', C: 'Chancen in der Medizin', D: 'Ethische Rahmenbedingungen' },
                answer: 'C'
            },
            {
                question: 'Text: Der demografische Wandel stellt viele westliche Gesellschaften vor große Herausforderungen. Eine alternde Bevölkerung bei gleichzeitig sinkenden Geburtenraten führt zu Problemen in den sozialen Sicherungssystemen, wie der Renten- und Krankenversicherung. Innovative politische Lösungen sind gefragt, um die Zukunftsfähigkeit dieser Systeme zu gewährleisten. Frage: Was ist die zentrale Herausforderung des demografischen Wandels?',
                options: { A: 'Steigende Geburtenraten', B: 'Eine junge Bevölkerung', C: 'Probleme in den sozialen Sicherungssystemen', D: 'Sinkende Lebenserwartung' },
                answer: 'C'
            },
        ],
    },
    C1: {
        grammar: {
            'fill-in-the-blank': [
                { question: 'Das ___ zu befürchten. (sein)', answer: 'ist' },
                { question: 'Er hat die Absicht, seine Kenntnisse zu ___. (vertiefen)', answer: 'vertiefen' },
                { question: 'Es mangelt ihm ___ Selbstvertrauen. (an)', answer: 'an' },
                { question: 'Sie brachte ihn ___, mit dem Rauchen aufzuhören. (dazu)', answer: 'dazu' },
                { question: '___ seines Reichtums ist er nicht glücklich. (Trotz)', answer: 'Trotz' },
            ],
            'multiple-choice': [
                { question: 'Die Regierung sah sich ___ veranlasst, neue Gesetze zu erlassen.', options: { A: 'davon', B: 'dazu', C: 'dabei', D: 'dafür' }, answer: 'B' },
                { question: 'Er ist nicht nur intelligent, ___ auch sehr fleißig.', options: { A: 'aber', B: 'oder', C: 'sondern', D: 'denn' }, answer: 'C' },
                { question: 'Das Problem besteht ___, dass die finanziellen Mittel fehlen.', options: { A: 'darin', B: 'darauf', C: 'daraus', D: 'darum' }, answer: 'A' },
                { question: '___ Kritik an seiner Arbeit, setzte der Wissenschaftler seine Forschung fort.', options: { A: 'Trotz aller', B: 'Wegen aller', C: 'Zufolge aller', D: 'Anstelle aller' }, answer: 'A' },
                { question: 'Das lässt ___ schließen, dass er die Wahrheit sagt.', options: { A: 'darauf', B: 'daraus', C: 'dahin', D: 'daran' }, answer: 'A' },
            ],
        },
        reading: [
            {
                question: 'Text: Die Globalisierung, verstanden als Prozess der zunehmenden internationalen Verflechtung in allen Lebensbereichen, hat zu einer nie dagewesenen Beschleunigung des Austauschs von Waren, Informationen und Kapital geführt. Kritiker bemängeln jedoch die damit einhergehende soziale Ungleichheit und die ökologischen Folgekosten, die eine Neujustierung der globalen Wirtschaftsordnung erforderlich machen. Frage: Was ist ein Hauptkritikpunkt an der Globalisierung?',
                options: { A: 'Die Verlangsamung des Warenaustauschs', B: 'Die Zunahme sozialer Ungleichheit', C: 'Die Abnahme internationaler Verflechtungen', D: 'Die Reduzierung ökologischer Kosten' },
                answer: 'B'
            },
            {
                question: 'Text: Im Diskurs über die Willensfreiheit prallen deterministische und indeterministische Positionen aufeinander. Während Deterministen argumentieren, dass alle Ereignisse, einschließlich menschlicher Handlungen, durch vorangehende Ursachen vollständig bestimmt sind, postulieren Indeterministen die Existenz eines echten Zufalls oder einer nicht-kausalen Freiheit, was die traditionelle Vorstellung von moralischer Verantwortlichkeit fundamental in Frage stellt. Frage: Was ist die Kernaussage des Determinismus?',
                options: { A: 'Menschliche Handlungen sind frei und zufällig.', B: 'Es gibt keine moralische Verantwortlichkeit.', C: 'Alle Ereignisse sind durch Ursachen vorherbestimmt.', D: 'Die Willensfreiheit ist unbestreitbar.' },
                answer: 'C'
            },
        ],
    },
};
