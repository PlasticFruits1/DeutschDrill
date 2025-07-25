
'use client';

import { useState, useEffect, useCallback } from 'react';
import type * as Tone from 'tone';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Sparkles } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LevelingSystem from '@/components/LevelingSystem';
import ExerciseArea from '@/components/ExerciseArea';
import PetDisplay from '@/components/PetDisplay';

import { exercises } from '@/lib/exercises';
import { evaluateReadingResponse } from '@/ai/flows/evaluate-response';

// Type definitions
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export type GrammarType = 'fill-in-the-blank' | 'multiple-choice';
export type Activity = 'grammar' | 'reading';

export type Exercise = {
  prompt: string;
  answer: string;
  isMcq: boolean;
  options?: { id: string; label: string }[];
  question?: string;
} | null;

export type ReadingFeedback = {
    feedback: string;
    isCorrect: boolean;
} | null;

const eggbertArt = `
    /\\
   /  \\
  |    |
   \\  /
    \\/
`;

const catleArt = `
  /\\_/\\
 ( o.o )
  > ^ <
`;

const doggoArt = `
 / \\__
(    @\\___
 /         O
/   (_____/
/_____/   U
`;

const birdieArt = `
   .-.
  (o.o)
   |/  \\
  //|\\\\
 //_|_\\\\
`;

const foxyArt = `
>(')____,
  (\`))    \\\\\\\\
   /\\\\\\\`--' \\\\\\\\
   \\\\\\\\\\\\ \\\\\\\\\\\\`----'\\\\\\\\
