'use client';

import { useState, useEffect } from 'react';
import type * as Tone from 'tone';

import { generateGrammarExercise } from '@/ai/flows/generate-exercise';
import { generateReadingPrompt } from '@/ai/flows/generate-prompt';
import { evaluateReadingResponse } from '@/ai/flows/evaluate-response';
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
  const { toast } = useToast();

  useEffect(() => {
    import('tone').then(Tone => {
      setSynth(new Tone.Synth().toDestination());
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

  const parseMcq = (prompt: string): { isMcq: true; question: string; options: {id: string, label: string}[] } | { isMcq: false } => {
    const lines = prompt.split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) return { isMcq: false };
    
    const question = lines[0];
    const options = lines.slice(1).map(line => {
      const match = line.match(/^([A-Z])\)\s(.*)$/);
      if (match) {
        return { id: match[1], label: match[2] };
      }
      return null;
    }).filter(Boolean);

    if (options.length > 1 && options.every(opt => opt !== null)) {
      return { isMcq: true, question: question, options: options as {id: string, label: string}[] };
    }
    
    return { isMcq: false };
  }

  const handleGenerate = async () => {
    playSound('C4');
    setIsLoading(true);
    setExercise(null);
    setShowResult(false);
    setUserAnswer('');
    setReadingFeedback(null);

    try {
        let result;
        let promptText;
        if (activity === 'grammar') {
            result = await generateGrammarExercise({ level, exerciseType: grammarType });
            promptText = result.exercise;
        } else {
            result = await generateReadingPrompt({ level });
            promptText = result.prompt;
        }

        const mcqParseResult = parseMcq(promptText);
        
        if (mcqParseResult.isMcq) {
          setExercise({
            prompt: promptText,
            answer: result.answer,
            ...mcqParseResult,
          });
        } else {
          setExercise({
            prompt: promptText,
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
    playSound('E4');
    
    if (activity === 'reading' && !exercise.isMcq) {
        setIsChecking(true);
        try {
            const result = await evaluateReadingResponse({ prompt: exercise.prompt, response: userAnswer });
            setReadingFeedback(result);
        } catch (error) {
            console.error('Error evaluating response:', error);
            toast({
                title: 'Error',
                description: 'Failed to evaluate your response. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsChecking(false);
        }
    }
    setShowResult(true);
  };
  
  const isCorrect = exercise && userAnswer.trim().toLowerCase() === exercise.answer.trim().toLowerCase();

  return (
    <Card className="w-full shadow-2xl bg-card/80 backdrop-blur-sm border-primary/20">
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
                    <Label htmlFor="level">Language Level</Label>
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
                         <Label htmlFor="grammar-type">Exercise Type</Label>
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

            <div className="min-h-[200px] p-4 rounded-lg bg-background border border-border flex items-center justify-center text-center">
                {isLoading ? (
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-3/4 mx-auto" />
                        <Skeleton className="h-4 w-full mx-auto" />
                        <Skeleton className="h-4 w-1/2 mx-auto" />
                    </div>
                ) : exercise ? (
                    <div className="text-left w-full space-y-4">
                        <p className="text-lg font-medium font-headline whitespace-pre-wrap">{exercise.isMcq ? exercise.question : exercise.prompt}</p>
                        {exercise.isMcq && exercise.options && (
                             <RadioGroup value={userAnswer} onValueChange={setUserAnswer} className="space-y-2 pt-2" disabled={showResult}>
                                {exercise.options.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option.id} id={option.id} />
                                        <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                                    </div>
                                ))}
                             </RadioGroup>
                        )}
                        {!exercise.isMcq && (
                             <Input 
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Your answer..."
                                disabled={showResult}
                            />
                        )}
                    </div>
                ) : (
                    <p className="text-muted-foreground">Select your options and click "New Challenge" to begin.</p>
                )}
            </div>

            {showResult && exercise && (exercise.isMcq) && (
                <div className={`p-4 rounded-lg flex items-center gap-3 border ${isCorrect ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-destructive border-destructive/20'}`}>
                    {isCorrect ? <CheckCircle className="h-5 w-5"/> : <XCircle className="h-5 w-5"/>}
                    <p className="font-medium">
                        {isCorrect ? "Correct! Well done." : `Not quite. The correct answer is: ${exercise.answer}`}
                    </p>
                </div>
            )}
             {showResult && activity === 'reading' && !exercise?.isMcq && (
                isChecking ? (
                    <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-1/4 mx-auto" />
                        <Skeleton className="h-4 w-1/2 mx-auto" />
                    </div>
                ) : readingFeedback && (
                    <div className={`p-4 rounded-lg flex items-start gap-3 border ${readingFeedback.isCorrect ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-destructive border-destructive/20'}`}>
                        {readingFeedback.isCorrect ? <CheckCircle className="h-5 w-5 mt-1"/> : <XCircle className="h-5 w-5 mt-1"/>}
                        <p className="font-medium">
                            {readingFeedback.feedback}
                        </p>
                    </div>
                )
            )}
            {showResult && activity === 'grammar' && !exercise?.isMcq && (
                 <div className={`p-4 rounded-lg flex items-center gap-3 border ${isCorrect ? 'bg-primary/10 text-primary border-primary/20' : 'bg-destructive/10 text-destructive border-destructive/20'}`}>
                    {isCorrect ? <CheckCircle className="h-5 w-5"/> : <XCircle className="h-5 w-5"/>}
                    <p className="font-medium">
                        {isCorrect ? "Correct! Well done." : `Not quite. The correct answer is: ${exercise.answer}`}
                    </p>
                </div>
            )}
        </CardContent>
        <CardFooter className="flex flex-col-reverse sm:flex-row justify-between gap-4 px-4 sm:px-6 pb-6">
          <Button 
            onClick={handleCheckAnswer} 
            disabled={!userAnswer || showResult || isLoading || isChecking}
            className="w-full sm:w-auto"
            variant="outline"
          >
            {isChecking ? 'Checking...' : 'Check Answer'}
          </Button>
          <Button onClick={handleGenerate} disabled={isLoading || isChecking} className="w-full sm:w-auto">
            {isLoading ? "Generating..." : "New Challenge"}
          </Button>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
