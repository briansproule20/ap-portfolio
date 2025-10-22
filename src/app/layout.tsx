import type { Metadata } from 'next';
import { Crimson_Pro, EB_Garamond } from 'next/font/google';
import { Providers } from '@/providers';
import './globals.css';

const crimsonPro = Crimson_Pro({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const ebGaramond = EB_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Alexander Payiavlas - Portfolio",
  description: "Alexander Payiavlas - Writer and Poet",
  icons: {
    icon: [
      {
        url: "/AP favicon light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/AP favicon dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Alexander Payiavlas - Portfolio",
    description: "Alexander Payiavlas - Writer and Poet",
    images: ["/AP favicon light.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${crimsonPro.variable} ${ebGaramond.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
