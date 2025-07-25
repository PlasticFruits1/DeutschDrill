'use client';

import { useState, useEffect, useCallback } from 'react';
import type * as Tone from 'tone';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, CheckCircle, Sparkles, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type Level = 'A1' | 'B1' | 'C1';
type GrammarType = 'fill-in-the-blank' | 'multiple-choice';
type Activity = 'grammar' | 'reading';

type Exercise = {
  prompt: string;
  answer: string;
  isMcq: boolean;
  options?: { id: string; label: string }[];
  question?: string;
} | null;

type ReadingFeedback = {
    feedback: string;
    isCorrect: boolean;
} | null;

const hardcodedGrammarExercises = {
  A1: {
    'fill-in-the-blank': [
      { exercise: 'Ich ___ aus Deutschland. (kommen)', answer: 'komme' },
      { exercise: 'Er ___ ein Auto. (haben)', answer: 'hat' },
      { exercise: 'Wir ___ gern Pizza. (essen)', answer: 'essen' },
    ],
    'multiple-choice': [
      { exercise: 'Was ist das?', options: [{id: 'A', label: 'Der Tisch'}, {id: 'B', label: 'Die Tisch'}, {id: 'C', label: 'Das Tisch'}, {id: 'D', label: 'Den Tisch'}], answer: 'A' },
      { exercise: 'Wie alt ___ du?', options: [{id: 'A', label: 'bin'}, {id: 'B', label: 'seid'}, {id: 'C', label: 'bist'}, {id: 'D', 'label': 'ist'}], answer: 'C' },
    ],
  },
  B1: {
    'fill-in-the-blank': [
        { exercise: 'Ich würde gern wissen, ___ der Zug ankommt. (wann)', answer: 'wann' },
        { exercise: '___ ich jung war, spielte ich oft Fußball. (als)', answer: 'Als' },
    ],
    'multiple-choice': [
        { exercise: 'Er interessiert sich ___ Politik.', options: [{id: 'A', label: 'für'}, {id: 'B', label: 'an'}, {id: 'C', label: 'auf'}, {id: 'D', label: 'mit'}], answer: 'A' },
        { exercise: 'Ich warte ___ den Bus.', options: [{id: 'A', label: 'auf'}, {id: 'B', label: 'an'}, {id: 'C', label: 'für'}, {id: 'D', label: 'zu'}], answer: 'A' },
    ]
  },
  C1: {
      'fill-in-the-blank': [
          { exercise: '___ des schlechten Wetters, gingen wir spazieren. (trotz)', answer: 'Trotz' },
          { exercise: 'Er tut so, ___ er alles wüsste. (als ob)', answer: 'als ob' },
      ],
      'multiple-choice': [
          { exercise: 'Das Buch, ___ ich gelesen habe, war sehr interessant.', options: [{id: 'A', label: 'das'}, {id: 'B', label: 'was'}, {id: 'C', label: 'welches'}, {id: 'D', label: 'dem'}], answer: 'A' },
          { exercise: 'Je mehr man liest, ___ man lernt.', options: [{id: 'A', label: 'desto mehr'}, {id: 'B', label: 'umso viel'}, {id: 'C', label: 'je mehr'}, {id: 'D', label: 'desto besser'}], answer: 'A' },
      ]
  },
};

