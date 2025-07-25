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
import { BookOpen, CheckCircle, Flame, Sparkles, Star, XCircle } from 'lucide-react';
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
  const [exp, setExp] = useState(0);
  const [streak, setStreak] = useState(0);
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

    const playCorrectSound = useCallback(() => {
        if (synth && tone) {
            const now = tone.now();
            synth.triggerAttackRelease('C4', '8n', now);
            synth.triggerAttackRelease('E4', '8n', now + 0.1);
            synth.triggerAttackRelease('G4', '8n', now + 0.2);
            synth.triggerAttackRelease('C5', '8n', now + 0.3);
        }
    }, [synth, tone]);

    const playIncorrectSound = useCallback(() => {
        if (synth && tone) {
            const now = tone.now();
            synth.triggerAttackRelease('A3', '8n', now);
            synth.triggerAttackRelease('G#3', '2n', now + 0.1);
        }
    }, [synth, tone]);


  const handleGenerate = async () => {
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
        
        const isMcq = grammarType === 'multiple-choice' || activity === 'reading';

        setExercise({
            prompt: result.exercise || result.prompt,
            answer: result.answer,
            isMcq: isMcq,
            question: result.exercise || result.prompt,
            options: result.options
        });
        
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
    if (correct) {
        playCorrectSound();
        const bonus = streak * 5;
        setExp(exp + 10 + bonus);
        setStreak(streak + 1);
    } else {
        playIncorrectSound();
        setExp(Math.max(0, exp - 5));
        setStreak(0);
    }
    setShowResult(true);
  };
  
  const isCorrect = exercise && userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();

  return (
    <Card className="w-full shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:shadow-primary/20 rounded-[2rem]">
      <Tabs value={activity} onValueChange={(value) => setActivity(value as Activity)} className="w-full">
        <CardHeader>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 font-bold text-lg bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <Star className="h-6 w-6"/>
                    <span>{exp} EXP</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-lg bg-orange-400/10 text-orange-500 px-4 py-2 rounded-full">
                    <Flame className="h-6 w-6"/>
                    <span>{streak} Streak</span>
                </div>
            </div>
            <TabsList className="grid w-full grid-cols-2 bg-primary/10 rounded-full h-12">
                <TabsTrigger value="grammar" className="rounded-full text-base font-bold"><Sparkles className="mr-2 h-5 w-5" /> Grammar</TabsTrigger>
                <TabsTrigger value="reading" className="rounded-full text-base font-bold"><BookOpen className="mr-2 h-5 w-5" /> Reading</TabsTrigger>
            </TabsList>
        </CardHeader>
        <CardContent className="space-y-6 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                    <Label htmlFor="level" className="text-muted-foreground font-bold px-3">Language Level</Label>
                    <Select value={level} onValueChange={(value) => setLevel(value as Level)}>
                        <SelectTrigger id="level" className="w-full rounded-full h-12 text-base">
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
                         <Label htmlFor="grammar-type" className="text-muted-foreground font-bold px-3">Exercise Type</Label>
                         <Select value={grammarType} onValueChange={(value) => setGrammarType(value as GrammarType)}>
                            <SelectTrigger id="grammar-type" className="w-full rounded-full h-12 text-base">
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

            <div className="min-h-[200px] p-4 rounded-3xl bg-background/70 border-2 border-dashed border-border flex items-center justify-center text-center">
                {isLoading ? (
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-3/4 mx-auto" />
                        <Skeleton className="h-4 w-full mx-auto" />
                        <Skeleton className="h-4 w-1/2 mx-auto" />
                    </div>
                ) : exercise ? (
                    <div className="text-left w-full space-y-4">
                        <p className="text-xl font-medium font-headline whitespace-pre-wrap">{exercise.question}</p>
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
                                className="text-lg rounded-full h-12"
                            />
                        )}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-lg font-bold">Select your options and click "New Challenge" to begin!</p>
                )}
            </div>

            {showResult && exercise && (
                <div className={`p-4 rounded-full flex items-center justify-center gap-3 border-2 font-bold text-lg ${isCorrect ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'}`}>
                    {isCorrect ? <CheckCircle className="h-6 w-6"/> : <XCircle className="h-6 w-6"/>}
                    <p>
                        {isCorrect ? "Correct! Well done." : `Not quite. The correct answer is: ${exercise.answer}`}
                    </p>
                    {isCorrect && streak > 1 && <span className="font-bold text-orange-500">+{10 + (streak-1) * 5} EXP!</span>}
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

    