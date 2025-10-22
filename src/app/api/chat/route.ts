import { openai } from '@/echo';
import { convertToModelMessages, streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages: convertToModelMessages(messages),
    system: 'You are a helpful writing assistant. Help users with creative writing, storytelling, character development, plot structure, and any writing-related questions. Be encouraging and provide constructive feedback.',
  });

  return result.toUIMessageStreamResponse();
}
