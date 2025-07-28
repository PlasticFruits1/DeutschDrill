
type GrammarExercise = {
    question: string;
    answer: string;
    options?: Record<string, string>;
};

type ReadingExercise = {
    text: string;
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
                { question: 'Die Kinder ___ im Garten. (spielen)', answer: 'spielen' },
                { question: 'Ich ___ einen Apfel. (essen)', answer: 'esse' },
                { question: 'Er ___ gut Fußball. (spielen)', answer: 'spielt' },
                { question: '___ ihr müde? (sein)', answer: 'Seid' },
                { question: 'Ich ___ einen Hund. (haben)', answer: 'habe' },
                { question: 'Sie ___ ein Buch. (lesen)', answer: 'liest' },
                { question: 'Wir ___ ins Kino. (gehen)', answer: 'gehen' },
                { question: 'Er ___ schnell. (laufen)', answer: 'läuft' },
                { question: 'Ich ___ Wasser. (trinken)', answer: 'trinke' },
                { question: 'Das Wetter ___ schön. (sein)', answer: 'ist' },
                { question: 'Ihr ___ eine Pizza. (kochen)', answer: 'kocht' },
                { question: 'Der Hund ___ laut. (bellen)', answer: 'bellt' },
                { question: 'Ich ___ Musik. (hören)', answer: 'höre' },
                { question: 'Sie ___ nach Hause. (fahren)', answer: 'fährt' },
                { question: 'Wir ___ einen Film. (sehen)', answer: 'sehen' },
                { question: 'Der Stuhl ist ___. (klein)', answer: 'klein' },
                { question: 'Ich ___ eine Frage. (haben)', answer: 'habe' },
                { question: 'Er ___ in München. (arbeiten)', answer: 'arbeitet' },
                { question: 'Die Katze ___ auf dem Sofa. (schlafen)', answer: 'schläft' },
                { question: '___ du Geschwister? (haben)', answer: 'Hast' },
                { question: 'Wir ___ im Supermarkt. (einkaufen)', answer: 'kaufen ein' },
                { question: 'Der Kaffee ist ___. (heiß)', answer: 'heiß' },
                { question: 'Sie ___ gern Schokolade. (essen)', answer: 'isst' },
            ],
            'multiple-choice': [
                { question: 'Wie heißen ___?', options: { A: 'er', B: 'Sie', C: 'ich', D: 'wir' }, answer: 'B' },
                { question: 'Das ist ___ Buch.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'eins' }, answer: 'A' },
                { question: 'Er kommt ___ Italien.', options: { A: 'in', B: 'an', C: 'aus', D: 'auf' }, answer: 'C' },
                { question: 'Ich habe ___ Hunger.', options: { A: 'kein', B: 'keine', C: 'keinen', D: 'nicht' }, answer: 'C' },
                { question: 'Meine Schwester ist 18 ___ alt.', options: { A: 'Jahr', B: 'Jahre', C: 'Jahren', D: 'Jahres' }, answer: 'B' },
                { question: 'Wo ___ du?', options: { A: 'wohne', B: 'wohnst', C: 'wohnt', D: 'wohnen' }, answer: 'B' },
                { question: 'Was ist ___ Name?', options: { A: 'dein', B: 'deine', C: 'deinen', D: 'deiner' }, answer: 'A' },
                { question: 'Ich spreche ___ Deutsch.', options: { A: 'gut', B: 'gute', C: 'guten', D: 'gutes' }, answer: 'A' },
                { question: 'Das ist ___ Apfel.', options: { A: 'der', B: 'die', C: 'das', D: 'den' }, answer: 'A' },
                { question: 'Wir gehen ___ Park.', options: { A: 'im', B: 'in den', C: 'in der', D: 'ins' }, answer: 'B' },
                { question: 'Er hat ___ Katze.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'einer' }, answer: 'B' },
                { question: 'Ich fahre ___ dem Bus.', options: { A: 'mit', B: 'zu', C: 'in', D: 'an' }, answer: 'A' },
                { question: '___ kostet das?', options: { A: 'Wie viel', B: 'Wie viele', C: 'Was', D: 'Wer' }, answer: 'A' },
                { question: 'Sie liest ___ Buch.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'einem' }, answer: 'A' },
                { question: 'Er arbeitet ___ Lehrer.', options: { A: 'als', B: 'wie', C: 'von', D: 'für' }, answer: 'A' },
                { question: 'Das ist der Stift ___ Lehrers.', options: { A: 'des', B: 'dem', C: 'den', D: 'der' }, answer: 'A' },
                { question: 'Ich möchte ___ Kaffee bestellen.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'einem' }, answer: 'C' },
                { question: 'Die Blumen sind ___ dich.', options: { A: 'für', B: 'mit', C: 'zu', D: 'von' }, answer: 'A' },
                { question: '___ geht es Ihnen?', options: { A: 'Was', B: 'Wie', C: 'Wo', D: 'Wer' }, answer: 'B' },
                { question: 'Ich komme ___ 10 Uhr.', options: { A: 'an', B: 'in', C: 'um', D: 'auf' }, answer: 'C' },
                { question: 'Er hat ___ Geburtstag.', options: { A: 'heute', B: 'morgen', C: 'gestern', D: 'jetzt' }, answer: 'A' },
                { question: 'Das ist nicht ___ Problem.', options: { A: 'mein', B: 'meine', C: 'meinen', D: 'meinem' }, answer: 'A' },
                { question: 'Sie geht ___ Ärztin.', options: { A: 'zum', B: 'zur', C: 'zu', D: 'zu dem' }, answer: 'B' },
                { question: 'Wir haben ___ Zeit.', options: { A: 'kein', B: 'keine', C: 'keinen', D: 'nichts' }, answer: 'B' },
                { question: 'Er kann ___ schwimmen.', options: { A: 'gut', B: 'gutes', C: 'guten', D: 'gute' }, answer: 'A' },
                { question: 'Ich muss ___ arbeiten.', options: { A: 'heute', B: 'morgen', C: 'gestern', D: 'jetzt' }, answer: 'A' },
                { question: 'Der Himmel ist ___ .', options: { A: 'blau', B: 'blaue', C: 'blauen', D: 'blaues' }, answer: 'A' },
                { question: 'Er wohnt ___ seinen Eltern.', options: { A: 'mit', B: 'bei', C: 'zu', D: 'von' }, answer: 'B' },
                { question: 'Was ___ du?', options: { A: 'machst', B: 'mache', C: 'macht', D: 'machen' }, answer: 'A' },
                { question: 'Ich lerne Deutsch, ___ es Spaß macht.', options: { A: 'weil', B: 'dass', C: 'ob', D: 'denn' }, answer: 'A' },
                { question: '___ du mir helfen?', options: { A: 'Kann', B: 'Kannst', C: 'Können', D: 'Könnt' }, answer: 'B' },
                { question: 'Die Suppe ist ___ lecker.', options: { A: 'sehr', B: 'viel', C: 'viele', D: 'seC' }, answer: 'A' },
                { question: 'Ich habe ___ Bruder.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'einem' }, answer: 'C' },
            ],
        },
        reading: [
            {
                text: 'Hallo, ich bin Paul. Ich komme aus Österreich und wohne in Wien. Ich bin 25 Jahre alt und arbeite als Lehrer.',
                question: 'Woher kommt Paul?',
                options: { A: 'Deutschland', B: 'Schweiz', C: 'Österreich', D: 'Wien' },
                answer: 'C'
            },
            {
                text: 'Das ist meine Familie. Mein Vater heißt Thomas und meine Mutter heißt Maria. Ich habe eine Schwester. Sie heißt Lena.',
                question: 'Wie heißt die Schwester?',
                options: { A: 'Thomas', B: 'Maria', C: 'Paul', D: 'Lena' },
                answer: 'D'
            },
            {
                text: 'Mein Name ist Anna. Ich habe einen Hund. Er heißt Bello. Bello ist klein und braun. Er spielt gern im Garten.',
                question: 'Welche Farbe hat Bello?',
                options: { A: 'Schwarz', B: 'Weiß', C: 'Braun', D: 'Klein' },
                answer: 'C'
            },
            {
                text: 'Heute ist Samstag. Ich gehe einkaufen. Ich kaufe Brot, Milch und Käse. Am Nachmittag treffe ich Freunde. Wir gehen ins Kino.',
                question: 'Was kauft die Person nicht?',
                options: { A: 'Brot', B: 'Milch', C: 'Wurst', D: 'Käse' },
                answer: 'C'
            },
            {
                text: 'Peter steht um 7 Uhr auf. Er frühstückt und fährt dann zur Arbeit. Er arbeitet in einem Büro. Um 17 Uhr hat er Feierabend.',
                question: 'Wann steht Peter auf?',
                options: { A: 'Um 6 Uhr', B: 'Um 7 Uhr', C: 'Um 8 Uhr', D: 'Um 17 Uhr' },
                answer: 'B'
            },
            {
                text: 'Lisa lernt Deutsch. Sie findet die Grammatik schwer. Aber sie spricht gern mit Leuten. Ihr Lieblingswort ist "Schmetterling".',
                question: 'Was findet Lisa schwer?',
                options: { A: 'Sprechen', B: 'Leute treffen', C: 'Die Grammatik', D: 'Lieblingswörter' },
                answer: 'C'
            },
            {
                text: 'In meiner Freizeit lese ich gern Bücher. Ich mag Krimis. Mein Lieblingsautor ist Sebastian Fitzek. Ich gehe auch gern schwimmen.',
                question: 'Was ist das Hobby der Person?',
                options: { A: 'Kochen', B: 'Singen', C: 'Lesen', D: 'Malen' },
                answer: 'C'
            },
            {
                text: 'Am Wochenende fahre ich oft zu meinen Großeltern. Sie wohnen auf dem Land. Dort gibt es viele Tiere: Kühe, Schweine und Hühner. Es ist immer sehr schön.',
                question: 'Wo wohnen die Großeltern?',
                options: { A: 'In der Stadt', B: 'Am Meer', C: 'Auf dem Land', D: 'In den Bergen' },
                answer: 'C'
            },
            {
                text: 'Ich koche heute Abend. Es gibt Nudeln mit Tomatensoße. Das ist mein Lieblingsessen. Es ist einfach und schmeckt immer gut.',
                question: 'Was ist das Lieblingsessen der Person?',
                options: { A: 'Pizza', B: 'Salat', C: 'Nudeln mit Tomatensoße', D: 'Suppe' },
                answer: 'C'
            },
            {
                text: 'Das Wetter ist heute schlecht. Es regnet und es ist kalt. Ich bleibe zu Hause und sehe einen Film. Ich trinke einen heißen Tee.',
                question: 'Wie ist das Wetter?',
                options: { A: 'Sonnig und warm', B: 'Regnerisch und kalt', C: 'Windig und sonnig', D: 'Schnee und kalt' },
                answer: 'B'
            },
             {
                text: 'Mein Freund hat Geburtstag. Ich schenke ihm ein Buch. Er liest sehr gern. Wir feiern am Abend eine Party.',
                question: 'Was schenkt die Person ihrem Freund?',
                options: { A: 'Einen Film', B: 'Eine CD', C: 'Ein Buch', D: 'Ein Spiel' },
                answer: 'C'
            },
            {
                text: 'Ich fahre in den Urlaub. Ich fliege nach Spanien. Dort ist es warm und sonnig. Ich werde viel schwimmen und am Strand liegen.',
                question: 'Wohin fliegt die Person?',
                options: { A: 'Italien', B: 'Frankreich', C: 'Spanien', D: 'Griechenland' },
                answer: 'C'
            },
            {
                text: 'Das ist ein Apfel. Der Apfel ist rot. Er ist auch sehr gesund. Ich esse jeden Tag einen Apfel.',
                question: 'Welche Farbe hat der Apfel?',
                options: { A: 'Grün', B: 'Gelb', C: 'Rot', D: 'Blau' },
                answer: 'C'
            },
            {
                text: 'Das ist ein Auto. Das Auto ist blau und schnell. Es gehört meinem Vater. Er fährt damit zur Arbeit.',
                question: 'Wem gehört das Auto?',
                options: { A: 'Meiner Mutter', B: 'Meinem Bruder', C: 'Meinem Vater', D: 'Mir' },
                answer: 'C'
},
            {
                text: 'Im Winter fahre ich gern Ski. Ich fahre in die Berge. Dort liegt viel Schnee. Es ist kalt, aber macht viel Spaß.',
                question: 'Was macht die Person im Winter?',
                options: { A: 'Schwimmen', B: 'Wandern', C: 'Ski fahren', D: 'Lesen' },
                answer: 'C'
            },
            {
                text: 'Ich habe eine Katze. Sie heißt Mimi. Sie ist weiß und hat blaue Augen. Sie schläft am liebsten auf meinem Bett.',
                question: 'Wie heißt die Katze?',
                options: { A: 'Bello', B: 'Mimi', C: 'Max', D: 'Lisa' },
                answer: 'B'
            },
            {
                text: 'Ich gehe in die Schule. Ich lerne Mathe, Deutsch und Englisch. Mein Lieblingsfach ist Sport. Nach der Schule mache ich meine Hausaufgaben.',
                question: 'Was ist das Lieblingsfach?',
                options: { A: 'Mathe', B: 'Deutsch', C: 'Englisch', D: 'Sport' },
                answer: 'D'
            },
            {
                text: 'Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad. Sie ist nicht sehr groß, aber gemütlich. Ich wohne im dritten Stock.',
                question: 'Wie viele Zimmer hat die Wohnung?',
                options: { A: 'Ein Zimmer', B: 'Zwei Zimmer', C: 'Drei Zimmer', D: 'Vier Zimmer' },
                answer: 'B'
            },
            {
                text: 'Ich trinke gern Kaffee. Am liebsten mit Milch und Zucker. Am Morgen trinke ich immer eine Tasse. Das macht mich wach.',
                question: 'Wie trinkt die Person ihren Kaffee?',
                options: { A: 'Schwarz', B: 'Mit Milch und Zucker', C: 'Mit Zitrone', D: 'Kalt' },
                answer: 'B'
            },
            {
                text: 'Mein Bruder ist Arzt. Er arbeitet in einem Krankenhaus. Er hilft kranken Menschen. Sein Job ist anstrengend, aber er mag ihn sehr.',
                question: 'Was ist mein Bruder von Beruf?',
                options: { A: 'Lehrer', B: 'Polizist', C: 'Arzt', D: 'Koch' },
                answer: 'C'
            },
            {
                text: 'Ich höre gern Musik. Am liebsten Popmusik. Ich gehe oft auf Konzerte. Mein Lieblingssänger ist Ed Sheeran.',
                question: 'Welche Musik hört die Person am liebsten?',
                options: { A: 'Rock', B: 'Klassik', C: 'Popmusik', D: 'Jazz' },
                answer: 'C'
            },
            {
                text: 'Der Tisch ist aus Holz. Er ist groß und rund. Vier Stühle stehen um den Tisch. Wir essen immer an diesem Tisch.',
                question: 'Woraus ist der Tisch?',
                options: { A: 'Metall', B: 'Glas', C: 'Holz', D: 'Plastik' },
                answer: 'C'
            },
            {
                text: 'Das Hemd ist weiß. Es ist aus Baumwolle. Es hat lange Ärmel. Ich trage es oft im Büro.',
                question: 'Welche Farbe hat das Hemd?',
                options: { A: 'Blau', B: 'Schwarz', C: 'Weiß', D: 'Grün' },
                answer: 'C'
            },
            {
                text: 'Ich backe einen Kuchen. Ich brauche Mehl, Eier, Zucker und Butter. Der Kuchen ist für meine Mutter. Sie hat heute Geburtstag.',
                question: 'Für wen ist der Kuchen?',
                options: { A: 'Für meinen Vater', B: 'Für meinen Bruder', C: 'Für meine Mutter', D: 'Für mich' },
                answer: 'C'
            },
            {
                text: 'Der Zug fährt um 10:15 Uhr ab. Er fährt nach Hamburg. Die Fahrt dauert zwei Stunden. Ich muss pünktlich am Bahnhof sein.',
                question: 'Wann fährt der Zug ab?',
                options: { A: '10:00 Uhr', B: '10:15 Uhr', C: '10:30 Uhr', D: '11:00 Uhr' },
                answer: 'B'
            },
            {
                text: 'Im Kühlschrank sind Eier, Milch, Butter und Käse. Es ist kein Joghurt da. Ich muss Joghurt kaufen gehen.',
                question: 'Was ist nicht im Kühlschrank?',
                options: { A: 'Eier', B: 'Milch', C: 'Joghurt', D: 'Käse' },
                answer: 'C'
            },
            {
                text: 'Ich schreibe eine E-Mail an meine Freundin. Ich erzähle ihr von meinem Urlaub. Ich schicke auch ein paar Fotos. Sie wird sich sicher freuen.',
                question: 'An wen schreibt die Person eine E-Mail?',
                options: { A: 'An ihre Mutter', B: 'An ihren Freund', C: 'An ihre Freundin', D: 'An ihren Chef' },
                answer: 'C'
            },
            {
                text: 'Das Telefon klingelt. Es ist meine Tante aus München. Sie fragt, wie es mir geht. Wir telefonieren lange.',
                question: 'Wer ruft an?',
                options: { A: 'Meine Mutter', B: 'Mein Onkel', C: 'Meine Tante', D: 'Meine Oma' },
                answer: 'C'
            },
            {
                text: 'Ich putze meine Wohnung. Ich sauge Staub, wische den Boden und putze die Fenster. Danach ist alles sauber. Das ist viel Arbeit.',
                question: 'Was macht die Person nicht?',
                options: { A: 'Staub saugen', B: 'Boden wischen', C: 'Fenster putzen', D: 'Wäsche waschen' },
                answer: 'D'
            },
            {
                text: 'Das Baby weint. Es hat Hunger. Die Mutter gibt ihm die Flasche. Dann schläft das Baby wieder ein.',
                question: 'Warum weint das Baby?',
                options: { A: 'Es ist müde.', B: 'Es hat Hunger.', C: 'Es ist krank.', D: 'Es will spielen.' },
                answer: 'B'
            },
            {
                text: 'Der Wecker klingelt um 6:30 Uhr. Ich bin noch sehr müde. Ich drücke die Schlummertaste. Fünf Minuten später klingelt er wieder.',
                question: 'Was macht die Person, als der Wecker klingelt?',
                options: { A: 'Aufstehen', B: 'Frühstücken', C: 'Die Schlummertaste drücken', D: 'Duschen' },
                answer: 'C'
            },
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
                { question: 'Sie hat ___ neuen Rock an. (ein)', answer: 'einen' },
                { question: 'Ich warte auf ___ Bus. (der)', answer: 'den' },
                { question: 'Er hat mir ___ schönes Geschenk gemacht. (ein)', answer: 'ein' },
                { question: 'Wir fahren im Sommer ___ Meer. (an)', answer: 'ans' },
                { question: 'Gestern ___ ich im Kino. (sein)', answer: 'war' },
                { question: 'Er hat das Fenster ___. (öffnen)', answer: 'geöffnet' },
                { question: 'Ich habe das nicht ___. (wollen)', answer: 'gewollt' },
                { question: 'Der Kaffee, ___ ich trinke, ist heiß. (der)', answer: 'den' },
                { question: 'Sie ist ___ ihrer Freundin ins Kino gegangen. (mit)', answer: 'mit' },
                { question: 'Ich muss ___ Zahnarzt gehen. (zu)', answer: 'zum' },
                { question: 'Gib mir bitte ___ Glas Wasser. (ein)', answer: 'ein' },
                { question: 'Er hat sich auf den Stuhl ___. (setzen)', answer: 'gesetzt' },
                { question: 'Ich freue mich auf ___ Urlaub. (der)', answer: 'den' },
                { question: 'Weil es regnet, ___ wir zu Hause. (bleiben)', answer: 'bleiben' },
                { question: 'Er hat ___ Fahrrad repariert. (sein)', answer: 'sein' },
                { question: 'Die Suppe schmeckt ___. (gut)', answer: 'gut' },
                { question: 'Ich habe den Schlüssel ___. (vergessen)', answer: 'vergessen' },
                { question: 'Sie hat ___ lange geschlafen. (sehr)', answer: 'sehr' },
                { question: 'Das ist der ___ Mann der Welt. (reich)', answer: 'reichste' },
                { question: 'Er hat mir geholfen, ___ ich ihn darum gebeten habe. (weil)', answer: 'weil' },
                { question: 'Ich habe ___ seit einer Woche nicht gesehen. (er)', answer: 'ihn' },
                { question: 'Das Bild hängt an ___ Wand. (die)', answer: 'der' },
                { question: 'Wir haben über das Problem ___. (sprechen)', answer: 'gesprochen' },
                { question: 'Sie ist am ___ von allen. (schnell)', answer: 'schnellsten' },
                { question: 'Ich habe ___ Geld. (kein)', answer: 'kein' },
                { question: 'Er ist ___ Hause. (zu)', answer: 'zu' },
                { question: 'Ich bin ___ dem Zug gekommen. (mit)', answer: 'mit' },
                { question: 'Kannst du mir bitte ___? (helfen)', answer: 'helfen' },
            ],
            'multiple-choice': [
                { question: 'Ich helfe ___ alten Frau.', options: { A: 'der', B: 'die', C: 'dem', D: 'den' }, answer: 'A' },
                { question: 'Er interessiert sich ___ Politik.', options: { A: 'für', B: 'an', C: 'auf', D: 'über' }, answer: 'A' },
                { question: '___ du gestern im Kino warst, habe ich geschlafen.', options: { A: 'Als', B: 'Wenn', C: 'Obwohl', D: 'Weil' }, answer: 'A' },
                { question: 'Das ist der Mann, ___ ich gesehen habe.', options: { A: 'der', B: 'dem', C: 'den', D: 'dessen' }, answer: 'C' },
                { question: 'Ich würde gern einen Kaffee ___.', options: { A: 'trinken', B: 'trinkt', C: 'getrunken', D: 'trank' }, answer: 'A' },
                { question: 'Er hat den Brief ___.', options: { A: 'schreibt', B: 'geschrieben', C: 'schrieb', D: 'schreiben' }, answer: 'B' },
                { question: 'Ich bin müde, ___ ich gehe jetzt ins Bett.', options: { A: 'denn', B: 'weil', C: 'deshalb', D: 'obwohl' }, answer: 'C' },
                { question: 'Sie hat ___ Mantel an.', options: { A: 'ihr', B: 'ihre', C: 'ihren', D: 'ihrem' }, answer: 'C' },
                { question: 'Ich habe keine Lust, ___ zu arbeiten.', options: { A: 'heute', B: 'morgen', C: 'gestern', D: 'jetzt' }, answer: 'A' },
                { question: 'Er ist ___ als sein Bruder.', options: { A: 'älter', B: 'alt', C: 'am ältesten', D: 'älteren' }, answer: 'A' },
                { question: 'Das Auto gehört ___.', options: { A: 'mich', B: 'mir', C: 'mein', D: 'meiner' }, answer: 'B' },
                { question: 'Er hat den Kuchen selbst ___.', options: { A: 'gebacken', B: 'backen', C: 'backt', D: 'buk' }, answer: 'A' },
                { question: 'Ich erinnere mich nicht ___ seinen Namen.', options: { A: 'auf', B: 'über', C: 'an', D: 'für' }, answer: 'C' },
                { question: '___ es geregnet hat, sind wir spazieren gegangen.', options: { A: 'Weil', B: 'Als', C: 'Wenn', D: 'Obwohl' }, answer: 'D' },
                { question: 'Ich fahre ___ dem Fahrrad zur Arbeit.', options: { A: 'mit', B: 'auf', C: 'an', D: 'in' }, answer: 'A' },
                { question: 'Sie hat ___ Angst vor Spinnen.', options: { A: 'kein', B: 'keine', C: 'keinen', D: 'nichts' }, answer: 'B' },
                { question: 'Der Film war sehr ___.', options: { A: 'interessant', B: 'interessante', C: 'interessanten', D: 'interessantem' }, answer: 'A' },
                { question: 'Ich muss meine Hausaufgaben ___.', options: { A: 'macht', B: 'mache', C: 'gemacht', D: 'machen' }, answer: 'D' },
                { question: 'Er hat mir ___ Buch geliehen.', options: { A: 'sein', B: 'seine', C: 'seinen', D: 'seinem' }, answer: 'A' },
                { question: 'Die Kinder spielen ___ Garten.', options: { A: 'im', B: 'in den', C: 'in dem', D: 'in der' }, answer: 'A' },
                { question: 'Ich habe ___ angerufen.', options: { A: 'er', B: 'ihm', C: 'ihn', D: 'sein' }, answer: 'C' },
                { question: 'Sie wartet ___ den Bus.', options: { A: 'auf', B: 'an', C: 'für', D: 'mit' }, answer: 'A' },
                { question: 'Ich bin ___ Meinung, dass das eine gute Idee ist.', options: { A: 'der', B: 'die', C: 'dem', D: 'des' }, answer: 'A' },
                { question: 'Er hat das Geschirr ___.', options: { A: 'spülen', B: 'gespült', C: 'spült', D: 'spülte' }, answer: 'B' },
                { question: 'Wir sind ___ dem Meer spazieren gegangen.', options: { A: 'am', B: 'im', C: 'ans', D: 'ins' }, answer: 'A' },
                { question: '___ ich ein Kind war, habe ich viel gespielt.', options: { A: 'Als', B: 'Wenn', C: 'Weil', D: 'Obwohl' }, answer: 'A' },
                { question: 'Ich habe ___ verstanden.', options: { A: 'nichts', B: 'kein', C: 'keine', D: 'niemand' }, answer: 'A' },
                { question: 'Das ist das Haus, ___ meine Großeltern wohnen.', options: { A: 'in dem', B: 'das', C: 'wo', D: 'in das' }, answer: 'A' },
                { question: 'Er hat sich ___ sein neues Auto gefreut.', options: { A: 'auf', B: 'über', C: 'an', D: 'für' }, answer: 'B' },
                { question: 'Ich bin sicher, ___ er kommen wird.', options: { A: 'dass', B: 'ob', C: 'wenn', D: 'weil' }, answer: 'A' },
                { question: 'Sie ist ___ als ich.', options: { A: 'intelligent', B: 'intelligenter', C: 'am intelligentesten', D: 'intelligentere' }, answer: 'B' },
                { question: 'Ich habe ihm das Buch ___.', options: { A: 'gibt', B: 'gegeben', C: 'gab', D: 'geben' }, answer: 'B' },
                { question: 'Er hat ___ Reise nach Berlin gemacht.', options: { A: 'ein', B: 'eine', C: 'einen', D: 'einem' }, answer: 'B' },
            ],
        },
        reading: [
            {
                text: 'Gestern war ich im Supermarkt. Ich wollte Äpfel, Brot und Milch kaufen. Aber die Äpfel waren nicht frisch, also habe ich nur Brot und Milch gekauft.',
                question: 'Was hat die Person nicht gekauft?',
                options: { A: 'Brot', B: 'Milch', C: 'Äpfel', D: 'Käse' },
                answer: 'C'
            },
            {
                text: 'Meine Freundin Lisa hat bald Geburtstag. Ich möchte ihr ein Geschenk kaufen. Sie liest gerne, also denke ich, ein Buch ist eine gute Idee. Sie mag Kriminalromane.',
                question: 'Was für ein Geschenk ist eine gute Idee?',
                options: { A: 'Ein Film', B: 'Ein Buch', C: 'Eine CD', D: 'Ein Spiel' },
                answer: 'B'
            },
            {
                text: 'Am Montag habe ich einen Arzttermin. Der Termin ist um 14:30 Uhr. Ich muss vorher noch in die Apotheke gehen, um ein Rezept einzulösen. Ich hoffe, ich bin pünktlich.',
                question: 'Was muss die Person vor dem Arzttermin machen?',
                options: { A: 'Einkaufen gehen', B: 'Freunde treffen', C: 'Zur Apotheke gehen', D: 'Zur Arbeit fahren' },
                answer: 'C'
            },
            {
                text: 'Ich habe meinen Job gewechselt. Früher war ich Kellner, jetzt arbeite ich im Büro. Die Arbeit ist anders, aber sie gefällt mir gut. Die Kollegen sind sehr nett.',
                question: 'Was war der frühere Job der Person?',
                options: { A: 'Koch', B: 'Büroangestellter', C: 'Kellner', D: 'Lehrer' },
                answer: 'C'
            },
            {
                text: 'Für meinen Urlaub habe ich einen Flug nach Portugal gebucht. Ich fliege nächste Woche. Ich habe auch schon ein Hotel reserviert. Ich freue mich darauf, am Strand zu liegen und das gute Essen zu genießen.',
                question: 'Was hat die Person noch nicht gemacht?',
                options: { A: 'Flug gebucht', B: 'Hotel reserviert', C: 'Koffer gepackt', D: 'Sich auf den Urlaub gefreut' },
                answer: 'C'
            },
            {
                text: 'Wenn das Wetter am Wochenende gut ist, möchte ich eine Fahrradtour machen. Ich fahre gern durch den Wald. Wenn es regnet, bleibe ich zu Hause und lese ein Buch.',
                question: 'Was macht die Person bei Regen?',
                options: { A: 'Fahrradtour', B: 'Im Wald spazieren', C: 'Ein Buch lesen', D: 'Freunde besuchen' },
                answer: 'C'
            },
            {
                text: 'Ich lerne seit einem Jahr Spanisch. Es ist nicht einfach, aber ich mache Fortschritte. Ich kann schon einfache Gespräche führen. Nächstes Jahr möchte ich nach Spanien reisen, um meine Sprachkenntnisse zu verbessern.',
                question: 'Warum möchte die Person nach Spanien reisen?',
                options: { A: 'Um Urlaub zu machen', B: 'Um zu arbeiten', C: 'Um ihre Sprachkenntnisse zu verbessern', D: 'Um ihre Familie zu besuchen' },
                answer: 'C'
            },
            {
                text: 'Die Wohnungssuche in der Stadt ist schwierig. Die Mieten sind sehr hoch und es gibt nur wenige Angebote. Ich habe schon viele Wohnungen angeschaut, aber noch nicht die richtige gefunden. Ich hoffe, ich habe bald Glück.',
                question: 'Warum ist die Wohnungssuche schwierig?',
                options: { A: 'Es gibt zu viele Angebote.', B: 'Die Mieten sind niedrig.', C: 'Die Mieten sind hoch und es gibt wenige Angebote.', D: 'Die Wohnungen sind alle zu groß.' },
                answer: 'C'
            },
            {
                text: 'Ich habe gestern einen Kuchen gebacken. Ich habe ein neues Rezept ausprobiert. Der Kuchen ist leider nicht so gut geworden, er war zu trocken. Das nächste Mal nehme ich ein anderes Rezept.',
                question: 'Was war das Problem mit dem Kuchen?',
                options: { A: 'Er war zu süß.', B: 'Er war verbrannt.', C: 'Er war zu trocken.', D: 'Er war zu klein.' },
                answer: 'C'
            },
            {
                text: 'Ich muss mein Auto in die Werkstatt bringen. Der Motor macht komische Geräusche. Die Reparatur wird wahrscheinlich teuer. Ich hoffe, es ist nichts Schlimmes.',
                question: 'Warum muss das Auto in die Werkstatt?',
                options: { A: 'Die Reifen sind platt.', B: 'Das Licht ist kaputt.', C: 'Der Motor macht Geräusche.', D: 'Das Benzin ist leer.' },
                answer: 'C'
            },
            {
                text: 'In der Kantine gab es heute Fisch mit Kartoffeln. Ich mag keinen Fisch, deshalb habe ich nur einen Salat gegessen. Morgen gibt es zum Glück Pizza.',
                question: 'Was hat die Person heute gegessen?',
                options: { A: 'Fisch mit Kartoffeln', B: 'Pizza', C: 'Einen Salat', D: 'Nichts' },
                answer: 'C'
            },
            {
                text: 'Mein Computer ist kaputt. Ich kann ihn nicht mehr starten. Ich brauche ihn dringend für meine Arbeit. Ich werde ihn heute Nachmittag zu einem Spezialisten bringen.',
                question: 'Was ist das Problem?',
                options: { A: 'Der Drucker funktioniert nicht.', B: 'Der Computer ist zu langsam.', C: 'Der Computer startet nicht mehr.', D: 'Das Internet geht nicht.' },
                answer: 'C'
            },
            {
                text: 'Ich habe eine Einladung zu einer Hochzeit bekommen. Die Hochzeit ist in zwei Wochen. Ich weiß noch nicht, was ich anziehen soll. Ich muss mir noch ein schönes Kleid kaufen.',
                question: 'Was muss die Person noch kaufen?',
                options: { A: 'Schuhe', B: 'Ein Geschenk', C: 'Ein Kleid', D: 'Eine Handtasche' },
                answer: 'C'
            },
            {
                text: 'Der Wecker hat heute Morgen nicht geklingelt. Deshalb bin ich zu spät aufgewacht. Ich habe mich beeilt, aber ich habe den Bus verpasst. Ich bin zu spät zur Arbeit gekommen.',
                question: 'Warum ist die Person zu spät gekommen?',
                options: { A: 'Der Bus hatte Verspätung.', B: 'Sie hat den Bus verpasst.', C: 'Es gab viel Verkehr.', D: 'Sie war krank.' },
                answer: 'B'
            },
            {
                text: 'Ich möchte einen Hund aus dem Tierheim adoptieren. Dort gibt es viele Hunde, die ein neues Zuhause suchen. Ich denke, es ist besser, einen Hund zu adoptieren, als einen vom Züchter zu kaufen.',
                question: 'Woher möchte die Person einen Hund haben?',
                options: { A: 'Vom Züchter', B: 'Aus dem Tierheim', C: 'Von einem Freund', D: 'Aus dem Ausland' },
                answer: 'B'
            },
            {
                text: 'Meine Nachbarn sind sehr laut. Sie hören oft bis spät in die Nacht laute Musik. Ich habe schon mit ihnen gesprochen, aber es hat sich nichts geändert. Ich überlege, mich beim Vermieter zu beschweren.',
                question: 'Was ist das Problem mit den Nachbarn?',
                options: { A: 'Sie sind unfreundlich.', B: 'Sie machen viel Müll.', C: 'Sie hören laute Musik.', D: 'Sie haben einen Hund, der bellt.' },
                answer: 'C'
},
            {
                text: 'Ich habe versucht, online ein Zugticket zu kaufen, aber die Webseite hat nicht funktioniert. Deshalb bin ich zum Bahnhof gefahren und habe das Ticket am Schalter gekauft. Es war teurer, aber ich habe es bekommen.',
                question: 'Wo hat die Person das Ticket gekauft?',
                options: { A: 'Online', B: 'Am Automaten', C: 'Im Reisebüro', D: 'Am Schalter' },
                answer: 'D'
            },
            {
                text: 'Das Fitnessstudio hat ein neues Angebot. Wenn man sich jetzt anmeldet, zahlt man für die ersten drei Monate nur die Hälfte. Ich überlege, ob ich das Angebot annehmen soll. Ich möchte mehr Sport machen.',
                question: 'Was ist das Besondere an dem Angebot?',
                options: { A: 'Man bekommt ein Handtuch geschenkt.', B: 'Man zahlt für die ersten drei Monate weniger.', C: 'Man kann einen Freund kostenlos mitbringen.', D: 'Die Anmeldung ist kostenlos.' },
                answer: 'B'
            },
            {
                text: 'Ich habe Kopfschmerzen. Ich glaube, ich habe zu wenig getrunken. Ich werde jetzt ein großes Glas Wasser trinken und mich etwas hinlegen. Normalerweise hilft das.',
                question: 'Was ist der vermutete Grund für die Kopfschmerzen?',
                options: { A: 'Zu viel Stress', B: 'Zu wenig Schlaf', C: 'Zu wenig getrunken', D: 'Zu viel gegessen' },
                answer: 'C'
            },
            {
                text: 'Ich habe meine Schlüssel verloren. Ich habe überall gesucht: in meiner Tasche, in meiner Jacke und auf dem Tisch. Ich kann sie nicht finden. Ich hoffe, ich habe sie nicht auf der Straße verloren.',
                question: 'Was hat die Person verloren?',
                options: { A: 'Ihr Handy', B: 'Ihr Portemonnaie', C: 'Ihre Schlüssel', D: 'Ihre Brille' },
                answer: 'C'
            },
            {
                text: 'Die Bibliothek ist montags bis freitags von 10 bis 18 Uhr geöffnet. Am Samstag ist sie von 10 bis 14 Uhr geöffnet. Am Sonntag ist sie geschlossen. Ich muss heute noch ein Buch zurückbringen.',
                question: 'Wann ist die Bibliothek am Sonntag geöffnet?',
                options: { A: 'Von 10-18 Uhr', B: 'Von 10-14 Uhr', C: 'Ganztägig', D: 'Sie ist geschlossen.' },
                answer: 'D'
            },
            {
                text: 'Um gesund zu bleiben, sollte man viel Obst und Gemüse essen. Man sollte auch regelmäßig Sport treiben und genug schlafen. Rauchen und zu viel Alkohol sind ungesund.',
                question: 'Was ist ungesund?',
                options: { A: 'Obst essen', B: 'Sport treiben', C: 'Genug schlafen', D: 'Rauchen' },
                answer: 'D'
            },
            {
                text: 'Mein Lieblingsfilm ist "Ziemlich beste Freunde". Es ist eine französische Komödie. Der Film ist sehr lustig, aber auch emotional. Ich habe ihn schon oft gesehen.',
                question: 'Um welche Art von Film handelt es sich?',
                options: { A: 'Actionfilm', B: 'Horrorfilm', C: 'Komödie', D: 'Dokumentarfilm' },
                answer: 'C'
            },
            {
                text: 'Ich habe mich an der Hand verletzt. Die Wunde hat geblutet. Ich habe ein Pflaster darauf geklebt. Es tut immer noch ein bisschen weh.',
                question: 'Was hat die Person auf die Wunde geklebt?',
                options: { A: 'Einen Verband', B: 'Ein Pflaster', C: 'Eine Creme', D: 'Nichts' },
                answer: 'B'
            },
            {
                text: 'Ich fahre mit dem Zug nach Berlin. Ich habe einen Sitzplatz am Fenster reserviert. Ich schaue gern aus dem Fenster, während der Zug fährt. Die Fahrt dauert vier Stunden.',
                question: 'Wo sitzt die Person im Zug?',
                options: { A: 'Am Gang', B: 'Im Speisewagen', C: 'Am Fenster', D: 'In der ersten Klasse' },
                answer: 'C'
            },
            {
                text: 'Das Konzert war fantastisch. Die Band hat super gespielt und die Stimmung war toll. Es waren sehr viele Leute da. Ich habe die ganze Zeit getanzt.',
                question: 'Wie war das Konzert?',
                options: { A: 'Langweilig', B: 'Schlecht', C: 'Fantastisch', D: 'Zu laut' },
                answer: 'C'
            },
            {
                text: 'Ich habe eine neue Pflanze für mein Wohnzimmer gekauft. Es ist ein Ficus. Ich hoffe, er wächst gut. Ich muss ihn regelmäßig gießen.',
                question: 'Was hat die Person gekauft?',
                options: { A: 'Einen Tisch', B: 'Ein Bild', C: 'Eine Lampe', D: 'Eine Pflanze' },
                answer: 'D'
            },
            {
                text: 'Es hat die ganze Nacht geschneit. Alles ist weiß. Die Kinder freuen sich und wollen einen Schneemann bauen. Ich muss später das Auto vom Schnee befreien.',
                question: 'Was wollen die Kinder bauen?',
                options: { A: 'Eine Sandburg', B: 'Einen Schneemann', C: 'Ein Iglu', D: 'Eine Höhle' },
                answer: 'B'
            },
            {
                text: 'Die Prüfung war sehr schwer. Ich glaube nicht, dass ich sie bestanden habe. Ich habe viele Fragen nicht verstanden. Ich muss das Ergebnis abwarten.',
                question: 'Wie war die Prüfung?',
                options: { A: 'Einfach', B: 'Kurz', C: 'Schwer', D: 'Mündlich' },
                answer: 'C'
            },
            {
                text: 'Ich habe eine Postkarte von meiner Freundin aus Italien bekommen. Sie schreibt, dass das Wetter super ist und das Essen sehr lecker. Sie schickt viele Grüße. Ich freue mich sehr darüber.',
                question: 'Woher kommt die Postkarte?',
                options: { A: 'Spanien', B: 'Frankreich', C: 'Italien', D: 'Griechenland' },
                answer: 'C'
            },
            {
                text: 'Ich habe mir den Fuß verstaucht. Ich kann nicht gut laufen. Der Arzt hat gesagt, ich soll den Fuß kühlen und hochlegen. Ich muss eine Woche lang zu Hause bleiben.',
                question: 'Was hat der Arzt empfohlen?',
                options: { A: 'Den Fuß wärmen', B: 'Viel laufen', C: 'Den Fuß kühlen und hochlegen', D: 'Arbeiten gehen' },
                answer: 'C'
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
                { question: 'Er hat versucht, die Tür zu ___. (öffnen)', answer: 'öffnen' },
                { question: 'Ich bin nicht sicher, ___ er kommt. (ob)', answer: 'ob' },
                { question: 'Anstatt ___ helfen, hat er nur zugeschaut. (zu)', answer: 'zu' },
                { question: 'Der Roman wurde von einem berühmten Autor ___. (schreiben)', answer: 'geschrieben' },
                { question: 'Er arbeitet, ___ Geld zu verdienen. (um)', answer: 'um' },
                { question: 'Sie hat das Kleid, ___ ihr so gut gefiel, nicht gekauft. (das)', answer: 'das' },
                { question: 'Ich habe ihm ___, die Wahrheit zu sagen. (raten)', answer: 'geraten' },
                { question: 'Nachdem er ___ hatte, ging er schlafen. (essen)', answer: 'gegessen' },
                { question: 'Er spricht so, ___ er alles wüsste. (als ob)', answer: 'als ob' },
                { question: 'Das Auto wird gerade ___. (reparieren)', answer: 'repariert' },
                { question: 'Ich interessiere mich ___ Kunst. (für)', answer: 'für' },
                { question: 'Er ist nicht nur klug, ___ auch fleißig. (sondern)', answer: 'sondern' },
                { question: 'Trotz ___ Regens gingen wir spazieren. (der)', answer: 'des' },
                { question: 'Es ist verboten, hier zu ___. (rauchen)', answer: 'rauchen' },
                { question: 'Ich habe keine Ahnung, ___ das ist. (wer)', answer: 'wer' },
                { question: 'Die Suppe, die meine Mutter gekocht hat, schmeckt ___. (lecker)', answer: 'lecker' },
                { question: 'Er hat sich bei mir ___ die Hilfe bedankt. (für)', answer: 'für' },
                { question: 'Während ich ___, hat er ferngesehen. (kochen)', answer: 'kochte' },
                { question: 'Die Aufgabe muss bis morgen ___ werden. (erledigen)', answer: 'erledigt' },
                { question: 'Er hat sich ___ die Prüfung vorbereitet. (auf)', answer: 'auf' },
                { question: 'Es scheint, ___ die Sonne bald untergeht. (dass)', answer: 'dass' },
                { question: 'Weder er ___ sie konnten die Frage beantworten. (noch)', answer: 'noch' },
                { question: 'Ich bin es ___, früh aufzustehen. (gewohnt)', answer: 'gewohnt' },
                { question: 'Anstatt eines Buches hat er mir Schokolade ___. (schenken)', answer: 'geschenkt' },
                { question: 'Ich würde vorschlagen, dass wir uns morgen ___. (treffen)', answer: 'treffen' },
                { question: 'Er hat Angst ___, die Prüfung nicht zu bestehen. (davor)', answer: 'davor' },
                { question: 'Die Blumen müssen gegoßen ___. (werden)', answer: 'werden' },
                { question: 'Er hat mir versprochen, pünktlich zu ___. (sein)', answer: 'sein' },
            ],
            'multiple-choice': [
                { question: 'Erinnerst du dich ___ unseren Urlaub?', options: { A: 'auf', B: 'an', C: 'über', D: 'für' }, answer: 'B' },
                { question: 'Es ist wichtig, ___ man regelmäßig Sport treibt.', options: { A: 'dass', B: 'ob', C: 'weil', D: 'wenn' }, answer: 'A' },
                { question: '___ er krank war, ist er zur Arbeit gegangen.', options: { A: 'Weil', B: 'Dass', C: 'Als', D: 'Obwohl' }, answer: 'D' },
                { question: 'Ich habe vor, nächstes Jahr nach Japan ___ .', options: { A: 'fliegen', B: 'zu fliegen', C: 'geflogen', D: 'flog' }, answer: 'B' },
                { question: 'Weder mein Bruder ___ meine Schwester hat Zeit.', options: { A: 'und', B: 'oder', C: 'noch', D: 'als' }, answer: 'C' },
                { question: 'Der Brief muss heute noch ___ werden.', options: { A: 'schreiben', B: 'geschrieben', C: 'schrieb', D: 'schreibt' }, answer: 'B' },
                { question: 'Er freut sich ___, dass er die Prüfung bestanden hat.', options: { A: 'darüber', B: 'darauf', C: 'daran', D: 'dafür' }, answer: 'A' },
                { question: 'Ich habe den Mann gesehen, ___ du geholfen hast.', options: { A: 'der', B: 'den', C: 'dem', D: 'dessen' }, answer: 'C' },
                { question: '___ du mehr Sport treibst, ___ fitter wirst du.', options: { A: 'Wenn / dann', B: 'Je / desto', C: 'Als / da', D: 'Entweder / oder' }, answer: 'B' },
                { question: 'Er hat das Buch gelesen, ___ er es zurückgegeben hat.', options: { A: 'nachdem', B: 'bevor', C: 'während', D: 'seitdem' }, answer: 'B' },
                { question: 'Die Firma sucht einen Mitarbeiter, ___ gut Englisch spricht.', options: { A: 'der', B: 'den', C: 'dem', D: 'dessen' }, answer: 'A' },
                { question: 'Ich kann nicht kommen, ___ ich krank bin.', options: { A: 'denn', B: 'weil', C: 'deshalb', D: 'trotzdem' }, answer: 'B' },
                { question: 'Er hat aufgehört zu rauchen, ___ seiner Gesundheit willen.', options: { A: 'wegen', B: 'trotz', C: 'um', D: 'statt' }, answer: 'C' },
                { question: 'Die Kinder spielen draußen, ___ die Sonne scheint.', options: { A: 'während', B: 'solange', C: 'nachdem', D: 'bevor' }, answer: 'B' },
                { question: 'Er hat sich ___ die laute Musik beschwert.', options: { A: 'über', B: 'auf', C: 'an', D: 'für' }, answer: 'A' },
                { question: '___ ich ihm helfen wollte, hat er meine Hilfe abgelehnt.', options: { A: 'Als', B: 'Obwohl', C: 'Wenn', D: 'Weil' }, answer: 'B' },
                { question: 'Das ist eine Frage, ___ ich nicht antworten kann.', options: { A: 'auf die', B: 'die', C: 'auf der', D: 'über die' }, answer: 'A' },
                { question: 'Er hat den Test bestanden, ohne ___ zu lernen.', options: { A: 'dass', B: 'um', C: 'statt', D: 'dafür' }, answer: 'D' },
                { question: 'Ich habe ___ gelernt, als auch gearbeitet.', options: { A: 'sowohl', B: 'weder', C: 'entweder', D: 'nicht nur' }, answer: 'A' },
                { question: 'Das Fahrrad wird von ihm ___.', options: { A: 'reparieren', B: 'repariert', C: 'reparierte', D: 'hat repariert' }, answer: 'B' },
                { question: 'Er hat sich entschlossen, ins Ausland ___.', options: { A: 'gehen', B: 'zu gehen', C: 'ging', D: 'gegangen' }, answer: 'B' },
                { question: 'Ich bin müde. ___, muss ich die Arbeit fertig machen.', options: { A: 'Deshalb', B: 'Weil', C: 'Obwohl', D: 'Trotzdem' }, answer: 'D' },
                { question: 'Er hat mir geholfen, ___ ich ihm sehr dankbar bin.', options: { A: 'wofür', B: 'worüber', C: 'woran', D: 'womit' }, answer: 'A' },
                { question: 'Die Rede, ___ er gehalten hat, war sehr inspirierend.', options: { A: 'der', B: 'die', C: 'das', D: 'den' }, answer: 'B' },
                { question: 'Er ist bekannt ___ seine lustige Art.', options: { A: 'für', B: 'als', C: 'mit', D: 'über' }, answer: 'A' },
                { question: 'Ich habe das Gefühl, ___ etwas nicht stimmt.', options: { A: 'dass', B: 'ob', C: 'wenn', D: 'als' }, answer: 'A' },
                { question: '___ des Termins konnte er nicht kommen.', options: { A: 'Wegen', B: 'Trotz', C: 'Statt', D: 'Während' }, answer: 'A' },
                { question: 'Er hat mir das Buch empfohlen, ___ ich gerade lese.', options: { A: 'das', B: 'was', C: 'welches', D: 'dessen' }, answer: 'A' },
                { question: 'Ich bin davon überzeugt, ___ wir das schaffen werden.', options: { A: 'dass', B: 'ob', C: 'um', D: 'damit' }, answer: 'A' },
                { question: 'Je länger er wartete, ___ ungeduldiger wurde er.', options: { A: 'so', B: 'als', C: 'desto', D: 'denn' }, answer: 'C' },
                { question: 'Er hat die Prüfung bestanden, ___ er kaum gelernt hatte.', options: { A: 'weil', B: 'obwohl', C: 'denn', D: 'damit' }, answer: 'B' },
                { question: 'Das Haus, in ___ er wohnt, ist sehr alt.', options: { A: 'das', B: 'dem', C: 'den', D: 'dessen' }, answer: 'B' },
                { question: 'Sie hat mir geholfen, ___ den Koffer zu tragen.', options: { A: 'bei', B: 'beim', C: 'um', D: 'für' }, answer: 'B' },
            ],
        },
        reading: [
            {
                text: 'Die Digitalisierung hat die Arbeitswelt stark verändert. Viele Berufe, die früher wichtig waren, gibt es heute nicht mehr. Dafür sind neue Berufsfelder entstanden, die digitale Kompetenzen erfordern. Eine ständige Weiterbildung ist daher unerlässlich geworden.',
                question: 'Was ist eine Folge der Digitalisierung?',
                options: { A: 'Es gibt weniger Arbeit.', B: 'Alle alten Berufe sind verschwunden.', C: 'Ständige Weiterbildung ist wichtig geworden.', D: 'Man braucht keine digitalen Kompetenzen.' },
                answer: 'C'
            },
            {
                text: 'Umweltbewusstes Leben wird für viele Menschen immer wichtiger. Sie versuchen, Müll zu vermeiden, weniger Plastik zu verwenden und regionale Produkte zu kaufen. Das schont nicht nur die Umwelt, sondern unterstützt auch die lokale Wirtschaft.',
                question: 'Was ist kein Beispiel für umweltbewusstes Leben?',
                options: { A: 'Müll vermeiden', B: 'Produkte aus der Region kaufen', C: 'Viel Plastik benutzen', D: 'Lokale Wirtschaft unterstützen' },
                answer: 'C'
            },
            {
                text: 'Der Online-Handel wächst seit Jahren kontinuierlich. Viele Kunden schätzen die bequeme Bestellung von zu Hause und die große Auswahl. Der stationäre Einzelhandel steht dadurch vor großen Herausforderungen und muss neue Konzepte entwickeln, um Kunden zu halten, z.B. durch bessere Beratung und Einkaufserlebnisse.',
                question: 'Was ist eine Herausforderung für den stationären Einzelhandel?',
                options: { A: 'Wachsender Online-Handel', B: 'Kleine Auswahl', C: 'Schlechte Beratung', D: 'Hohe Preise' },
                answer: 'A'
            },
            {
                text: 'Flexible Arbeitsmodelle wie Homeoffice oder Teilzeitarbeit werden immer beliebter. Sie ermöglichen eine bessere Vereinbarkeit von Beruf und Familie. Allerdings erfordern sie auch ein hohes Maß an Selbstorganisation und Disziplin von den Arbeitnehmern. Zudem kann die soziale Anbindung an das Kollegium verloren gehen.',
                question: 'Was ist ein Nachteil von flexiblen Arbeitsmodellen?',
                options: { A: 'Bessere Vereinbarkeit von Beruf und Familie', B: 'Weniger Flexibilität', C: 'Möglicher Verlust des sozialen Kontakts zu Kollegen', D: 'Geringere Anforderungen an die Disziplin' },
                answer: 'C'
            },
            {
                text: 'Soziale Medien sind aus dem Alltag vieler Menschen nicht mehr wegzudenken. Sie dienen der Kommunikation, Information und Unterhaltung. Kritiker warnen jedoch vor den Gefahren wie Cybermobbing, Falschinformationen und der Entstehung einer Sucht. Ein bewusster und kritischer Umgang mit diesen Plattformen ist daher wichtig.',
                question: 'Was ist eine Gefahr von sozialen Medien?',
                options: { A: 'Unterhaltung', B: 'Kommunikation', C: 'Cybermobbing', D: 'Information' },
                answer: 'C'
            },
            {
                text: 'Erneuerbare Energien wie Sonne, Wind und Wasser spielen eine zentrale Rolle im Kampf gegen den Klimawandel. Ihr Ausbau ist notwendig, um die Abhängigkeit von fossilen Brennstoffen wie Kohle und Öl zu reduzieren. Eine Herausforderung dabei ist die Speicherung der Energie, da Sonne und Wind nicht immer verfügbar sind.',
                question: 'Was ist eine Herausforderung beim Ausbau erneuerbarer Energien?',
                options: { A: 'Ihre unendliche Verfügbarkeit', B: 'Die Reduzierung von CO2', C: 'Die Speicherung der Energie', D: 'Die Unabhängigkeit von Kohle und Öl' },
                answer: 'C'
            },
            {
                text: 'Eine ausgewogene Ernährung ist die Grundlage für ein gesundes Leben. Dazu gehören viel Obst und Gemüse, Vollkornprodukte und wenig verarbeitete Lebensmittel. Ausreichend Wasser zu trinken ist ebenfalls essenziell. Mangelernährung kann hingegen zu vielfältigen Gesundheitsproblemen führen.',
                question: 'Was gehört nicht zu einer ausgewogenen Ernährung?',
                options: { A: 'Viel Obst und Gemüse', B: 'Vollkornprodukte', C: 'Viel Wasser trinken', D: 'Viele verarbeitete Lebensmittel' },
                answer: 'D'
            },
            {
                text: 'Das Ehrenamt, also die freiwillige und unbezahlte Arbeit für die Gesellschaft, ist eine wichtige Stütze des sozialen Lebens. Menschen engagieren sich in Sportvereinen, bei der Feuerwehr oder in sozialen Projekten. Ohne dieses Engagement wären viele Angebote nicht möglich.',
                question: 'Was ist ein Merkmal des Ehrenamts?',
                options: { A: 'Es wird hoch bezahlt.', B: 'Es ist eine verpflichtende Arbeit.', C: 'Es ist freiwillig und unbezahlt.', D: 'Es gibt nur wenige Bereiche für Engagement.' },
                answer: 'C'
            },
            {
                text: 'Der Tourismus kann für eine Region sowohl Segen als auch Fluch sein. Einerseits schafft er Arbeitsplätze und bringt Geld in die Region. Andererseits kann er zu überfüllten Städten, Umweltproblemen und steigenden Preisen führen. Nachhaltiger Tourismus versucht, diese negativen Effekte zu minimieren.',
                question: 'Was ist ein negativer Aspekt des Tourismus?',
                options: { A: 'Schaffung von Arbeitsplätzen', B: 'Wirtschaftlicher Aufschwung', C: 'Umweltprobleme', D: 'Kultureller Austausch' },
                answer: 'C'
            },
            {
                text: 'Lebenslanges Lernen ist in der heutigen schnelllebigen Welt zu einer Notwendigkeit geworden. Technologische und gesellschaftliche Veränderungen erfordern eine ständige Anpassung und Erweiterung der eigenen Fähigkeiten und Kenntnisse. Dies kann durch Kurse, Weiterbildungen oder auch durch Selbststudium geschehen.',
                question: 'Warum ist lebenslanges Lernen notwendig?',
                options: { A: 'Weil sich nichts verändert.', B: 'Aufgrund von technologischen und gesellschaftlichen Veränderungen.', C: 'Weil man in der Schule nicht alles lernt.', D: 'Um weniger arbeiten zu müssen.' },
                answer: 'B'
            },
            {
                text: 'Die Bedeutung von Fremdsprachenkenntnissen in einer globalisierten Welt kann kaum überschätzt werden. Sie erleichtern nicht nur die Kommunikation auf Reisen, sondern sind auch im Berufsleben oft eine Schlüsselqualifikation. Zudem fördert das Erlernen einer Fremdsprache das Verständnis für andere Kulturen.',
                question: 'Was ist kein Vorteil von Fremdsprachenkenntnissen?',
                options: { A: 'Bessere Berufschancen', B: 'Einfachere Kommunikation auf Reisen', C: 'Größeres Verständnis für die eigene Kultur', D: 'Förderung des interkulturellen Verständnisses' },
                answer: 'C'
            },
            {
                text: 'Urban Gardening, also das Gärtnern in der Stadt, erfreut sich großer Beliebtheit. Auf Balkonen, Dächern oder in Gemeinschaftsgärten bauen Menschen ihr eigenes Gemüse und Kräuter an. Das ist nicht nur ein Hobby, sondern trägt auch zur Artenvielfalt und zu einem besseren Stadtklima bei.',
                question: 'Was ist ein positiver Effekt von Urban Gardening?',
                options: { A: 'Es führt zu mehr Verkehr.', B: 'Es verbessert das Stadtklima.', C: 'Es erfordert große Flächen.', D: 'Es ist nur für Profis geeignet.' },
                answer: 'B'
            },
            {
                text: 'Das duale Ausbildungssystem in Deutschland kombiniert die praktische Arbeit in einem Betrieb mit dem theoretischen Unterricht in einer Berufsschule. Dieser enge Bezug zur Praxis wird international als Stärke des deutschen Bildungssystems angesehen und sorgt für gut qualifizierte Fachkräfte.',
                question: 'Woraus besteht das duale Ausbildungssystem?',
                options: { A: 'Nur aus universitärer Lehre.', B: 'Nur aus praktischer Arbeit im Betrieb.', C: 'Aus Arbeit im Betrieb und Unterricht in der Berufsschule.', D: 'Aus einem reinen Online-Studium.' },
                answer: 'C'
            },
            {
                text: 'Der Schutz persönlicher Daten im Internet ist ein wichtiges Thema. Bei der Nutzung von Online-Diensten hinterlassen wir viele Spuren. Es ist ratsam, sichere Passwörter zu verwenden, vorsichtig mit der Weitergabe von Informationen zu sein und die Datenschutzeinstellungen von Diensten zu überprüfen.',
                question: 'Was ist keine empfohlene Maßnahme zum Datenschutz?',
                options: { A: 'Sichere Passwörter verwenden', B: 'Informationen großzügig teilen', C: 'Datenschutzeinstellungen prüfen', D: 'Vorsichtig bei der Weitergabe von Daten sein' },
                answer: 'B'
            },
            {
                text: 'Das Fahrrad gewinnt als Verkehrsmittel in Städten an Bedeutung. Es ist umweltfreundlich, kostengünstig und fördert die Gesundheit. Voraussetzung für eine stärkere Nutzung ist jedoch eine gut ausgebaute und sichere Infrastruktur mit Radwegen.',
                question: 'Was ist eine Voraussetzung für mehr Radverkehr?',
                options: { A: 'Höhere Benzinpreise', B: 'Weniger Autos', C: 'Eine gute Radinfrastruktur', D: 'Schlechtes Wetter' },
                answer: 'C'
            },
            {
                text: 'Viele Menschen leiden unter Stress im Alltag, ausgelöst durch berufliche oder private Belastungen. Um gesund zu bleiben, sind Entspannungstechniken wie Yoga, Meditation oder einfach nur Spaziergänge in der Natur wichtig. Sie helfen, zur Ruhe zu kommen und neue Energie zu tanken.',
                question: 'Was hilft gegen Stress?',
                options: { A: 'Noch mehr arbeiten', B: 'Soziale Kontakte meiden', C: 'Entspannungstechniken wie Yoga', D: 'Ständig erreichbar sein' },
                answer: 'C'
            },
            {
                text: 'Die Bedeutung von regionalen Lebensmitteln nimmt zu. Verbraucher legen Wert darauf zu wissen, woher ihre Produkte kommen. Der Kauf regionaler Waren unterstützt lokale Bauern und reduziert durch kurze Transportwege die Umweltbelastung.',
                question: 'Welchen Vorteil hat der Kauf regionaler Lebensmittel?',
                options: { A: 'Sie sind immer billiger.', B: 'Sie haben lange Transportwege.', C: 'Sie unterstützen lokale Produzenten.', D: 'Die Auswahl ist geringer.' },
                answer: 'C'
            },
            {
                text: 'Das Lesen von Büchern hat viele positive Effekte. Es erweitert den Wortschatz, verbessert die Konzentrationsfähigkeit und regt die Fantasie an. In einer Welt voller schneller, digitaler Medien bietet ein Buch die Möglichkeit zur Entschleunigung.',
                question: 'Welcher Effekt wird nicht durch das Lesen von Büchern gefördert?',
                options: { A: 'Wortschatzerweiterung', B: 'Verbesserung der Konzentration', C: 'Anregung der Fantasie', D: 'Fähigkeit zum Multitasking' },
                answer: 'D'
            },
            {
                text: 'Das bedingungslose Grundeinkommen ist ein sozialpolitisches Konzept, bei dem jeder Bürger einen festen Geldbetrag vom Staat erhält, ohne dafür arbeiten zu müssen. Befürworter sehen darin eine Chance zur Armutsbekämpfung und zur Förderung von Kreativität. Kritiker befürchten hohe Kosten und einen Rückgang der Arbeitsmotivation.',
                question: 'Was ist ein Argument der Kritiker des Grundeinkommens?',
                options: { A: 'Armutsbekämpfung', B: 'Förderung von Kreativität', C: 'Hohe Kosten', D: 'Mehr Gleichheit' },
                answer: 'C'
            },
            {
                text: 'Der öffentliche Nahverkehr (ÖPNV) ist eine wichtige Alternative zum Auto, um die Umwelt zu schonen und Verkehrsstaus zu reduzieren. Damit mehr Menschen Busse und Bahnen nutzen, muss der ÖPNV attraktiv sein: also zuverlässig, pünktlich und mit einem dichten Netz an Haltestellen.',
                question: 'Was macht den ÖPNV attraktiv?',
                options: { A: 'Hohe Ticketpreise', B: 'Unpünktlichkeit', C: 'Zuverlässigkeit und ein gutes Netz', D: 'Wenige Haltestellen' },
                answer: 'C'
            },
            {
                text: 'Ein Haustier zu haben, kann das Wohlbefinden steigern. Die Verantwortung für ein Tier, zum Beispiel einen Hund, sorgt für eine feste Tagesstruktur und regelmäßige Bewegung an der frischen Luft. Allerdings bedeutet ein Haustier auch viel Arbeit und Kosten.',
                question: 'Was ist ein Nachteil eines Haustieres?',
                options: { A: 'Steigerung des Wohlbefindens', B: 'Feste Tagesstruktur', C: 'Regelmäßige Bewegung', D: 'Arbeit und Kosten' },
                answer: 'D'
            },
            {
                text: 'Der Wald ist nicht nur ein Erholungsort für Menschen, sondern auch ein wichtiger Lebensraum für viele Tiere und Pflanzen. Zudem ist er ein entscheidender Faktor für den Klimaschutz, da Bäume CO2 speichern. Die Abholzung der Wälder ist daher ein globales Problem.',
                question: 'Warum ist der Wald für den Klimaschutz wichtig?',
                options: { A: 'Er ist ein Erholungsort.', B: 'Bäume speichern CO2.', C: 'Er bietet Lebensraum für Tiere.', D: 'Man kann dort spazieren gehen.' },
                answer: 'B'
            },
            {
                text: 'Minimalismus ist ein Lebensstil, bei dem man sich bewusst auf wenige Dinge beschränkt. Es geht darum, Besitz zu reduzieren, um sich von unnötigem Ballast zu befreien und sich auf das Wesentliche zu konzentrieren. Das Ziel ist nicht Armut, sondern ein freieres und bewussteres Leben.',
                question: 'Was ist das Ziel des Minimalismus?',
                options: { A: 'Möglichst viel zu besitzen.', B: 'Ein freieres und bewussteres Leben.', C: 'Möglichst arm zu sein.', D: 'Unordnung zu schaffen.' },
                answer: 'B'
            },
            {
                text: 'Die Europäische Union (EU) ist ein Zusammenschluss europäischer Staaten. Ein Hauptziel der EU ist die Sicherung des Friedens in Europa. Außerdem fördert sie die wirtschaftliche Zusammenarbeit und ermöglicht den Bürgern, in anderen EU-Ländern zu leben, zu arbeiten und zu reisen.',
                question: 'Was ist kein Ziel der EU?',
                options: { A: 'Friedenssicherung', B: 'Wirtschaftliche Zusammenarbeit', C: 'Freies Reisen für Bürger', D: 'Einführung einer einzigen Sprache' },
                answer: 'D'

            },
            {
                text: 'Fake News, also gezielte Falschmeldungen, verbreiten sich besonders schnell über soziale Netzwerke. Sie können die öffentliche Meinung manipulieren und das Vertrauen in traditionelle Medien untergraben. Es ist wichtig, Informationen kritisch zu hinterfragen und Quellen zu überprüfen.',
                question: 'Was sollte man tun, um sich vor Fake News zu schützen?',
                options: { A: 'Alles glauben, was man online liest.', B: 'Informationen nicht hinterfragen.', C: 'Nur Überschriften lesen.', D: 'Informationen kritisch hinterfragen und Quellen prüfen.' },
                answer: 'D'
            },
            {
                text: 'Die Gentrifizierung beschreibt den Prozess, bei dem in einem Stadtviertel die ursprüngliche, oft einkommensschwächere Bevölkerung durch eine wohlhabendere ersetzt wird. Dies geschieht oft nach Modernisierungen und führt zu steigenden Mieten, die sich die alten Bewohner nicht mehr leisten können.',
                question: 'Was ist eine Folge der Gentrifizierung?',
                options: { A: 'Sinkende Mieten', B: 'Die ursprüngliche Bevölkerung bleibt.', C: 'Die Verdrängung der einkommensschwächeren Bevölkerung.', D: 'Weniger Modernisierungen.' },
                answer: 'C'
            },
            {
                text: 'Das Immunsystem schützt unseren Körper vor Krankheitserregern wie Viren und Bakterien. Ein gesunder Lebensstil mit ausgewogener Ernährung, ausreichend Schlaf und regelmäßiger Bewegung kann das Immunsystem stärken. Stress und Schlafmangel können es hingegen schwächen.',
                question: 'Was schwächt das Immunsystem?',
                options: { A: 'Ausgewogene Ernährung', B: 'Ausreichend Schlaf', C: 'Regelmäßige Bewegung', D: 'Stress und Schlafmangel' },
                answer: 'D'
            },
            {
                text: 'Das Bruttoinlandsprodukt (BIP) ist ein Maß für die wirtschaftliche Leistung eines Landes. Es misst den Wert aller Waren und Dienstleistungen, die in einem Jahr innerhalb eines Landes produziert werden. Das BIP pro Kopf wird oft als Indikator für den Wohlstand der Bevölkerung verwendet.',
                question: 'Was misst das BIP?',
                options: { A: 'Die Zufriedenheit der Bevölkerung.', B: 'Die wirtschaftliche Leistung eines Landes.', C: 'Die Anzahl der Einwohner.', D: 'Die Exportrate eines Landes.' },
                answer: 'B'
            },
            {
                text: 'Crowdfunding ist eine Methode zur Finanzierung von Projekten, bei der eine große Anzahl von Menschen kleine Geldbeträge gibt. Dies geschieht meist über Online-Plattformen. So können Künstler, Erfinder oder soziale Projekte ihre Ideen verwirklichen, ohne auf Bankkredite angewiesen zu sein.',
                question: 'Wie funktioniert Crowdfunding?',
                options: { A: 'Ein einzelner Großinvestor finanziert alles.', B: 'Viele Menschen geben kleine Geldbeträge.', C: 'Man bekommt einen Kredit von der Bank.', D: 'Der Staat finanziert das Projekt.' },
                answer: 'B'
            },
            {
                text: 'Die Inflation beschreibt den Prozess, bei dem das Geld an Wert verliert, was zu einem allgemeinen Anstieg der Preise führt. Bei hoher Inflation kann man sich für die gleiche Menge Geld weniger kaufen als zuvor. Zentralbanken versuchen, die Inflation stabil zu halten.',
                question: 'Was passiert bei einer Inflation?',
                options: { A: 'Die Preise sinken.', B: 'Das Geld gewinnt an Wert.', C: 'Man kann sich für sein Geld mehr kaufen.', D: 'Die Preise steigen allgemein an.' },
                answer: 'D'
            },
            {
                text: 'Der demografische Wandel beschreibt die Veränderung in der Altersstruktur einer Bevölkerung. In vielen westlichen Ländern gibt es immer mehr ältere Menschen und immer weniger junge. Dies stellt die Sozialsysteme, wie die Rentenversicherung, vor große Herausforderungen.',
                question: 'Was ist eine Herausforderung des demografischen Wandels?',
                options: { A: 'Es gibt zu viele junge Menschen.', B: 'Die Rentensysteme werden entlastet.', C: 'Die Sozialsysteme stehen vor Problemen.', D: 'Die Bevölkerung wird jünger.' },
                answer: 'C'
            },
            {
                text: 'Das Lieferkettengesetz verpflichtet Unternehmen dazu, auf die Einhaltung von Menschenrechten und Umweltstandards bei ihren Zulieferern im Ausland zu achten. Ziel ist es, Ausbeutung wie Kinderarbeit und umweltschädliche Produktionsweisen zu verhindern.',
                question: 'Wozu verpflichtet das Lieferkettengesetz die Unternehmen?',
                options: { A: 'Möglichst billig zu produzieren.', B: 'Auf Menschenrechte und Umweltstandards bei Zulieferern zu achten.', C: 'Nur im eigenen Land zu produzieren.', D: 'Die Preise für Konsumenten zu erhöhen.' },
                answer: 'B'
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
                { question: 'Die Frage ist, ___ man dieses Problem lösen kann. (wie)', answer: 'wie' },
                { question: 'Ihm wurde vorgeworfen, Geld ___ zu haben. (stehlen)', answer: 'gestohlen' },
                { question: 'Je länger die Reise dauerte, ___ müder wurden sie. (desto)', answer: 'desto' },
                { question: 'Er ist im Begriff, eine wichtige Entscheidung zu ___. (treffen)', answer: 'treffen' },
                { question: 'Die von ihm ___ Rede war sehr überzeugend. (halten)', answer: 'gehaltene' },
                { question: '___ des Gesetzes ist das Rauchen hier verboten. (Laut)', answer: 'Laut' },
                { question: 'Sie hat sich, ohne zu ___, einfach umgedreht und ist gegangen. (zögern)', answer: 'zögern' },
                { question: 'Der Angeklagte wurde des Mordes ___. (überführen)', answer: 'überführt' },
                { question: 'Angesichts der Umstände war das die ___ Entscheidung. (einzig richtig)', answer: 'einzig richtige' },
                { question: 'Er kam, um sich von uns zu ___. (verabschieden)', answer: 'verabschieden' },
                { question: 'Es ist ausgeschlossen, ___ er davon wusste. (dass)', answer: 'dass' },
                { question: 'Die zur Verfügung ___ Mittel reichen nicht aus. (stehen)', answer: 'stehenden' },
                { question: 'Er hat sich geweigert, eine Aussage zu ___. (machen)', answer: 'machen' },
                { question: '___ seines Fleißes hat er die Prüfung nicht bestanden. (Trotz)', answer: 'Trotz' },
                { question: 'Die zu ___ Aufgabe ist sehr komplex. (lösen)', answer: 'lösende' },
                { question: 'Sie ist sowohl intelligent ___ auch sympathisch. (als)', answer: 'als' },
                { question: 'Er hat mich ___ gewarnt, vorsichtig zu sein. (davor)', answer: 'davor' },
                { question: 'Das Buch ist es wert, ___ zu werden. (lesen)', answer: 'gelesen' },
                { question: '___ er ankam, war die Party schon vorbei. (Als)', answer: 'Als' },
                { question: 'Er wurde dazu ___, seine Meinung zu ändern. (zwingen)', answer: 'gezwungen' },
                { question: 'Die gestrige ___ Sitzung dauerte bis Mitternacht. (stattfinden)', answer: 'stattgefundene' },
                { question: 'Sie hat die Fähigkeit, andere zu ___. (begeistern)', answer: 'begeistern' },
                { question: '___ er reich ist, ist er nicht glücklich. (Obwohl)', answer: 'Obwohl' },
                { question: 'Die von der Regierung ___ Maßnahmen sind umstritten. (ergreifen)', answer: 'ergriffenen' },
                { question: 'Er hat sich damit ___, dass er verloren hat. (abfinden)', answer: 'abgefunden' },
                { question: 'Es besteht kein Zweifel ___, dass er unschuldig ist. (daran)', answer: 'daran' },
                { question: 'Die zu erwartenden ___ Kosten sind enorm. (zusätzlich)', answer: 'zusätzlichen' },
                { question: 'Sie bat mich, ihr beim Umzug zu ___. (helfen)', answer: 'helfen' },
            ],
            'multiple-choice': [
                { question: 'Die Veranstaltung findet statt, ___ das Wetter auch sein mag.', options: { A: 'wie auch immer', B: 'was auch immer', C: 'wo auch immer', D: 'wer auch immer' }, answer: 'A' },
                { question: 'Er tat so, ___ er alles wüsste.', options: { A: 'als ob', B: 'obwohl', C: 'damit', D: 'indem' }, answer: 'A' },
                { question: '___ fleißiger du lernst, desto besser werden deine Noten.', options: { A: 'Je', B: 'Desto', C: 'Umso', D: 'Als' }, answer: 'A' },
                { question: 'Er wurde ___ Diebstahls angeklagt.', options: { A: 'wegen', B: 'des', C: 'für', D: 'an' }, answer: 'B' },
                { question: 'Ich bin es ___, früh aufzustehen.', options: { A: 'gewohnt', B: 'gewöhnt', C: 'gewonnen', D: 'bewusst' }, answer: 'B' },
                { question: 'Die zu ___ Aufgaben müssen bis morgen erledigt werden.', options: { A: 'machende', B: 'gemachte', C: 'machenden', D: 'machend' }, answer: 'A' },
                { question: '___ der vielen Arbeit, hat er sich Zeit für uns genommen.', options: { A: 'Wegen', B: 'Trotz', C: 'Statt', D: 'Während' }, answer: 'B' },
                { question: 'Das ist der Autor, ___ neuestes Buch ein Bestseller ist.', options: { A: 'der', B: 'den', C: 'dem', D: 'dessen' }, answer: 'D' },
                { question: 'Er hat die Absicht, seine Sprachkenntnisse zu ___.', options: { A: 'verbessern', B: 'verbessert', C: 'verbesserte', D: 'verbessernd' }, answer: 'A' },
                { question: 'Die von der Expertin ___ Analyse war sehr aufschlussreich.', options: { A: 'durchgeführte', B: 'durchführende', C: 'durchgeführt', D: 'durchführt' }, answer: 'A' },
                { question: '___ er das Problem erkannt hatte, suchte er nach einer Lösung.', options: { A: 'Nachdem', B: 'Bevor', C: 'Während', D: 'Seit' }, answer: 'A' },
                { question: 'Er hat mir das Buch gegeben, ___ ich es lesen kann.', options: { A: 'um', B: 'damit', C: 'ohne dass', D: 'anstatt dass' }, answer: 'B' },
                { question: 'Es handelt sich ___ ein sehr komplexes Problem.', options: { A: 'um', B: 'von', C: 'mit', D: 'an' }, answer: 'A' },
                { question: 'Der Redner verstand es, das Publikum zu ___.', options: { A: 'fesseln', B: 'fesselte', C: 'gefesselt', D: 'fesselnd' }, answer: 'A' },
                { question: 'An ___ Stelle hätte ich genauso reagiert.', options: { A: 'sein', B: 'seine', C: 'seinen', D: 'seiner' }, answer: 'D' },
                { question: 'Das Ergebnis hängt ___ ab, wie gut wir zusammenarbeiten.', options: { A: 'davon', B: 'daraus', C: 'darüber', D: 'daran' }, answer: 'A' },
                { question: '___ er nicht eingeladen war, kam er trotzdem zur Party.', options: { A: 'Obwohl', B: 'Weil', C: 'Da', D: 'Wenn' }, answer: 'A' },
                { question: 'Sie hat mir ___, ihr bei dem Projekt zu helfen.', options: { A: 'gebeten', B: 'gefragt', C: 'empfohlen', D: 'aufgefordert' }, answer: 'A' },
                { question: 'Der zu ___ Text ist sehr anspruchsvoll.', options: { A: 'übersetzende', B: 'übersetzte', C: 'übersetzenden', D: 'übersetzen' }, answer: 'A' },
                { question: '___ es dunkel wurde, machten wir uns auf den Heimweg.', options: { A: 'Als', B: 'Wenn', C: 'Während', D: 'Da' }, answer: 'D' },
                { question: 'Er hat sich geweigert, ___ zu dem Vorfall zu äußern.', options: { A: 'sich', B: 'ihn', C: 'ihm', D: 'er' }, answer: 'A' },
                { question: 'Die neu ___ Regeln sind für alle verbindlich.', options: { A: 'eingeführten', B: 'einführenden', C: 'eingeführt', D: 'einführen' }, answer: 'A' },
                { question: 'Er ist nicht nur ein guter Sportler, ___ auch ein Vorbild.', options: { A: 'aber', B: 'sondern', C: 'oder', D: 'und' }, answer: 'B' },
                { question: '___ der Gefahr fuhr er weiter.', options: { A: 'Ungeachtet', B: 'Wegen', C: 'Zufolge', D: 'Anstatt' }, answer: 'A' },
                { question: 'Der Mann, mit ___ ich gesprochen habe, war sehr hilfsbereit.', options: { A: 'der', B: 'den', C: 'dem', D: 'dessen' }, answer: 'C' },
                { question: 'Es besteht die Möglichkeit, ___ das Projekt verlängert wird.', options: { A: 'dass', B: 'ob', C: 'um', D: 'damit' }, answer: 'A' },
                { question: 'Je mehr er darüber nachdachte, ___ unsicherer wurde er.', options: { A: 'so', B: 'als', C: 'desto', D: 'umso' }, answer: 'D' },
                { question: 'Sie hat die Prüfung bestanden, ___ sie sehr aufgeregt war.', options: { A: 'obwohl', B: 'weil', C: 'da', D: 'damit' }, answer: 'A' },
                { question: 'Er hat sich des Problems ___.', options: { A: 'angenommen', B: 'übernommen', C: 'aufgenommen', D: 'mitgenommen' }, answer: 'A' },
                { question: 'Das ist eine Entscheidung, ___ weitreichende Folgen hat.', options: { A: 'der', B: 'die', C: 'das', D: 'den' }, answer: 'B' },
                { question: 'Er hat sich bei mir ___ seine Verspätung entschuldigt.', options: { A: 'für', B: 'über', C: 'wegen', D: 'an' }, answer: 'A' },
                { question: 'Ich habe das Buch gelesen, ___ mir empfohlen wurde.', options: { A: 'das', B: 'was', C: 'welches', D: 'es' }, answer: 'A' },
                { question: 'Er hat die Gelegenheit ___, seine Meinung zu sagen.', options: { A: 'ergriffen', B: 'genommen', C: 'bekommen', D: 'gemacht' }, answer: 'A' },
            ],
        },
        reading: [
            {
                text: 'Die Debatte über künstliche Intelligenz (KI) ist vielschichtig. Einerseits bietet KI enorme Chancen in Bereichen wie Medizin und Forschung. Andererseits bestehen Bedenken hinsichtlich des Datenschutzes und des potenziellen Verlusts von Arbeitsplätzen. Eine gesellschaftliche Auseinandersetzung über die ethischen Rahmenbedingungen ist daher dringend geboten.',
                question: 'Welcher Aspekt gehört nicht zu den Bedenken bei KI?',
                options: { A: 'Datenschutz', B: 'Verlust von Arbeitsplätzen', C: 'Chancen in der Medizin', D: 'Ethische Rahmenbedingungen' },
                answer: 'C'
            },
            {
                text: 'Der demografische Wandel stellt viele westliche Gesellschaften vor große Herausforderungen. Eine alternde Bevölkerung bei gleichzeitig sinkenden Geburtenraten führt zu Problemen in den sozialen Sicherungssystemen, wie der Renten- und Krankenversicherung. Innovative politische Lösungen sind gefragt, um die Zukunftsfähigkeit dieser Systeme zu gewährleisten.',
                question: 'Was ist die zentrale Herausforderung des demografischen Wandels?',
                options: { A: 'Steigende Geburtenraten', B: 'Eine junge Bevölkerung', C: 'Probleme in den sozialen Sicherungssystemen', D: 'Sinkende Lebenserwartung' },
                answer: 'C'
            },
            {
                text: 'Die "Sharing Economy", also das Teilen von Ressourcen wie Autos oder Wohnungen, hat durch digitale Plattformen einen enormen Aufschwung erfahren. Befürworter heben die effizientere Nutzung von Ressourcen und neue Verdienstmöglichkeiten hervor. Kritiker bemängeln jedoch oft die prekären Arbeitsbedingungen und die Umgehung von Regulierungen, die für traditionelle Anbieter gelten.',
                question: 'Was ist ein Kritikpunkt an der Sharing Economy?',
                options: { A: 'Effiziente Ressourcennutzung', B: 'Neue Verdienstmöglichkeiten', C: 'Strenge Regulierungen', D: 'Prekäre Arbeitsbedingungen' },
                answer: 'D'
            },
            {
                text: 'Die Energiewende, der Übergang von fossilen zu erneuerbaren Energieträgern, ist eine der größten gesellschaftlichen Aufgaben unserer Zeit. Sie erfordert nicht nur massive Investitionen in Technologien wie Wind- und Solarenergie, sondern auch einen Wandel im Verbraucherverhalten und den Ausbau der Stromnetze, um die schwankende Energieerzeugung auszugleichen.',
                question: 'Was ist neben technologischen Investitionen für die Energiewende erforderlich?',
                options: { A: 'Ein höherer Verbrauch fossiler Energien', B: 'Ein Rückbau der Stromnetze', C: 'Ein Wandel im Verbraucherverhalten', D: 'Eine Reduzierung der Energieeffizienz' },
                answer: 'C'
            },
            {
                text: 'Das Konzept der "Work-Life-Balance" beschreibt ein ausgewogenes Verhältnis zwischen Berufs- und Privatleben. In einer zunehmend digitalisierten und flexibilisierten Arbeitswelt verschwimmen die Grenzen oft. Unternehmen erkennen jedoch zunehmend, dass eine gute Work-Life-Balance die Motivation und Produktivität der Mitarbeiter steigert und zur langfristigen Bindung beiträgt.',
                question: 'Warum wird Work-Life-Balance für Unternehmen wichtiger?',
                options: { A: 'Weil Mitarbeiter dann weniger arbeiten.', B: 'Weil es die Produktivität und Motivation steigern kann.', C: 'Weil dadurch die Grenzen zwischen Arbeit und Freizeit verschwimmen.', D: 'Weil es gesetzlich vorgeschrieben ist.' },
                answer: 'B'
            },
            {
                text: 'Unter dem Begriff "Big Data" versteht man die Analyse großer und komplexer Datenmengen, um Muster und Zusammenhänge zu erkennen. Dies bietet Potenziale für Wirtschaft, Wissenschaft und Gesellschaft. Gleichzeitig wirft die Sammlung und Nutzung dieser Daten grundlegende Fragen des Datenschutzes und der informationellen Selbstbestimmung auf.',
                question: 'Was ist das Hauptpotenzial von Big Data?',
                options: { A: 'Die Verringerung von Datenmengen', B: 'Die Garantie von absolutem Datenschutz', C: 'Die Erkennung von Mustern und Zusammenhängen', D: 'Die Verlangsamung von Analyseprozessen' },
                answer: 'C'
            },
            {
                text: 'Die psychische Gesundheit rückt zunehmend in den Fokus der öffentlichen Aufmerksamkeit. Stress, Burnout und Depressionen sind keine Seltenheit mehr in unserer Leistungsgesellschaft. Es ist von entscheidender Bedeutung, präventive Maßnahmen zu ergreifen, Stigmatisierung abzubauen und den Zugang zu therapeutischer Hilfe zu erleichtern.',
                question: 'Was ist ein zentraler Aspekt im Umgang mit psychischen Erkrankungen?',
                options: { A: 'Die Erhöhung des Leistungsdrucks', B: 'Die Stigmatisierung der Betroffenen', C: 'Die Erschwerung des Zugangs zu Therapien', D: 'Der Abbau von Stigmatisierung' },
                answer: 'D'
            },
            {
                text: 'Der Föderalismus in Deutschland bedeutet, dass die politische Macht zwischen dem Bund und den 16 Bundesländern aufgeteilt ist. Dies soll Machtkonzentration verhindern und regionale Vielfalt ermöglichen. In Bereichen wie der Bildung führt dies jedoch manchmal zu Uneinheitlichkeit und Koordinationsproblemen.',
                question: 'Was ist ein potenzieller Nachteil des Föderalismus in Deutschland?',
                options: { A: 'Machtkonzentration auf Bundesebene', B: 'Regionale Vielfalt', C: 'Uneinheitlichkeit in der Bildungspolitik', D: 'Absolute Einheitlichkeit in allen Gesetzen' },
                answer: 'C'
            },
            {
                text: 'Das Urheberrecht schützt das geistige Eigentum von Schöpfern wie Autoren, Musikern oder Programmierern. Im digitalen Zeitalter ist der Schutz vor illegalen Kopien und die gerechte Vergütung der Urheber eine große Herausforderung. Konzepte wie "Creative Commons" bieten flexible Lizenzmodelle als Alternative zum traditionellen "Alle Rechte vorbehalten".',
                question: 'Womit befasst sich das Urheberrecht?',
                options: { A: 'Dem Schutz von materiellem Besitz', B: 'Dem Schutz des geistigen Eigentums', C: 'Der Förderung illegaler Kopien', D: 'Der Abschaffung jeglicher Vergütung für Künstler' },
                answer: 'B'
            },
            {
                text: 'Die Globalisierung der Finanzmärkte hat zu einer engen internationalen Verflechtung geführt. Während dies den Kapitalfluss erleichtert und Investitionen fördert, birgt es auch das Risiko, dass sich Finanzkrisen schnell von einem Land auf andere ausbreiten können. Eine stärkere internationale Regulierung wird daher von vielen Experten gefordert.',
                question: 'Welches Risiko birgt die Globalisierung der Finanzmärkte?',
                options: { A: 'Die Isolation nationaler Märkte', B: 'Die langsame Ausbreitung von Krisen', C: 'Die schnelle, globale Ausbreitung von Finanzkrisen', D: 'Ein Mangel an Investitionsmöglichkeiten' },
                answer: 'C'
            },
            {
                text: 'Die Rolle der Medien als "vierte Gewalt" im Staat besteht darin, die Regierung und andere Machtinstitutionen zu kontrollieren und die Öffentlichkeit zu informieren. In Zeiten von Fake News und Desinformationskampagnen ist die Existenz eines unabhängigen, qualitativ hochwertigen Journalismus für eine funktionierende Demokratie essenziell.',
                question: 'Welche Funktion haben die Medien in einer Demokratie?',
                options: { A: 'Die Regierung zu unterstützen, egal was sie tut.', B: 'Die Öffentlichkeit gezielt falsch zu informieren.', C: 'Die Machtinstitutionen zu kontrollieren und die Öffentlichkeit zu informieren.', D: 'Sich aus der Politik herauszuhalten.' },
                answer: 'C'
            },
            {
                text: 'Der Klimawandel führt zu einer Zunahme von Extremwetterereignissen wie Hitzewellen, Dürren und Starkregen. Städte sind davon besonders betroffen, da versiegelte Flächen die Hitze speichern und Wasser schlecht abfließen kann. Anpassungsstrategien wie die Schaffung von Grünflächen und Wasserspeichern werden daher immer wichtiger.',
                question: 'Warum sind Städte besonders von Extremwetter betroffen?',
                options: { A: 'Weil es dort weniger Menschen gibt.', B: 'Wegen der vielen Grünflächen.', C: 'Wegen versiegelter Flächen, die Hitze speichern und Wasserabfluss behindern.', D: 'Weil das Wetter in Städten immer besser ist.' },
                answer: 'C'
            },
            {
                text: 'Die Automatisierung durch Roboter und Software verändert die Industrieproduktion grundlegend. Während einfache, repetitive Tätigkeiten zunehmend von Maschinen übernommen werden, entstehen neue Aufgaben in der Steuerung, Wartung und Programmierung dieser Systeme. Dies erfordert eine Höherqualifizierung der Arbeitskräfte.',
                question: 'Welche Auswirkung hat die Automatisierung auf die Arbeitswelt?',
                options: { A: 'Alle menschliche Arbeit wird überflüssig.', B: 'Es werden keine qualifizierten Arbeitskräfte mehr benötigt.', C: 'Repetitive Tätigkeiten werden von Maschinen übernommen, neue Aufgaben entstehen.', D: 'Die Industrieproduktion wird weniger effizient.' },
                answer: 'C'
            },
            {
                text: 'Die soziale Marktwirtschaft, das Wirtschaftsmodell Deutschlands, versucht, die Vorteile des freien Marktes wie Wettbewerb und Innovation mit sozialen Zielen wie Sicherheit und Gerechtigkeit zu verbinden. Der Staat greift also regulierend ein, um soziale Härten abzufedern und für faire Bedingungen zu sorgen.',
                question: 'Was ist das Kennzeichen der sozialen Marktwirtschaft?',
                options: { A: 'Ein komplett freier Markt ohne staatliche Eingriffe.', B: 'Eine reine Planwirtschaft, die vom Staat gesteuert wird.', C: 'Eine Verbindung von freiem Markt und sozialem Ausgleich durch den Staat.', D: 'Die Abschaffung des Wettbewerbs.' },
                answer: 'C'
            },
            {
                text: 'Die Untersuchung des Mikrobioms, also der Gesamtheit der Mikroorganismen im menschlichen Körper, ist ein relativ neues Forschungsfeld. Es zeigt sich, dass diese Bakterien einen enormen Einfluss auf unsere Gesundheit, von der Verdauung bis zum Immunsystem, haben. Die Ernährung spielt eine entscheidende Rolle für die Zusammensetzung des Mikrobioms.',
                question: 'Was hat einen großen Einfluss auf die Zusammensetzung des Mikrobioms?',
                options: { A: 'Die Haarfarbe', B: 'Die Körpergröße', C: 'Die Ernährung', D: 'Das Alter' },
                answer: 'C'
            },
            {
                text: 'Das Phänomen der "Filterblase" beschreibt, dass Algorithmen in sozialen Medien und Suchmaschinen uns vor allem Inhalte zeigen, die unserer bisherigen Meinung entsprechen. Dies kann dazu führen, dass wir kaum noch mit anderen Perspektiven konfrontiert werden und sich unsere eigene Meinung verstärkt, was die gesellschaftliche Polarisierung fördern kann.',
                question: 'Was ist die Gefahr einer Filterblase?',
                options: { A: 'Man wird mit zu vielen verschiedenen Meinungen konfrontiert.', B: 'Man sieht nur noch Inhalte, die man nicht mag.', C: 'Man wird kaum noch mit anderen Perspektiven konfrontiert.', D: 'Man verbringt weniger Zeit online.' },
                answer: 'C'
            },
            {
                text: 'Die Kreislaufwirtschaft ist ein Gegenmodell zur traditionellen "Wegwerfgesellschaft". Ziel ist es, Produkte und Materialien so lange wie möglich im Wirtschaftskreislauf zu halten, indem sie repariert, wiederverwendet oder recycelt werden. Dies schont Ressourcen und reduziert Abfall.',
                question: 'Was ist das Hauptziel der Kreislaufwirtschaft?',
                options: { A: 'Möglichst viele neue Produkte zu produzieren.', B: 'Produkte nach einmaliger Nutzung wegzuwerfen.', C: 'Produkte und Materialien möglichst lange im Kreislauf zu halten.', D: 'Das Recycling abzuschaffen.' },
                answer: 'C'
            },
            {
                text: 'Die Aufmerksamkeitsökonomie beschreibt den Wettbewerb um die begrenzte Aufmerksamkeit der Menschen in einer informationsüberfluteten Welt. Unternehmen und Medien nutzen oft reißerische Überschriften oder emotionale Inhalte, um diese Aufmerksamkeit zu gewinnen ("Clickbait"). Ein kritischer Medienkonsum ist daher geboten.',
                question: 'Worum konkurrieren Akteure in der Aufmerksamkeitsökonomie?',
                options: { A: 'Um Geld', B: 'Um Produkte', C: 'Um die begrenzte Aufmerksamkeit der Menschen', D: 'Um politische Macht' },
                answer: 'C'
            },
            {
                text: 'Bürgerwissenschaft (Citizen Science) bezeichnet Forschungsprojekte, bei denen interessierte Laien aktiv mitarbeiten, zum Beispiel indem sie Daten sammeln (Vögel zählen, Wetterdaten erfassen). Dies ermöglicht Forschung in großem Maßstab und fördert gleichzeitig das Wissenschaftsverständnis in der Bevölkerung.',
                question: 'Was tun Bürger in Citizen-Science-Projekten?',
                options: { A: 'Sie entwickeln komplexe Theorien.', B: 'Sie arbeiten als bezahlte Forscher an Universitäten.', C: 'Sie arbeiten aktiv an Forschungsprojekten mit, z.B. durch Datensammlung.', D: 'Sie kritisieren die Wissenschaft grundsätzlich.' },
                answer: 'C'
            },
            {
                text: 'Der Placebo-Effekt bezeichnet das Phänomen, dass eine Scheinbehandlung ohne Wirkstoff dennoch eine positive Wirkung beim Patienten auslösen kann, allein durch die Erwartungshaltung. Dies zeigt die enge Verbindung zwischen Psyche und Körper und spielt in der medizinischen Forschung eine wichtige Rolle bei der Bewertung der Wirksamkeit von Medikamenten.',
                question: 'Was löst den Placebo-Effekt aus?',
                options: { A: 'Ein hochwirksames Medikament', B: 'Die Erwartungshaltung des Patienten', C: 'Ein chirurgischer Eingriff', D: 'Ein Zufallsereignis' },
                answer: 'B'
            },
            {
                text: 'Die Resilienzforschung untersucht, warum manche Menschen Krisen und Schicksalsschläge besser bewältigen können als andere. Zu den Faktoren, die die psychische Widerstandsfähigkeit stärken, gehören stabile soziale Beziehungen, eine optimistische Grundhaltung und die Fähigkeit, Probleme aktiv zu lösen. Resilienz ist nicht angeboren, sondern kann erlernt und trainiert werden.',
                question: 'Was ist ein Faktor, der die Resilienz stärkt?',
                options: { A: 'Soziale Isolation', B: 'Eine pessimistische Grundhaltung', C: 'Stabile soziale Beziehungen', D: 'Probleme zu vermeiden' },
                answer: 'C'
            },
            {
                text: 'Das "Internet der Dinge" (IoT) bezieht sich auf die Vernetzung von Alltagsgegenständen – vom Kühlschrank bis zur Industrieanlage – mit dem Internet. Diese Geräte können Daten sammeln und austauschen, was zu Effizienzsteigerungen und neuen Dienstleistungen führen kann. Die Sicherheit dieser vernetzten Geräte ist jedoch eine große Herausforderung.',
                question: 'Was ist eine zentrale Herausforderung beim Internet der Dinge?',
                options: { A: 'Die mangelnde Konnektivität der Geräte', B: 'Die Sicherheit der vernetzten Geräte', C: 'Die geringe Anzahl an vernetzbaren Gegenständen', D: 'Die langsame Datenübertragung' },
                answer: 'B'
            },
            {
                text: 'Der Generationenvertrag ist ein ungeschriebener Vertrag zwischen der jüngeren und der älteren Generation in Bezug auf das Rentensystem in Deutschland. Die arbeitende Generation finanziert mit ihren Beiträgen die Renten der aktuellen Rentnergeneration, in der Erwartung, dass die nachfolgende Generation später für sie dasselbe tun wird.',
                question: 'Wer finanziert die aktuellen Renten im Generationenvertrag?',
                options: { A: 'Die Rentner selbst', B: 'Der Staat allein aus Steuermitteln', C: 'Die aktuell arbeitende Generation', D: 'Internationale Investoren' },
                answer: 'C'
            },
            {
                text: 'Die sogenannte "Cancel Culture" bezeichnet eine Form des öffentlichen Boykotts von Personen oder Organisationen nach als problematisch empfundenen Äußerungen oder Handlungen. Befürworter sehen darin eine Möglichkeit, Verantwortlichkeit einzufordern. Kritiker warnen jedoch vor einer Einschränkung der Meinungsfreiheit und vorschnellen Urteilen.',
                question: 'Was ist eine Sorge von Kritikern der "Cancel Culture"?',
                options: { A: 'Mangelnde Verantwortlichkeit', B: 'Eine mögliche Einschränkung der Meinungsfreiheit', C: 'Zu langsame Urteile', D: 'Zu wenig öffentliche Diskussion' },
                answer: 'B'
            },
            {
                text: 'Künstliche neuronale Netze sind ein Kernbereich der KI-Forschung, inspiriert von der Funktionsweise des menschlichen Gehirns. Sie können durch das Training mit großen Datenmengen lernen, Muster zu erkennen, und werden beispielsweise in der Bild- und Spracherkennung eingesetzt. Der genaue Entscheidungsprozess eines komplexen Netzes ist jedoch oft schwer nachzuvollziehen (Black-Box-Problem).',
                question: 'Was ist das "Black-Box-Problem" bei neuronalen Netzen?',
                options: { A: 'Dass sie keine Muster erkennen können.', B: 'Dass ihr Entscheidungsprozess oft schwer nachvollziehbar ist.', C: 'Dass sie nur mit kleinen Datenmengen trainiert werden können.', D: 'Dass sie nur für die Spracherkennung nützlich sind.' },
                answer: 'B'
            },
            {
                text: 'Die "Gig Economy" bezieht sich auf einen Arbeitsmarkt, der von kurzfristigen Aufträgen oder "Gigs" geprägt ist, die oft über Online-Plattformen vermittelt werden. Dies bietet hohe Flexibilität für die Auftragnehmer, geht aber oft mit fehlender sozialer Absicherung wie Kranken- oder Rentenversicherung einher.',
                question: 'Welcher Nachteil ist oft mit der Gig Economy verbunden?',
                options: { A: 'Geringe Flexibilität', B: 'Feste, langfristige Anstellungen', C: 'Umfassende soziale Absicherung', D: 'Fehlende soziale Absicherung' },
                answer: 'D'
            },
            {
                text: 'Die Verfassung Deutschlands, das Grundgesetz, wurde ursprünglich als Provisorium für Westdeutschland konzipiert. Artikel 1 garantiert die Unantastbarkeit der Menschenwürde. Eine Besonderheit ist die "Ewigkeitsklausel", die besagt, dass grundlegende Prinzipien wie die Demokratie und der Föderalismus nicht abgeschafft werden dürfen.',
                question: 'Was besagt die "Ewigkeitsklausel" im Grundgesetz?',
                options: { A: 'Dass das Grundgesetz ewig unverändert bleiben muss.', B: 'Dass das Grundgesetz nur ein Provisorium ist.', C: 'Dass grundlegende Verfassungsprinzipien nicht abgeschafft werden dürfen.', D: 'Dass die Menschenwürde nicht unantastbar ist.' },
                answer: 'C'
            },
            {
                text: 'Nudging ist eine Methode aus der Verhaltensökonomie, bei der Menschen durch kleine "Stupser" (Nudges) zu einem bestimmten Verhalten bewegt werden sollen, ohne Verbote oder ökonomische Anreize zu nutzen. Ein Beispiel ist die Platzierung von gesundem Essen auf Augenhöhe in einer Kantine. Kritiker sehen darin eine Form der Manipulation.',
                question: 'Wie funktioniert Nudging?',
                options: { A: 'Durch strikte Verbote und Gesetze.', B: 'Durch hohe finanzielle Strafen.', C: 'Durch sanfte "Stupser", die das Verhalten beeinflussen.', D: 'Durch das Wegnehmen aller Wahlmöglichkeiten.' },
                answer: 'C'
            },
            {
                text: 'Der Begriff "Nachhaltigkeit" umfasst nach dem Drei-Säulen-Modell ökologische, ökonomische und soziale Aspekte. Nachhaltiges Handeln bedeutet demnach, so zu wirtschaften und zu leben, dass die Bedürfnisse der heutigen Generation befriedigt werden, ohne die Möglichkeiten zukünftiger Generationen zu gefährden, ihre eigenen Bedürfnisse zu befriedigen.',
                question: 'Was gehört nicht zu den drei Säulen der Nachhaltigkeit?',
                options: { A: 'Ökologie', B: 'Ökonomie', C: 'Soziales', D: 'Technologie' },
                answer: 'D'
            },
            {
                text: 'Die Europäische Zentralbank (EZB) ist für die Geldpolitik im Euroraum zuständig. Ihr vorrangiges Ziel ist die Gewährleistung der Preisstabilität, was in der Regel als eine Inflationsrate von nahe, aber unter 2% definiert wird. Sie ist unabhängig von den nationalen Regierungen.',
                question: 'Was ist das Hauptziel der EZB?',
                options: { A: 'Die Finanzierung von Staatsausgaben', B: 'Die Gewährleistung von Preisstabilität', C: 'Die Festlegung von Steuersätzen', D: 'Die Regulierung des Arbeitsmarktes' },
                answer: 'B'
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
                { question: 'Der Vorschlag wurde von allen ___ abgelehnt. (einhellig)', answer: 'einhellig' },
                { question: 'Er ist nicht imstande, diese Aufgabe allein zu ___. (bewältigen)', answer: 'bewältigen' },
                { question: 'Dem Angeklagten wurde die Möglichkeit ___, sich zu verteidigen. (einräumen)', answer: 'eingeräumt' },
                { question: 'Die Verhandlungen sind ___ gescheitert. (vorläufig)', answer: 'vorläufig' },
                { question: 'Er hat das Gerücht in die Welt ___. (setzen)', answer: 'gesetzt' },
                { question: 'Sie hat sich ___ des Risikos für das Projekt entschieden. (trotz)', answer: 'trotz' },
                { question: 'Die Ergebnisse der Studie stehen im Widerspruch ___ früheren Annahmen. (zu)', answer: 'zu' },
                { question: 'Ihm ist ein unverzeihlicher Fehler ___. (unterlaufen)', answer: 'unterlaufen' },
                { question: 'Die Regierung sah sich gezwungen, Maßnahmen zu ___. (ergreifen)', answer: 'ergreifen' },
                { question: 'Es steht außer ___, dass er talentiert ist. (Frage)', answer: 'Frage' },
                { question: 'Die Rede hat bei den Zuhörern einen tiefen Eindruck ___. (hinterlassen)', answer: 'hinterlassen' },
                { question: 'Der Vertrag tritt nächste Woche in Kraft ___. (treten)', answer: 'in Kraft' },
                { question: 'Sie hat ihre Kritik in aller Deutlichkeit zum Ausdruck ___. (bringen)', answer: 'gebracht' },
                { question: 'Die Verantwortung für den Fehler liegt ___ bei ihm. (einzig und allein)', answer: 'einzig und allein' },
                { question: 'Er hat es ___, sein Ziel zu erreichen. (vermögen)', answer: 'vermocht' },
                { question: 'Der Plan ist von vornherein zum ___ verurteilt. (Scheitern)', answer: 'Scheitern' },
                { question: 'Man muss die Fakten zur Kenntnis ___. (nehmen)', answer: 'nehmen' },
                { question: 'Er wurde seiner Ämter ___. (entheben)', answer: 'enthoben' },
                { question: 'Das Gesetz wurde außer Kraft ___. (setzen)', answer: 'gesetzt' },
                { question: 'Sie hat sich mit Händen und Füßen gegen den Plan ___. (wehren)', answer: 'gewehrt' },
                { question: 'Er hat die Konsequenzen seines Handelns in Kauf ___. (nehmen)', answer: 'genommen' },
                { question: 'Die Diskussion drohte aus dem Ruder zu ___. (laufen)', answer: 'laufen' },
                { question: 'Er hat mir die kalte Schulter ___. (zeigen)', answer: 'gezeigt' },
                { question: 'Es gilt, die Interessen aller Beteiligten zu ___. (berücksichtigen)', answer: 'berücksichtigen' },
                { question: 'Er hat die Prüfung mit Bravour ___. (bestehen)', answer: 'bestanden' },
                { question: 'Sie zog es ___, ihre Meinung für sich zu behalten. (vor)', answer: 'vor' },
                { question: 'Das Problem wurde unter den Teppich ___. (kehren)', answer: 'gekehrt' },
                { question: 'Er steht im Verdacht, das Geld ___ zu haben. (veruntreuen)', answer: 'veruntreut' },
            ],
            'multiple-choice': [
                { question: 'Die Regierung sah sich ___ veranlasst, neue Gesetze zu erlassen.', options: { A: 'davon', B: 'dazu', C: 'dabei', D: 'dafür' }, answer: 'B' },
                { question: 'Er ist nicht nur intelligent, ___ auch sehr fleißig.', options: { A: 'aber', B: 'oder', C: 'sondern', D: 'denn' }, answer: 'C' },
                { question: 'Das Problem besteht ___, dass die finanziellen Mittel fehlen.', options: { A: 'darin', B: 'darauf', C: 'daraus', D: 'darum' }, answer: 'A' },
                { question: '___ Kritik an seiner Arbeit, setzte der Wissenschaftler seine Forschung fort.', options: { A: 'Trotz aller', B: 'Wegen aller', C: 'Zufolge aller', D: 'Anstelle aller' }, answer: 'A' },
                { question: 'Das lässt ___ schließen, dass er die Wahrheit sagt.', options: { A: 'darauf', B: 'daraus', C: 'dahin', D: 'daran' }, answer: 'A' },
                { question: 'Er hat die Vorwürfe ___ zurückgewiesen.', options: { A: 'vehement', B: 'subtil', C: 'latent', D: 'sporadisch' }, answer: 'A' },
                { question: '___ seines Amtes wurde er von allen respektiert.', options: { A: 'Kraft', B: 'Zufolge', C: 'Anlässlich', D: 'Mangels' }, answer: 'A' },
                { question: 'Die Firma musste Insolvenz ___.', options: { A: 'melden', B: 'geben', C: 'machen', D: 'stellen' }, answer: 'A' },
                { question: 'Die Entscheidung des Gerichts ist ___.', options: { A: 'unvermeidlich', B: 'unumstößlich', C: 'unentbehrlich', D: 'unerlässlich' }, answer: 'B' },
                { question: 'Er hat die ihm ___ Aufgabe hervorragend gemeistert.', options: { A: 'übertragene', B: 'getragene', C: 'gegebene', D: 'gestellte' }, answer: 'A' },
                { question: '___ des Protokolls hat der Zeuge die Aussage verweigert.', options: { A: 'Außerhalb', B: 'Innerhalb', C: 'Laut', D: 'Abseits' }, answer: 'C' },
                { question: 'Er hat sich der Stimme ___, was die Entscheidung beeinflusste.', options: { A: 'enthalten', B: 'behalten', C: 'verhalten', D: 'erhalten' }, answer: 'A' },
                { question: 'Die zur ___ stehenden Mittel sind begrenzt.', options: { A: 'Auswahl', B: 'Verfügung', C: 'Option', D: 'Möglichkeit' }, answer: 'B' },
                { question: 'Er hat mir ___ zugesichert, dass er sich darum kümmern wird.', options: { A: 'hoch und heilig', B: 'klipp und klar', C: 'recht und billig', D: 'gang und gäbe' }, answer: 'A' },
                { question: 'Die Zeugenaussagen stehen in krassem ___ zueinander.', options: { A: 'Verhältnis', B: 'Bezug', C: 'Gegensatz', D: 'Widerspruch' }, answer: 'D' },
                { question: 'Der Autor hat sich in seinem neuesten Werk selbst ___.', options: { A: 'überwunden', B: 'übertroffen', C: 'überlistet', D: 'überschätzt' }, answer: 'B' },
                { question: 'Die neuen Erkenntnisse stellen die bisherige Theorie in ___.', options: { A: 'Zweifel', B: 'Frage', C: 'Kritik', D: 'Schatten' }, answer: 'B' },
                { question: 'Er hat die Prüfung bestanden, ___ mit Ach und Krach.', options: { A: 'freilich', B: 'allerdings', C: 'jedoch', D: 'zwar' }, answer: 'B' },
                { question: 'Sein Verhalten ist mit den Werten des Unternehmens nicht ___.', options: { A: 'vereinbar', B: 'vergleichbar', C: 'verfügbar', D: 'verständlich' }, answer: 'A' },
                { question: 'Die Politiker haben sich zu einem Kompromiss ___.', options: { A: 'geeinigt', B: 'entschieden', C: 'durchgerungen', D: 'überwunden' }, answer: 'C' },
                { question: 'Es ist ___ zu übersehen, dass sich die Situation verschlechtert hat.', options: { A: 'kaum', B: 'fast', C: 'nicht', D: 'schwerlich' }, answer: 'A' },
                { question: 'Er hat die Flucht ___, um einer Verhaftung zu entgehen.', options: { A: 'ergriffen', B: 'genommen', C: 'gemacht', D: 'begangen' }, answer: 'A' },
                { question: 'Die Debatte wurde sehr ___ geführt.', options: { A: 'kontrovers', B: 'konvergent', C: 'konstant', D: 'konkret' }, answer: 'A' },
                { question: 'Sie hat ihm die Leviten ___.', options: { A: 'gelesen', B: 'gesagt', C: 'erzählt', D: 'gepredigt' }, answer: 'A' },
                { question: 'Der Plan stieß auf ___ Widerstand.', options: { A: 'erheblichen', B: 'erhebbaren', C: 'erhobenen', D: 'erhabenen' }, answer: 'A' },
                { question: 'Er hat sich um Kopf und Kragen ___.', options: { A: 'gesprochen', B: 'geredet', C: 'geplaudert', D: 'diskutiert' }, answer: 'B' },
                { question: 'Die Angelegenheit muss mit ___ Diskretion behandelt werden.', options: { A: 'äußerster', B: 'äußerlicher', C: 'ausgedrückter', D: 'auswärtiger' }, answer: 'A' },
                { question: 'Sein Alibi hat sich als ___ erwiesen.', options: { A: 'wasserdicht', B: 'luftdicht', C: 'winddicht', D: 'regendicht' }, answer: 'A' },
                { question: 'Er hat sich ___ Anerkennung für seine Arbeit verdient.', options: { A: 'durchaus', B: 'zweifellos', C: 'fraglos', D: 'unbedingt' }, answer: 'B' },
                { question: 'Die Firma steht kurz vor dem ___.', options: { A: 'Konkurs', B: 'Bankrott', C: 'Ruinen', D: 'Ende' }, answer: 'A' },
                { question: 'Er hat seine Kompetenzen bei weitem ___.', options: { A: 'überschritten', B: 'übertroffen', C: 'überstiegen', D: 'übergangen' }, answer: 'A' },
                { question: 'Die Kritik an ihm ist nicht ganz ___.', options: { A: 'ungerechtfertigt', B: 'unbegründet', C: 'unberechtigt', D: 'unlogisch' }, answer: 'C' },
                { question: 'Sie hat ihn nach Strich und Faden ___.', options: { A: 'betrogen', B: 'belogen', C: 'hintergangen', D: 'getäuscht' }, answer: 'B' },
            ],
        },
        reading: [
            {
                text: 'Die Globalisierung, verstanden als Prozess der zunehmenden internationalen Verflechtung in allen Lebensbereichen, hat zu einer nie dagewesenen Beschleunigung des Austauschs von Waren, Informationen und Kapital geführt. Kritiker bemängeln jedoch die damit einhergehende soziale Ungleichheit und die ökologischen Folgekosten, die eine Neujustierung der globalen Wirtschaftsordnung erforderlich machen.',
                question: 'Was ist ein Hauptkritikpunkt an der Globalisierung?',
                options: { A: 'Die Verlangsamung des Warenaustauschs', B: 'Die Zunahme sozialer Ungleichheit', C: 'Die Abnahme internationaler Verflechtungen', D: 'Die Reduzierung ökologischer Kosten' },
                answer: 'B'
            },
            {
                text: 'Im Diskurs über die Willensfreiheit prallen deterministische und indeterministische Positionen aufeinander. Während Deterministen argumentieren, dass alle Ereignisse, einschließlich menschlicher Handlungen, durch vorangehende Ursachen vollständig bestimmt sind, postulieren Indeterministen die Existenz eines echten Zufalls oder einer nicht-kausalen Freiheit, was die traditionelle Vorstellung von moralischer Verantwortlichkeit fundamental in Frage stellt.',
                question: 'Was ist die Kernaussage des Determinismus?',
                options: { A: 'Menschliche Handlungen sind frei und zufällig.', B: 'Es gibt keine moralische Verantwortlichkeit.', C: 'Alle Ereignisse sind durch Ursachen vorherbestimmt.', D: 'Die Willensfreiheit ist unbestreitbar.' },
                answer: 'C'
            },
            {
                text: 'Die postmoderne Philosophie, die sich in der zweiten Hälfte des 20. Jahrhunderts entwickelte, stellt die großen Erzählungen und universellen Wahrheitsansprüche der Moderne in Frage. Konzepte wie Dekonstruktion, entwickelt von Jacques Derrida, zielen darauf ab, die hierarchischen Oppositionen im westlichen Denken aufzudecken und zu destabilisieren. Die Postmoderne betont die Pluralität von Perspektiven und die Unmöglichkeit einer objektiven Gesamtsicht.',
                question: 'Was kritisiert die postmoderne Philosophie?',
                options: { A: 'Die Pluralität von Perspektiven', B: 'Die Destabilisierung von Hierarchien', C: 'Universelle Wahrheitsansprüche', D: 'Die Philosophie von Jacques Derrida' },
                answer: 'C'
            },
            {
                text: 'Kants kategorischer Imperativ formuliert ein grundlegendes Prinzip der Ethik: "Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde." Dieses Moralprinzip basiert auf der Vernunft und ist universell gültig, unabhängig von individuellen Neigungen oder Konsequenzen einer Handlung. Im Zentrum steht die Verallgemeinerbarkeit des Handlungsgrundsatzes.',
                question: 'Worauf basiert Kants kategorischer Imperativ?',
                options: { A: 'Auf individuellen Neigungen und Gefühlen.', B: 'Auf den positiven Konsequenzen einer Handlung.', C: 'Auf der Vernunft und der Universalisierbarkeit von Handlungsmaximen.', D: 'Auf religiösen Geboten.' },
                answer: 'C'
            },
            {
                text: 'Die "strukturelle Transformation des öffentlichen Raums", wie sie von Jürgen Habermas beschrieben wurde, bezeichnet den historischen Wandel der Öffentlichkeit von einem Ort des kritischen, vernunftbasierten Diskurses im bürgerlichen Zeitalter zu einem von kommerziellen und politischen Interessen dominierten Raum der Massenmedien, in dem Öffentlichkeit eher hergestellt und manipuliert als von den Bürgern selbst gebildet wird.',
                question: 'Was kennzeichnet nach Habermas die moderne Öffentlichkeit?',
                options: { A: 'Ein Anstieg des kritischen, vernunftbasierten Diskurses.', B: 'Die Dominanz durch kommerzielle und politische Interessen.', C: 'Die abnehmende Rolle der Massenmedien.', D: 'Die Stärkung der bürgerlichen Meinungsbildung.' },
                answer: 'B'
            },
            {
                text: 'Die Bioethik befasst sich mit den moralischen Fragen, die durch den Fortschritt in der Lebenswissenschaft und Medizin aufgeworfen werden. Themen wie Gentechnik, Klonen oder Sterbehilfe erfordern eine komplexe Abwägung zwischen dem, was technisch machbar ist, und dem, was ethisch vertretbar ist. Dabei müssen Prinzipien wie die Menschenwürde, Autonomie und Gerechtigkeit berücksichtigt werden.',
                question: 'Welches Thema gehört nicht primär in den Bereich der Bioethik?',
                options: { A: 'Gentechnik', B: 'Sterbehilfe', C: 'Klonen', D: 'Finanzmarktregulierung' },
                answer: 'D'
            },
            {
                text: 'Der Paradigmenwechsel, ein von Thomas S. Kuhn geprägter Begriff der Wissenschaftstheorie, beschreibt eine grundlegende Revolution in den wissenschaftlichen Überzeugungen. Ein altes Paradigma (ein System von Theorien und Methoden) wird nicht schrittweise modifiziert, sondern durch ein neues, inkompatibles Paradigma ersetzt, wenn sich zu viele Anomalien, also dem alten Paradigma widersprechende Beobachtungen, angesammelt haben.',
                question: 'Wie findet laut Kuhn ein Paradigmenwechsel statt?',
                options: { A: 'Durch schrittweise Anpassung der alten Theorie.', B: 'Durch die Widerlegung einzelner kleiner Fehler.', C: 'Durch eine revolutionäre Ersetzung des alten durch ein neues Paradigma.', D: 'Durch die Bestätigung des alten Paradigmas.' },
                answer: 'C'
            },
            {
                text: 'Die Dialektik der Aufklärung, ein zentrales Werk von Horkheimer und Adorno, postuliert die These, dass die Aufklärung, die den Menschen durch Vernunft von Mythen befreien sollte, in ihr Gegenteil umschlägt: eine neue Form der Mythologie in Form von instrumenteller Vernunft und totaler Verwaltung der Welt. Die Befreiung führt zu einer neuen, subtileren Form der Beherrschung.',
                question: 'Was ist die zentrale These der "Dialektik der Aufklärung"?',
                options: { A: 'Die Aufklärung hat die Menschen vollständig befreit.', B: 'Die Vernunft ist immer ein Instrument der Befreiung.', C: 'Die Aufklärung schlägt in eine neue Form der Beherrschung um.', D: 'Mythen sind der Vernunft überlegen.' },
                answer: 'C'
            },
            {
                text: 'In der Quantenphysik beschreibt das Heisenbergsche Unschärfeprinzip eine fundamentale Grenze der Messgenauigkeit: Bestimmte Paare von physikalischen Eigenschaften, wie der Ort und der Impuls eines Teilchens, können nicht gleichzeitig beliebig genau bestimmt werden. Je genauer der Ort gemessen wird, desto unschärfer wird der Impuls und umgekehrt. Dies ist keine Folge von Messungenauigkeiten, sondern eine prinzipielle Eigenschaft der Natur.',
                question: 'Was besagt das Heisenbergsche Unschärfeprinzip?',
                options: { A: 'Alle physikalischen Eigenschaften sind immer exakt messbar.', B: 'Ort und Impuls eines Teilchens sind immer gleichzeitig exakt messbar.', C: 'Die Messgenauigkeit ist nur durch die Qualität der Messgeräte begrenzt.', D: 'Ort und Impuls eines Teilchens können nicht gleichzeitig beliebig genau gemessen werden.' },
                answer: 'D'
            },
            {
                text: 'Der "linguistic turn" bezeichnet eine Wende in der Philosophie des 20. Jahrhunderts, die die Sprache in den Mittelpunkt der philosophischen Untersuchung rückt. Statt die Welt direkt zu analysieren, wird argumentiert, dass philosophische Probleme oft auf Missverständnissen der Sprache beruhen und durch eine Analyse der Sprachlogik und des Sprachgebrauchs gelöst oder aufgelöst werden können.',
                question: 'Welchen Stellenwert hat die Sprache nach dem "linguistic turn"?',
                options: { A: 'Sie ist ein nebensächliches Werkzeug der Philosophie.', B: 'Sie steht im Zentrum der philosophischen Untersuchung.', C: 'Sie ist die Quelle aller Wahrheit.', D: 'Sie ist irrelevant für die Lösung philosophischer Probleme.' },
                answer: 'B'
            },
            {
                text: 'Das "Gefangenendilemma" ist ein Konzept der Spieltheorie, das zeigt, warum zwei rationale Individuen möglicherweise nicht kooperieren, selbst wenn es in ihrem gemeinsamen Interesse wäre. Wenn jeder nur seinen eigenen Vorteil maximiert, führt dies zu einem Ergebnis, das für beide schlechter ist, als wenn sie kooperiert hätten. Dies illustriert den Konflikt zwischen individuellem und kollektivem Interesse.',
                question: 'Wozu führt rationales, eigennütziges Handeln im Gefangenendilemma?',
                options: { A: 'Immer zum bestmöglichen Ergebnis für alle.', B: 'Zu einem für beide Seiten suboptimalen Ergebnis.', C: 'Immer zur Kooperation der Individuen.', D: 'Zur Lösung des Konflikts zwischen individuellem und kollektivem Interesse.' },
                answer: 'B'
            },
            {
                text: 'Michel Foucaults Analyse der Macht unterscheidet sich von traditionellen Ansätzen. Macht ist für ihn keine besitzbare Eigenschaft (wie bei einem König), sondern ein produktives Netzwerk von Beziehungen, das überall in der Gesellschaft wirkt und Wissen, Diskurse und Subjekte hervorbringt. Macht ist nicht nur repressiv (unterdrückend), sondern auch konstitutiv (schaffend).',
                question: 'Wie charakterisiert Foucault die Macht?',
                options: { A: 'Als repressiven Besitz von Herrschern.', B: 'Als etwas, das außerhalb der Gesellschaft steht.', C: 'Als ein produktives Netzwerk von Beziehungen, das Wissen und Subjekte hervorbringt.', D: 'Als eine rein negative, zerstörerische Kraft.' },
                answer: 'C'
            },
            {
                text: 'Die Chaostheorie befasst sich mit Systemen, deren Verhalten zwar deterministischen Gesetzen folgt, aber aufgrund ihrer hohen Empfindlichkeit gegenüber Anfangsbedingungen (Schmetterlingseffekt) nicht langfristig vorhersagbar ist. Kleine Änderungen am Anfang können zu dramatisch unterschiedlichen Ergebnissen führen, was eine exakte Langzeitprognose unmöglich macht.',
                question: 'Warum ist das Verhalten chaotischer Systeme nicht langfristig vorhersagbar?',
                options: { A: 'Weil sie keinen deterministischen Gesetzen folgen.', B: 'Wegen ihrer Unempfindlichkeit gegenüber Anfangsbedingungen.', C: 'Wegen ihrer hohen Empfindlichkeit gegenüber Anfangsbedingungen.', D: 'Weil sie keine komplexen Muster aufweisen.' },
                answer: 'C'
            },
            {
                text: 'Das Konzept der "kognitiven Dissonanz", entwickelt von Leon Festinger, beschreibt einen unangenehmen Gefühlszustand, der entsteht, wenn eine Person unvereinbare Kognitionen (Gedanken, Überzeugungen, Einstellungen) hat. Menschen sind bestrebt, diese Dissonanz zu reduzieren, indem sie ihre Überzeugungen oder ihr Verhalten ändern oder die widersprüchlichen Informationen uminterpretieren.',
                question: 'Was tun Menschen, um kognitive Dissonanz zu reduzieren?',
                options: { A: 'Sie suchen aktiv nach widersprüchlichen Informationen.', B: 'Sie verstärken den Konflikt zwischen ihren Überzeugungen.', C: 'Sie ändern ihre Überzeugungen oder ihr Verhalten.', D: 'Sie akzeptieren den unangenehmen Zustand ohne Veränderung.' },
                answer: 'C'
            },
            {
                text: 'Die Phänomenologie, begründet von Edmund Husserl, ist eine philosophische Methode, die versucht, die Strukturen des Bewusstseins und die Phänomene so zu beschreiben, wie sie sich im Bewusstsein zeigen, unabhängig von wissenschaftlichen Theorien oder Alltagsannahmen. Durch die "epoché" (Einklammerung) sollen alle Vorurteile über die Existenz der Außenwelt ausgeschaltet werden, um zum "reinen Bewusstsein" vorzudringen.',
                question: 'Was ist das Ziel der phänomenologischen Methode?',
                options: { A: 'Die Bestätigung wissenschaftlicher Theorien.', B: 'Die Beschreibung der Phänomene, wie sie sich im reinen Bewusstsein zeigen.', C: 'Die Analyse der materiellen Außenwelt.', D: 'Die Verstärkung von Alltagsannahmen und Vorurteilen.' },
                answer: 'B'
            },
            {
                text: 'Der "Schleier des Nichtwissens" ist ein Gedankenexperiment des Philosophen John Rawls zur Bestimmung gerechter Grundsätze für eine Gesellschaft. In diesem hypothetischen Urzustand wissen die Individuen nichts über ihre spätere Position in der Gesellschaft (z.B. über ihren Reichtum, ihre Talente oder ihre soziale Stellung). Rawls argumentiert, dass sie sich unter diesem Schleier für Prinzipien entscheiden würden, die auch die am schlechtesten Gestellten schützen.',
                question: 'Welchem Zweck dient der "Schleier des Nichtwissens" bei Rawls?',
                options: { A: 'Der Maximierung des eigenen Vorteils auf Kosten anderer.', B: 'Der Auswahl von Prinzipien, die die Reichsten bevorzugen.', C: 'Der Herleitung von gerechten Grundsätzen durch die Ausschaltung von Eigeninteresse.', D: 'Der Kenntnis der eigenen zukünftigen sozialen Position.' },
                answer: 'C'
            },
            {
                text: 'Die Systemtheorie nach Niklas Luhmann beschreibt die Gesellschaft als ein System, das aus selbstreferentiellen, operativ geschlossenen Funktionssystemen (wie Wirtschaft, Politik, Recht, Wissenschaft) besteht. Jedes System operiert mit einem eigenen Code (z.B. Wirtschaft: zahlen/nicht zahlen) und kann nicht direkt in ein anderes System eingreifen, sondern es nur durch "Irritationen" beeinflussen.',
                question: 'Wie interagieren Funktionssysteme nach Luhmann miteinander?',
                options: { A: 'Durch direkte Eingriffe und Steuerung.', B: 'Sie sind komplett voneinander isoliert und interagieren gar nicht.', C: 'Sie teilen alle denselben Code und dieselbe Logik.', D: 'Durch gegenseitige Irritationen, da sie operativ geschlossen sind.' },
                answer: 'D'
            },
            {
                text: 'Der kategorische Fehler, ein Begriff des Philosophen Gilbert Ryle, bezeichnet die fehlerhafte Zuordnung einer Eigenschaft zu einer Kategorie, der sie nicht angehören kann. Ein Beispiel wäre, nach dem Besuch aller Gebäude einer Universität zu fragen: "Aber wo ist die Universität?". Man behandelt die Universität fälschlicherweise so, als wäre sie ein weiteres Gebäude und nicht die Organisation der Gebäude.',
                question: 'Was beschreibt ein kategorischer Fehler?',
                options: { A: 'Einen einfachen Rechenfehler.', B: 'Eine korrekte logische Schlussfolgerung.', C: 'Die fehlerhafte Zuordnung einer Eigenschaft zu einer falschen logischen Kategorie.', D: 'Einen grammatikalischen Fehler in einem Satz.' },
                answer: 'C'
            },
            {
                text: 'In der Literaturwissenschaft bezeichnet der Begriff "Intertextualität" das Phänomen, dass jeder Text in einem Beziehungsgeflecht zu anderen Texten steht. Texte beziehen sich aufeinander, zitieren, parodieren oder transformieren sich gegenseitig. Ein Text kann daher nie in völliger Isolation verstanden werden, sondern immer nur im Kontext dieses textuellen Netzwerks.',
                question: 'Was ist die Kernaussage der Intertextualitätstheorie?',
                options: { A: 'Jeder Text ist einzigartig und muss isoliert betrachtet werden.', B: 'Texte stehen in vielfältigen Beziehungen zueinander.', C: 'Autoren sollten das Zitieren anderer Texte vermeiden.', D: 'Nur der erste Text einer Gattung ist von Bedeutung.' },
                answer: 'B'
            },
            {
                text: 'Das "Panopticon", ein von Jeremy Bentham entworfenes und von Foucault analysiertes Architekturschema für Gefängnisse, ermöglicht die ständige Überwachung aller Insassen durch einen einzigen Wärter in einem zentralen Turm. Da die Gefangenen nicht wissen können, ob sie gerade beobachtet werden, verhalten sie sich so, als würden sie es permanent – sie internalisieren die Überwachung. Foucault sieht darin ein Modell für die disziplinierende Macht in der modernen Gesellschaft.',
                question: 'Welchen Effekt hat die panoptische Struktur auf die Überwachten?',
                options: { A: 'Sie widersetzen sich aktiv der Überwachung.', B: 'Sie wissen immer genau, wann sie beobachtet werden.', C: 'Sie ignorieren die Möglichkeit der Überwachung.', D: 'Sie internalisieren die Überwachung und disziplinieren sich selbst.' },
                answer: 'D'
            },
            {
                text: 'Die Hermeneutik ist die Theorie der Interpretation und des Verstehens. Der "hermeneutische Zirkel" beschreibt den Prozess, dass das Verständnis eines Ganzen (z.B. eines Textes) vom Verständnis seiner Teile abhängt, während das Verständnis der Teile wiederum vom Vorverständnis des Ganzen geprägt ist. Verstehen ist also ein zirkulärer, sich ständig verfeinernder Prozess, kein linearer.',
                question: 'Was beschreibt der hermeneutische Zirkel?',
                options: { A: 'Einen logischen Fehler, den es zu vermeiden gilt.', B: 'Einen linearen, schrittweisen Prozess des Verstehens.', C: 'Die wechselseitige Bedingtheit von Teil- und Ganzheitsverständnis.', D: 'Die Unmöglichkeit, einen Text jemals zu verstehen.' },
                answer: 'C'
            },
            {
                text: 'Die Memetik, ein von Richard Dawkins vorgeschlagenes Konzept, postuliert die Existenz von "Memen" als kulturelle Analoga zu biologischen Genen. Meme sind sich selbst replizierende Informationseinheiten – Ideen, Melodien, Moden –, die von Gehirn zu Gehirn springen und sich durch Imitation verbreiten. Erfolgreiche Meme verbreiten sich weit, unabhängig von ihrem Wahrheitsgehalt oder Nutzen.',
                question: 'Was ist ein "Mem" im Sinne der Memetik?',
                options: { A: 'Eine biologische Erbinformation.', B: 'Eine sich durch Imitation verbreitende kulturelle Informationseinheit.', C: 'Eine immer wahre und nützliche Idee.', D: 'Ein genetischer Defekt.' },
                answer: 'B'
            },
            {
                text: 'Die Theorie der "Banalität des Bösen" von Hannah Arendt, entwickelt nach der Beobachtung des Prozesses gegen Adolf Eichmann, besagt, dass extreme Bosheit nicht notwendigerweise von monströsen, dämonischen Motiven herrühren muss. Stattdessen kann sie aus Gedankenlosigkeit, Pflichtbewusstsein und der Unfähigkeit, aus der Perspektive anderer zu denken, entstehen – einer Form von bürokratischer Normalität.',
                question: 'Was ist laut Arendt die Wurzel der "Banalität des Bösen"?',
                options: { A: 'Dämonische und sadistische Motive.', B: 'Eine außergewöhnliche kriminelle Energie.', C: 'Gedankenlosigkeit und die Unfähigkeit, die Perspektive anderer einzunehmen.', D: 'Ein angeborener Hang zur Grausamkeit.' },
                answer: 'C'
            },
            {
                text: 'Die Sprechakttheorie, begründet von J.L. Austin, betont, dass wir mit Sprache nicht nur Dinge beschreiben (Konstativa), sondern auch Handlungen vollziehen (Performative). Jede Äußerung hat eine lokutionäre (die wörtliche Bedeutung), eine illokutionäre (die Handlungsabsicht, z.B. warnen, versprechen) und eine perlokutionäre (die Wirkung auf den Hörer) Dimension.',
                question: 'Was ist die illokutionäre Dimension einer Äußerung?',
                options: { A: 'Die rein grammatikalische Struktur.', B: 'Die wörtliche Bedeutung der Worte.', C: 'Die Handlungsabsicht, die mit der Äußerung verfolgt wird.', D: 'Die konkrete Wirkung, die beim Hörer erzielt wird.' },
                answer: 'C'
            },
            {
                text: 'Der Sozialdarwinismus überträgt fälschlicherweise Charles Darwins biologische Evolutionstheorie vom "Überleben des Stärksten" (Survival of the Fittest) auf menschliche Gesellschaften. Diese Ideologie wurde oft zur Rechtfertigung von sozialer Ungleichheit, Imperialismus und Rassismus missbraucht, indem behauptet wurde, der Erfolg bestimmter Gruppen oder Völker sei ein Beweis für ihre angeborene Überlegenheit.',
                question: 'Wozu wurde der Sozialdarwinismus oft missbraucht?',
                options: { A: 'Zur Förderung von Gleichheit und sozialer Gerechtigkeit.', B: 'Zur Rechtfertigung von sozialer Ungleichheit und Rassismus.', C: 'Zur exakten Anwendung biologischer Gesetze auf die Gesellschaft.', D: 'Zur Kritik am Kapitalismus.' },
                answer: 'B'
            },
            {
                text: 'In der Rechtsphilosophie unterscheidet man zwischen positivem Recht und Naturrecht. Positives Recht ist das vom Menschen gesetzte, geschriebene Recht eines Staates. Naturrecht hingegen postuliert die Existenz von übergeordneten, universellen Rechtsprinzipien, die aus der Natur des Menschen oder der Vernunft abgeleitet werden und dem positiven Recht als Maßstab dienen können.',
                question: 'Was kennzeichnet positives Recht?',
                options: { A: 'Es ist universell und ewig gültig.', B: 'Es wird aus der menschlichen Vernunft abgeleitet.', C: 'Es ist das von Menschen gesetzte, geschriebene Recht.', D: 'Es steht immer über dem Naturrecht.' },
                answer: 'C'
            },
            {
                text: 'Die "Tragödie des Allgemeinguts" (Tragedy of the Commons) beschreibt ein Problem, bei dem frei verfügbare, aber begrenzte Ressourcen durch die eigennützige Nutzung durch Individuen übernutzt und zerstört werden, da der Nutzen der Nutzung privatisiert, der Schaden aber sozialisiert wird. Jeder Einzelne handelt rational, aber die Summe der Handlungen führt zur kollektiven Katastrophe.',
                question: 'Was ist die Ursache der "Tragödie des Allgemeinguts"?',
                options: { A: 'Strenge staatliche Regulierung der Ressource.', B: 'Das altruistische Handeln aller Individuen.', C: 'Die Privatisierung aller Ressourcen.', D: 'Die Übernutzung einer freien Ressource durch rational handelnde Individuen.' },
                answer: 'D'
            },
            {
                text: 'Der Begriff des "kulturellen Gedächtnisses", geprägt von Jan und Aleida Assmann, bezeichnet das von einer Gesellschaft geteilte Wissen über ihre Vergangenheit, das durch Medien, Rituale und Institutionen tradiert wird. Im Gegensatz zum kommunikativen Gedächtnis, das auf den Erfahrungen lebender Generationen beruht, reicht das kulturelle Gedächtnis weiter zurück und formt die kollektive Identität.',
                question: 'Was unterscheidet das kulturelle vom kommunikativen Gedächtnis?',
                options: { A: 'Das kulturelle Gedächtnis bezieht sich nur auf die nahe Zukunft.', B: 'Das kulturelle Gedächtnis ist auf die Erfahrungen lebender Generationen beschränkt.', C: 'Das kulturelle Gedächtnis reicht weiter in die Vergangenheit zurück und formt die kollektive Identität.', D: 'Das kommunikative Gedächtnis wird nur schriftlich tradiert.' },
                answer: 'C'
            },
            {
                text: 'Gödelscher Unvollständigkeitssatz ist ein fundamentales Ergebnis der mathematischen Logik. Der erste Satz besagt, dass in jedem ausreichend mächtigen, konsistenten formalen System (wie der Arithmetik) wahre Aussagen existieren, die innerhalb dieses Systems nicht bewiesen werden können. Dies setzt der Vorstellung, dass Mathematik ein vollständig beweisbares, geschlossenes System sein könnte, eine prinzipielle Grenze.',
                question: 'Was folgt aus Gödels erstem Unvollständigkeitssatz?',
                options: { A: 'Jede wahre mathematische Aussage ist beweisbar.', B: 'Mathematik ist ein in sich widersprüchliches System.', C: 'Es gibt wahre Aussagen in der Arithmetik, die nicht beweisbar sind.', D: 'Formale Systeme sind für die Mathematik unbrauchbar.' },
                answer: 'C'
            },
            {
                text: 'Die "kognitive Revolution", ein Begriff aus der Evolutionspsychologie, bezeichnet eine Phase vor etwa 70.000 Jahren, in der der Homo sapiens neue kognitive Fähigkeiten entwickelte, insbesondere eine flexible und komplexe Sprache. Diese ermöglichte die Kommunikation über Fiktionen wie Götter, Nationen oder Geld, was die Kooperation in großen Gruppen erlaubte und die Grundlage für die menschliche Zivilisation legte.',
                question: 'Was war die entscheidende neue Fähigkeit der kognitiven Revolution?',
                options: { A: 'Der aufrechte Gang.', B: 'Die Herstellung von einfachen Werkzeugen.', C: 'Die Fähigkeit zur Kommunikation über Fiktionen.', D: 'Die Kontrolle des Feuers.' },
                answer: 'C'
            },
            {
                text: 'Die kritische Theorie der Frankfurter Schule übt eine fundamentale Kritik an der modernen kapitalistischen Gesellschaft. Sie argumentiert, dass die Kulturindustrie die Massen durch standardisierte Unterhaltungsprodukte passiviert und manipuliert, wodurch kritisches Denken und emanzipatorisches Potenzial unterdrückt werden. Die scheinbare Freiheit der Wahl ist nur eine Illusion innerhalb eines allumfassenden Systems der Kontrolle.',
                question: 'Was ist die Funktion der Kulturindustrie nach der kritischen Theorie?',
                options: { A: 'Die Förderung von kritischem Denken und Emanzipation.', B: 'Die Produktion von individueller, einzigartiger Kunst.', C: 'Die Passivierung und Manipulation der Massen.', D: 'Die Untergrabung des kapitalistischen Systems.' },
                answer: 'C'
            },
        ],
    },
};
