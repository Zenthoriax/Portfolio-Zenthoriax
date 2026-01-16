import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Background } from '@/components/ui/Background';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zenthoriax | Jeevananthan S',
  description: 'AI/ML Student & Engineering Portfolio. Exploring applied machine learning and system design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
