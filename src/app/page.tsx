import DeutschDrillClient from '@/components/DeutschDrillClient';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-8 gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <BrainCircuit className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-headline text-center text-foreground/90">
              DeutschDrill
            </h1>
        </div>
        <DeutschDrillClient />
      </div>
    </main>
  );
}
