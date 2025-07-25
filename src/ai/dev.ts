import { config } from 'dotenv';
config();

import '@/ai/flows/generate-prompt.ts';
import '@/ai/flows/generate-exercise.ts';
import '@/ai/flows/evaluate-response.ts';
