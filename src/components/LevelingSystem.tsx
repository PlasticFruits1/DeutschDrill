
'use client';

import { Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export interface LevelingSystemProps {
  playerLevel: number;
  exp: number;
  streak: number;
}

const levelExpRequirements = [0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500, 10000];

function getLevelFromExp(exp: number) {
    for (let i = levelExpRequirements.length - 1; i >= 0; i--) {
        if (exp >= levelExpRequirements[i]) {
            return i + 1;
        }
    }
    return 1;
}

export default function LevelingSystem({ playerLevel, exp, streak }: LevelingSystemProps) {
    const currentLevelExp = levelExpRequirements[playerLevel - 1] ?? 0;
    const nextLevelExp = levelExpRequirements[playerLevel] ?? levelExpRequirements[levelExpRequirements.length-1];

    const expInCurrentLevel = exp - currentLevelExp;
    const expForNextLevel = nextLevelExp - currentLevelExp;
    
    const progressPercentage = expForNextLevel > 0 ? (expInCurrentLevel / expForNextLevel) * 100 : 100;

    return (
        <Card className="w-full flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 bg-card/80 backdrop-blur-sm border-primary/20 rounded-xl shadow-lg gap-4">
            <div className="flex items-center gap-3">
                <Badge className="text-base px-3 py-1 bg-primary text-primary-foreground rounded-md w-24 flex justify-center">Level {playerLevel}</Badge>
            </div>
            <div className="flex-1 w-full sm:w-auto flex items-center gap-4">
                <div className="w-full h-4 bg-secondary rounded-full overflow-hidden flex-1">
                    <div 
                        className="bg-primary h-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%`}}
                    ></div>
                </div>
                 <div className="text-center text-sm font-bold text-muted-foreground whitespace-nowrap">{exp} / {nextLevelExp} EXP</div>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-amber-500">
                <Flame className="h-6 w-6" />
                <span>{streak}</span>
            </div>
        </Card>
    )
}
