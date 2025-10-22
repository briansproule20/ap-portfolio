import { Header } from '@/app/_components/header';
import { EchoAccount } from '@/components/echo-account-next';
import { HamburgerMenu } from '@/app/_components/menu';
import { ThemeToggle } from '@/components/theme-toggle';

export default function WritingAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <header className="border-b border-border bg-card/80 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-foreground text-xl tracking-tight">
                AP's Writing Assistant
              </h1>
            </div>
            <nav className="flex items-center gap-3">
              <EchoAccount />
              <ThemeToggle />
              <HamburgerMenu />
            </nav>
          </div>
        </div>
      </header>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}
