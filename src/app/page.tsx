import { Header } from '@/app/_components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <section className="flex min-h-[80vh] flex-col items-center justify-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Alexander Payiavlas
          </h1>
          <p className="text-xl font-medium text-muted-foreground">
            Writer and Poet
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="/about" 
              className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="/portfolio" 
              className="rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-medium text-foreground transition-all hover:bg-primary/10"
            >
              View Portfolio
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