const hardcodedReadingPrompts = {
    A1: [
        { prompt: 'Hanna wohnt in Berlin. Sie kommt aus der Schweiz. Sie spricht Deutsch, Französisch und Englisch. Was ist Hannas Muttersprache?', options: [{id: 'A', label: 'Englisch'}, {id: 'B', label: 'Deutsch oder Französisch'}, {id: 'C', label: 'Deutsch'}, {id: 'D', label: 'Französisch'}], answer: 'B' },
        { prompt: 'Leo hat am Samstag Geburtstag. Er macht eine Party. Er lädt seine Freunde ein. Die Party beginnt um 18 Uhr. Wann ist die Party?', options: [{id: 'A', label: 'Am Sonntag'}, {id: 'B', label: 'Am Abend'}, {id: 'C', label: 'Am Morgen'}, {id: 'D', label: 'Am Samstagabend'}], answer: 'D' },
    ],
    B1: [
        { prompt: 'Die Globalisierung führt dazu, dass die Weltwirtschaft immer enger zusammenwächst. Einerseits bietet dies viele Chancen, wie zum Beispiel einen größeren Markt für Unternehmen und mehr Produktvielfalt für Verbraucher. Andererseits gibt es auch Risiken, wie die zunehmende Konkurrenz für lokale Anbieter. Was ist ein Vorteil der Globalisierung?', options: [{id: 'A', label: 'Lokale Anbieter haben weniger Konkurrenz'}, {id: 'B', label: 'Unternehmen haben einen kleineren Markt'}, {id: 'C', label: 'Verbraucher haben mehr Auswahl'}, {id: 'D', label: 'Die Weltwirtschaft schrumpft'}], answer: 'C' },
    ],
    C1: [
        { prompt: 'Künstliche Intelligenz (KI) ist ein transformatives Feld der Informatik, das weitreichende Auswirkungen auf die Gesellschaft hat. Während KI das Potenzenzial birgt, komplexe Probleme zu lösen und die menschliche Effizienz zu steigern, wirft sie auch ethische Fragen hinsichtlich Datenschutz, Voreingenommenheit von Algorithmen und der Zukunft der Arbeit auf. Welche Herausforderung wird im Text genannt?', options: [{id: 'A', label: 'Mangel an komplexen Problemen'}, {id: 'B', label: 'Steigerung der menschlichen Effizienz'}, {id: 'C', label: 'Ethische Bedenken bezüglich KI'}, {id: 'D', label: 'Die sinkende Bedeutung der Informatik'}], answer: 'C' },
    ]
};

