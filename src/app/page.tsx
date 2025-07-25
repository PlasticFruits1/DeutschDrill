import DeutschDrillClient from '@/components/DeutschDrillClient';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6 gap-3">
            <BrainCircuit className="h-10 w-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">
              DeutschDrill
            </h1>
        </div>
        <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
          Sharpen your German skills with AI-powered grammar and reading exercises. Select your level and start drilling!
        </p>
        <DeutschDrillClient />
      </div>
    </main>
  );
}
