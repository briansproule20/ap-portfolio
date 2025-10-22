import { Header } from '@/app/_components/header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Coming Soon
          </h1>
          <p className="max-w-md text-lg italic text-muted-foreground">
            Still crafting prose and verse
          </p>
          <Link 
            href="/" 
            className="mt-8 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}

