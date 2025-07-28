
'use client';

import { useState } from 'react';
import DeutschDrillClient from '@/components/DeutschDrillClient';
import LevelingSystem, { LevelingSystemProps } from '@/components/LevelingSystem';
import { BrainCircuit } from 'lucide-react';

export default function Home({
  params,
  searchParams,
}: {
  params: {};
  searchParams: {};
}) {
  const [progress, setProgress] = useState<LevelingSystemProps>({
    playerLevel: 1,
    exp: 0,
    streak: 0,
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-6 gap-2">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <BrainCircuit className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-center text-foreground/90">
                DeutschDrill
              </h1>
            </div>
            <p className="font-slogan text-lg font-semibold text-muted-foreground tracking-wide">
              "Aller Anfang ist schwer"
            </p>
        </div>
        <div className="mb-6">
          <LevelingSystem {...progress} />
        </div>
        <DeutschDrillClient onProgressChange={setProgress} />
      </div>
    </main>
  );
}
