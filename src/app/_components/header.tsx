'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { HamburgerMenu } from '@/app/_components/menu';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';
  const logoSrc = currentTheme === 'dark' ? '/AP favicon dark.png' : '/AP favicon light.png';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold text-foreground transition-colors hover:text-primary">
          <Image
            src={logoSrc}
            alt="Alexander Payiavlas Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          Alexander Payiavlas
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
