import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VibeBiz',
  description: 'No-Code App Builder khusus UMKM Indonesia',
};

// Vibe: tradisional Jawa
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
