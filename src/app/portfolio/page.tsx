import { Header } from '@/app/_components/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Portfolio
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of written works and poetry
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 1</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 2</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 3</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 4</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 5</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-md transition-all hover:border-primary hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Work Title 6</CardTitle>
                <CardDescription className="text-muted-foreground">Category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">
                  Description coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

