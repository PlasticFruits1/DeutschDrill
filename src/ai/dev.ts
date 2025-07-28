import { config } from 'dotenv';
config();

// Not all flows are used when using hardcoded exercises, but we keep them for potential future use.
import '@/ai/flows/generate-prompt.ts';
import '@/ai/flows/generate-exercise.ts';