export default function DeutschDrillClient() {
  const [level, setLevel] = useState<Level>('A1');
  const [grammarType, setGrammarType] = useState<GrammarType>('fill-in-the-blank');
  const [activity, setActivity] = useState<Activity>('grammar');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [exercise, setExercise] = useState<Exercise>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [readingFeedback, setReadingFeedback] = useState<ReadingFeedback>(null);
  const [synth, setSynth] = useState<any>(null);
  const [tone, setTone] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    import('tone').then(ToneModule => {
      setSynth(new ToneModule.Synth().toDestination());
      setTone(ToneModule);
    }).catch(e => console.error("Failed to load Tone.js", e));
    
    return () => {
        if (synth) {
            synth.dispose();
        }
    }
  }, []);

  const playSound = (note: string) => {
    if (synth) {
      synth.triggerAttackRelease(note, '8n');
    }
  };

    const playCorrectSound = useCallback(() => {
        if (synth && tone) {
            const now = tone.now();
            synth.triggerAttackRelease('C4', '8n', now);
            synth.triggerAttackRelease('E4', '8n', now + 0.15);
            synth.triggerAttackRelease('G4', '8n', now + 0.3);
        }
    }, [synth, tone]);

    const playIncorrectSound = useCallback(() => {
        if (synth && tone) {
            const now = tone.now();
            synth.triggerAttackRelease('G3', '8n', now);
            synth.triggerAttackRelease('F#3', '4n', now + 0.15);
        }
    }, [synth, tone]);


  const handleGenerate = async () => {
    playSound('C4');
    setIsLoading(true);
    setExercise(null);
    setShowResult(false);
    setUserAnswer('');
    setReadingFeedback(null);

    await new Promise(resolve => setTimeout(resolve, 300));

    try {
        let result;
        if (activity === 'grammar') {
            const exercisePool = hardcodedGrammarExercises[level][grammarType];
            result = exercisePool[Math.floor(Math.random() * exercisePool.length)];
        } else {
            const promptPool = hardcodedReadingPrompts[level];
            result = promptPool[Math.floor(Math.random() * promptPool.length)];
        }

        if (grammarType === 'multiple-choice' || activity === 'reading') {
            setExercise({
                prompt: result.exercise || result.prompt,
                answer: result.answer,
                isMcq: true,
                question: result.exercise || result.prompt,
                options: result.options
            });
        } else {
            setExercise({
                prompt: result.exercise,
                answer: result.answer,
                isMcq: false
            });
        }
    } catch (error) {
      console.error('Error generating exercise:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate a new exercise. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckAnswer = async () => {
    if (!userAnswer || !exercise) return;
    
    const correct = userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();
    if(correct) {
        playCorrectSound();
    } else {
        playIncorrectSound();
    }
    setShowResult(true);
  };
  
  const isCorrect = exercise && userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();

  return (
    <Card className="w-full shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:shadow-primary/20">
      <Tabs value={activity} onValueChange={(value) => setActivity(value as Activity)} className="w-full">
        <CardHeader>
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                <TabsTrigger value="grammar"><Sparkles className="mr-2 h-4 w-4" /> Grammar</TabsTrigger>
                <TabsTrigger value="reading"><BookOpen className="mr-2 h-4 w-4" /> Reading</TabsTrigger>
            </TabsList>
        </CardHeader>
        <CardContent className="space-y-6 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                    <Label htmlFor="level" className="text-muted-foreground">Language Level</Label>
                    <Select value={level} onValueChange={(value) => setLevel(value as Level)}>
                        <SelectTrigger id="level" className="w-full">
                            <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="A1">A1 (Beginner)</SelectItem>
                            <SelectItem value="B1">B1 (Intermediate)</SelectItem>
                            <SelectItem value="C1">C1 (Advanced)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {activity === 'grammar' && (
                    <div className="flex-1 space-y-2">
                         <Label htmlFor="grammar-type" className="text-muted-foreground">Exercise Type</Label>
                         <Select value={grammarType} onValueChange={(value) => setGrammarType(value as GrammarType)}>
                            <SelectTrigger id="grammar-type" className="w-full">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fill-in-the-blank">Fill-in-the-Blank</SelectItem>
                                <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </div>
          
            <Separator/>

            <div className="min-h-[200px] p-4 rounded-lg bg-background/70 border-2 border-dashed border-border flex items-center justify-center text-center">
                {isLoading ? (
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-3/4 mx-auto" />
                        <Skeleton className="h-4 w-full mx-auto" />
                        <Skeleton className="h-4 w-1/2 mx-auto" />
                    </div>
                ) : exercise ? (
                    <div className="text-left w-full space-y-4">
                        <p className="text-xl font-medium font-headline whitespace-pre-wrap">{exercise.isMcq ? exercise.question : exercise.prompt}</p>
                        {exercise.isMcq && exercise.options ? (
                             <RadioGroup value={userAnswer} onValueChange={setUserAnswer} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2" disabled={showResult}>
                                {exercise.options.map((option) => (
                                    <Label key={option.id} htmlFor={option.id} className={cn(
                                        buttonVariants({ variant: 'outline', size: 'lg' }),
                                        'justify-start h-auto p-4 text-base whitespace-normal rounded-full font-bold transition-all duration-300',
                                        'hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1',
                                        userAnswer === option.id && 'bg-primary/20 border-primary ring-2 ring-primary'
                                    )}>
                                        <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                                        <span className="font-bold mr-2">{option.id})</span>
                                        <span>{option.label}</span>
                                    </Label>
                                ))}
                             </RadioGroup>
                        ) : (
                             <Input 
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Your answer..."
                                disabled={showResult}
                                className="text-lg rounded-full"
                            />
                        )}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-lg">Select your options and click "New Challenge" to begin!</p>
                )}
            </div>

            {showResult && exercise && (
                <div className={`p-4 rounded-full flex items-center justify-center gap-3 border-2 font-bold text-lg ${isCorrect ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'}`}>
                    {isCorrect ? <CheckCircle className="h-6 w-6"/> : <XCircle className="h-6 w-6"/>}
                    <p>
                        {isCorrect ? "Correct! Well done." : `Not quite. The correct answer is: ${exercise.answer}`}
                    </p>
                </div>
            )}
        </CardContent>
        <CardFooter className="flex flex-col-reverse sm:flex-row justify-between gap-4 px-4 sm:px-6 pb-6">
          <Button 
            onClick={handleCheckAnswer} 
            disabled={!userAnswer || showResult || isLoading || isChecking}
            className="w-full sm:w-auto text-lg py-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variant="outline"
          >
            {isChecking ? 'Checking...' : 'Check Answer'}
          </Button>
          <Button onClick={handleGenerate} disabled={isLoading || isChecking} className="w-full sm:w-auto text-lg py-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {isLoading ? "Generating..." : "New Challenge"}
          </Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
