
'use client';

import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle2, XCircle, Award, Loader2 } from 'lucide-react';
import { Exercise, ReadingFeedback, Activity } from './DeutschDrillClient';

interface ExerciseAreaProps {
  isLoading: boolean;
  exercise: Exercise;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
  showResult: boolean;
  isCorrect: boolean | null;
  streak: number;
  readingFeedback: ReadingFeedback;
  activity: Activity;
  started: boolean;
}

export default function ExerciseArea({
  isLoading,
  exercise,
  userAnswer,
  setUserAnswer,
  showResult,
  isCorrect,
  streak,
  readingFeedback,
  activity,
  started,
}: ExerciseAreaProps) {
  if (isLoading || (!exercise && started)) {
    return (
      <div className="space-y-4 min-h-[200px] flex flex-col items-center justify-center text-center text-muted-foreground py-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p>Loading the next challenge...</p>
      </div>
    );
  }
  
  if (!exercise) {
    return (
      <div className="text-center text-muted-foreground py-10 min-h-[200px] flex items-center justify-center">
        <p>Select your level and start a new challenge!</p>
      </div>
    );
  }

  const bonus = streak > 0 ? streak * 5 : 0;

  return (
    <div className="space-y-4 min-h-[200px]">
      <div className="p-4 bg-primary/10 rounded-lg space-y-4">
        {activity === 'reading' && exercise.text && (
            <p className="text-lg font-serif leading-relaxed text-foreground/80 whitespace-pre-wrap">{exercise.text}</p>
        )}
        <p className="text-lg font-bold text-foreground/90 whitespace-pre-wrap">{exercise.question || exercise.prompt}</p>
      </div>

      {exercise.isMcq && exercise.options ? (
        <RadioGroup value={userAnswer} onValueChange={setUserAnswer} className="space-y-2">
          {exercise.options.map((option) => (
            <Label
              key={option.id}
              htmlFor={option.id}
              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                userAnswer === option.id
                  ? 'border-primary bg-primary/20'
                  : 'border-border bg-card hover:bg-primary/10'
              }`}
            >
              <RadioGroupItem value={option.id} id={option.id} className="h-6 w-6 mr-4" />
              <span className="text-base font-medium">{option.label}</span>
            </Label>
          ))}
        </RadioGroup>
      ) : (
        <Input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full text-lg p-6 rounded-full"
          disabled={showResult}
        />
      )}

      {showResult && isCorrect !== null && (
        <Alert
          variant={isCorrect ? 'default' : 'destructive'}
          className={`border-2 ${
            isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'
          }`}
        >
          {isCorrect ? <CheckCircle2 className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
          <AlertTitle className={`font-bold text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </AlertTitle>
          <AlertDescription className="text-base">
            {activity === 'reading' && readingFeedback ? (
                readingFeedback.feedback
            ) : isCorrect ? (
              <div className="flex items-center gap-2">
                <span>You earned 10 EXP!</span>
                {bonus > 0 && <span className="flex items-center gap-1"><Award className="h-4 w-4 text-yellow-500" /> +{bonus} streak bonus!</span>}
              </div>
            ) : (
              `The correct answer is: ${exercise.answer}`
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
