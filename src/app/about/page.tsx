import { Header } from '@/app/_components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              About Me
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Writer and Poet
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <Card className="border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Content coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Content coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Content coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

