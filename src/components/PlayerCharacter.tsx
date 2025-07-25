'use client';

import Image from 'next/image';

interface PlayerCharacterProps {
  characterSrc: string;
  characterHint: string;
}

export default function PlayerCharacter({ characterSrc, characterHint }: PlayerCharacterProps) {
  return (
    <div className="fixed top-1/2 left-0 w-full h-0 pointer-events-none z-50">
      <div className="absolute bottom-0 animate-walk">
        <Image 
          src={characterSrc}
          alt="Player character"
          width={50}
          height={50}
          data-ai-hint={characterHint}
          className="pixelated"
        />
      </div>
    </div>
  );
}
