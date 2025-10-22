'use client';

import Chat from '@/app/_components/chat';
import { useEcho } from '@merit-systems/echo-next-sdk/client';
import { PenLine, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WritingAssistantPage() {
  const { user, signIn } = useEcho();

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-lg space-y-8 text-center">
          <div className="space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
              <PenLine className="h-10 w-10 text-primary-foreground" strokeWidth={2} />
            </div>

            <div className="space-y-3">
              <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-4xl text-transparent tracking-tight md:text-5xl">
                AP's Writing Assistant
              </h1>
              <p className="mx-auto max-w-md text-base text-muted-foreground leading-relaxed">
                Your intelligent companion for creative writing, powered by advanced AI
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-muted-foreground text-xs">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI-Powered</span>
              </div>
              <span>•</span>
              <span>Secure & Private</span>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Button onClick={() => signIn()}>Sign In</Button>

            <p className="text-muted-foreground text-xs">
              Sign in to start your creative writing journey
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <Chat />;
}
