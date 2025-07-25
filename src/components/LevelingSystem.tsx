'use client';

import { Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface LevelingSystemProps {
  playerLevel: number;
  exp: number;
  streak: number;
}

const levelExpRequirements = [0, 100, 250, 500, 1000];

export default function LevelingSystem({ playerLevel, exp, streak }: LevelingSystemProps) {
    const currentLevelExp = levelExpRequirements[playerLevel - 1] ?? 0;
    const nextLevelExp = levelExpRequirements[playerLevel] ?? levelExpRequirements[levelExpRequirements.length-1];

    const expInCurrentLevel = exp - currentLevelExp;
    const expForNextLevel = nextLevelExp - currentLevelExp;
    
    const progressPercentage = expForNextLevel > 0 ? (expInCurrentLevel / expForNextLevel) * 100 : 100;

    return (
        <Card className="w-full h-full flex flex-col justify-between p-4 bg-card/80 backdrop-blur-sm border-primary/20 rounded-xl shadow-lg">
            <div className="flex justify-between items-center text-lg font-bold">
                <Badge className="text-base px-3 py-1 bg-primary text-primary-foreground">Level {playerLevel}</Badge>
                <div className="flex items-center gap-2">
                   <Flame className={`h-6 w-6 ${streak > 0 ? 'text-orange-500' : 'text-muted'}`} />
                   <span className="font-bold text-xl">{streak}</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-end gap-2 py-4">
                <div className="w-4 h-full bg-secondary rounded-full flex flex-col-reverse overflow-hidden">
                    <div 
                        className="bg-primary transition-all duration-500"
                        style={{ height: `${progressPercentage}%`}}
                    ></div>
                </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">{exp} / {nextLevelExp} EXP</div>
        </Card>
    )
}
