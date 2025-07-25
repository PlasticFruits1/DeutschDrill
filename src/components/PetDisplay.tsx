'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PetDisplayProps {
  petSrc: string;
  petHint: string;
  level: number;
}

export default function PetDisplay({ petSrc, petHint, level }: PetDisplayProps) {
  return (
    <Card className="w-full h-full flex flex-col justify-between p-4 bg-card/80 backdrop-blur-sm border-primary/20 rounded-xl shadow-lg">
      <div className="flex justify-center items-center text-lg font-bold">
        <Badge className="text-base px-3 py-1 bg-primary/20 text-primary-foreground rounded-md w-full flex justify-center">Your Companion</Badge>
      </div>
      <CardContent className="flex-1 flex items-center justify-center p-0">
        <Image
          src={petSrc}
          alt="Player's pet"
          width={150}
          height={150}
          data-ai-hint={petHint}
          className="pixelated object-contain"
        />
      </CardContent>
      <div className="text-center text-sm text-muted-foreground">Level {level} Pet</div>
    </Card>
  );
}
