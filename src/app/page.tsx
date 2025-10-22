import { Header } from '@/app/_components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Hero */}
        <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Alex Payiavlas
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Developer & Designer
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/writing-assistant">Writing Assistant</Link>
            </Button>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-4 py-16">
          <h2 className="text-center text-3xl font-bold">About Me</h2>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground">
            I&apos;m a passionate software developer with a focus on creating
            beautiful, functional applications. I love working with modern
            technologies and bringing ideas to life through code.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-8 py-16">
          <h2 className="text-center text-3xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map(
              (skill) => (
                <Card key={skill}>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8 py-16">
          <h2 className="text-center text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    A brief description of the project and its key features.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Ready to work together? Let&apos;s discuss your next project.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <a href="mailto:alex@example.com">Send Email</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
