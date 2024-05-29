import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Authentication Service Next JS',
  description: 'An auth service ready to be implemented in your app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={(roboto.className, 'bg-gray-700 text-green-500')}>
        {children}
      </body>
    </html>
  );
}
