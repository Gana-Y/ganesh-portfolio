import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Ganesh Y — AI Engineer',
  description:
    'Aspiring AI/ML Engineer building with Python, LLMs, Deep Learning & Machine Learning. Passionate about healthcare and fintech AI applications.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'LLMs',
    'Python',
    'PyTorch',
    'TensorFlow',
    'LangChain',
    'Healthcare AI',
    'FinTech AI',
    'Ganesh Yandigeri',
  ],
  authors: [{ name: 'Ganesh Y', url: 'https://github.com/Gana-Y' }],
  creator: 'Ganesh Y',
  metadataBase: new URL('https://ganesh-y.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ganesh-y.vercel.app',
    title: 'Ganesh Y — AI Engineer',
    description:
      'Aspiring AI/ML Engineer building next-generation intelligent systems in healthcare and finance.',
    siteName: 'Ganesh Y Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ganesh Y — AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganesh Y — AI Engineer',
    description:
      'Aspiring AI/ML Engineer building next-generation intelligent systems in healthcare and finance.',
    creator: '@Ganesh821060',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030308',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-abyss text-text-primary font-body antialiased overflow-x-hidden">
        <div className="noise-overlay">
          {children}
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(18, 18, 31, 0.9)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              color: '#f8f7ff',
              backdropFilter: 'blur(16px)',
            },
          }}
        />
      </body>
    </html>
  );
}