`;


const levelSystem = [
  { level: 1, expRequired: 0, pet: {art: eggbertArt, name: 'Eggbert'} },
  { level: 2, expRequired: 100, pet: {art: catleArt, name: 'Catle'} },
  { level: 3, expRequired: 250, pet: {art: doggoArt, name: 'Doggo'} },
  { level: 4, expRequired: 500, pet: {art: birdieArt, name: 'Birdie'} },
  { level: 5, expRequired: 1000, pet: {art: foxyArt, name: 'Foxy'} },
];

type Pet = {
  art: string;
  name: string;
} | null;

export default function DeutschDrillClient() {
  const [level, setLevel] = useState<Level>('A1');
  const [grammarType, setGrammarType] = useState<GrammarType>('multiple-choice');
  const [activity, setActivity] = useState<Activity>('grammar');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [exercise, setExercise] = useState<Exercise>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [synth, setSynth] = useState<any>(null);
  const [tone, setTone] = useState<any>(null);
  const [exp, setExp] = useState(0);
  const [streak, setStreak] = useState(0);
  const { toast } = useToast();
  
  const [playerLevel, setPlayerLevel] = useState(1);
  const [pet, setPet] = useState<Pet>(levelSystem[0].pet);
  const [readingFeedback, setReadingFeedback] = useState<ReadingFeedback>(null);
  const [started, setStarted] = useState(false);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

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

    useEffect(() => {
        const currentLevelData = levelSystem.slice().reverse().find(l => exp >= l.expRequired);
        if (currentLevelData) {
            if (currentLevelData.level > playerLevel) {
                setPlayerLevel(currentLevelData.level);
                toast({
                    title: 'Level Up!',
                    description: "You've reached level " + currentLevelData.level + " and unlocked a new friend!",
                });
            }
            setPet(currentLevelData.pet);
        }
    }, [exp, playerLevel, toast]);


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
        if (!started) setStarted(true);
    
        try {
            let exercisePool = [];
            if (activity === 'grammar') {
                exercisePool = exercises[level].grammar[grammarType];
            } else {
                exercisePool = exercises[level].reading;
            }
    
            if (exercisePool.length === 0) {
                toast({
                    title: 'No exercises available',
                    description: `No exercises found for ${level} ${activity}.`,
                    variant: 'destructive',
                });
                setIsLoading(false);
                return;
            }
    
            let availableQuestions = exercisePool.filter(q => !questionHistory.includes(q.question));
            if (availableQuestions.length === 0) {
                // If all questions have been asked, reset history for this pool
                setQuestionHistory([]); 
                availableQuestions = exercisePool;
            }

            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const newExerciseData = availableQuestions[randomIndex];
    
            const isMcq = (activity === 'grammar' && grammarType === 'multiple-choice') || activity === 'reading';
            
            let options;
            let question = newExerciseData.question;
            let prompt = question;
            if (isMcq && newExerciseData.options) {
                options = Object.entries(newExerciseData.options).map(([key, value]) => ({
                    id: key,
                    label: value
                }));
                const optionsText = options.map(o => `${o.id}) ${o.label}`).join('\n');
                prompt = `${question}\n${optionsText}`;
            }

            setExercise({
              prompt: prompt,
              answer: newExerciseData.answer,
              isMcq: isMcq,
              question: question,
              options: options,
            });
    
            setQuestionHistory(prev => {
              const newHistory = [...prev, newExerciseData.question];
              if (newHistory.length > 100) {
                return newHistory.slice(newHistory.length - 100);
              }
              return newHistory;
            });
    
        } catch (error) {
          console.error('Error generating exercise:', error);
          toast({
            title: 'Error',
            description: 'Failed to load a new exercise. Please try again.',
            variant: 'destructive',
          });
        } finally {
          setIsLoading(false);
        }
      };

  const handleCheckAnswer = async () => {
    if (!userAnswer || !exercise) return;
    setIsChecking(true);

    let correct;

    if (activity === 'reading') {
        // For reading, we need to check the selected option against the answer
        if (exercise.isMcq) {
            correct = userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();
            const result = await evaluateReadingResponse({ prompt: exercise.prompt, response: userAnswer });
            setReadingFeedback(result);
        }
    } else { // grammar
        correct = userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();
    }
    
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
    
    setTimeout(() => {
        handleGenerate();
        setIsChecking(false);
    }, 2000);
  };
  
  const isCorrect = activity === 'reading' 
    ? readingFeedback?.isCorrect 
    : exercise && userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();

  return (
    <>
      <div className="flex flex-row items-stretch gap-8">
        <div className="w-24">
          <LevelingSystem playerLevel={playerLevel} exp={exp} />
        </div>
        <Card className="flex-1 shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:shadow-primary/20 rounded-[2rem]">
          <Tabs value={activity} onValueChange={(value) => setActivity(value as Activity)} className="w-full">
            <CardHeader>
                <TabsList className="grid w-full grid-cols-2 bg-primary/10 rounded-full h-12">
                    <TabsTrigger value="grammar" className="rounded-full text-base font-bold"><Sparkles className="mr-2 h-5 w-5" /> Grammar</TabsTrigger>
                    <TabsTrigger value="reading" className="rounded-full text-base font-bold"><BookOpen className="mr-2 h-5 w-5" /> Reading</TabsTrigger>
                </TabsList>
            </CardHeader>
            <CardContent className="space-y-6 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 space-y-2">
                        <Label htmlFor="level" className="text-muted-foreground font-bold">Language Level</Label>
                        <Select value={level} onValueChange={(value) => setLevel(value as Level)}>
                            <SelectTrigger id="level" className="w-full rounded-full h-12 text-base">
                                <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="A1">A1 (Beginner)</SelectItem>
                                <SelectItem value="A2">A2 (Elementary)</SelectItem>
                                <SelectItem value="B1">B1 (Intermediate)</SelectItem>
                                <SelectItem value="B2">B2 (Upper-Intermediate)</SelectItem>
                                <SelectItem value="C1">C1 (Advanced)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {activity === 'grammar' && (
                        <div className="flex-1 space-y-2">
                             <Label htmlFor="grammar-type" className="text-muted-foreground font-bold">Exercise Type</Label>
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
              
                <ExerciseArea
                    isLoading={isLoading}
                    exercise={exercise}
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                    showResult={showResult}
                    isCorrect={isCorrect}
                    streak={streak}
                    readingFeedback={readingFeedback}
                    activity={activity}
                    started={started}
                />
            </CardContent>
            <CardFooter className="flex flex-col-reverse sm:flex-row gap-4 px-4 sm:px-6 pb-6">
            {!started ? (
                <div className="flex justify-center w-full">
                    <Button 
                        onClick={handleGenerate} 
                        disabled={isLoading || isChecking} 
                        className="w-full sm:w-auto text-lg py-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        {isLoading ? "Generating..." : "Start Challenge"}
                    </Button>
                </div>
            ) : (
                <div className="flex justify-between w-full">
                    <Button 
                        onClick={handleCheckAnswer} 
                        disabled={!userAnswer || showResult || isLoading || isChecking}
                        className="w-full sm:w-auto text-lg py-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 scale-100 data-[state=selected]:scale-110"
                        variant={userAnswer ? 'default' : 'outline'}
                        data-state={userAnswer ? 'selected' : 'default'}
                    >
                        {isChecking ? 'Checking...' : 'Check Answer'}
                    </Button>
                    <Button 
                        onClick={handleGenerate} 
                        disabled={isLoading || isChecking} 
                        className="w-full sm:w-auto text-lg py-6 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        variant="secondary"
                    >
                        {isLoading ? "Generating..." : "New Challenge"}
                    </Button>
                </div>
            )}
            </CardFooter>
          </Tabs>
        </Card>
        {pet && (
          <div className="w-48">
            <PetDisplay petArt={pet.art} petName={pet.name} level={playerLevel} streak={streak} />
          </div>
        )}
      </div>
    </>
  );
}

    

    