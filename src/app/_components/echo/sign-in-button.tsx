'use client';

import { EchoButton } from '@/components/echo-button';

export default function SignInButton() {
  return (
    <EchoButton
      mode="signin"
      className="w-full rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground shadow-md transition-colors hover:bg-accent/90"
    >
      Sign In to Continue
    </EchoButton>
  );
}
