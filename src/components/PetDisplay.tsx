
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';

interface PetDisplayProps {
  petArt: string;
  petName: string;
  level: number;
  streak: number;
}

export default function PetDisplay({ petArt, petName, level, streak }: PetDisplayProps) {
  return (
    <Card className="w-full h-full flex flex-col justify-between p-4 bg-card/80 backdrop-blur-sm border-primary/20 rounded-xl shadow-lg">
      <div className="flex justify-between items-center text-lg font-bold">
        <Badge className="text-base px-3 py-1 bg-primary/20 text-primary-foreground rounded-md flex-1 flex justify-center">{petName}</Badge>
        <div className="flex items-center gap-2 pl-2">
            <Flame className={`h-6 w-6 ${streak > 0 ? 'text-orange-500' : 'text-muted'}`} />
            <span className="font-bold text-xl">{streak}</span>
        </div>
      </div>
      <CardContent className="flex-1 flex items-center justify-center p-0 min-h-[120px]">
        <pre className="text-center text-muted-foreground text-xs leading-tight">
          {petArt}
        </pre>
      </CardContent>
      <div className="text-center text-sm text-muted-foreground">Level {level} Pet</div>
    </Card>
  );
}
