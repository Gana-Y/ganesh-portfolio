import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Toaster } from 'sonner';
import SmoothScroll from '@/components/providers/SmoothScroll';

export const metadata: Metadata = {
  title: 'Ganesh Yandigeri — Python & AI Systems Engineer',
  description:
    'Python & AI Systems Engineer building low-latency matching engines and multimodal RAG architectures. Deep space edition.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'LLMs',
    'Python',
    'FastAPI',
    'RAG',
    'ChromaDB',
    'Low-Latency',
    'Ganesh Yandigeri',
  ],
  authors: [{ name: 'Ganesh Yandigeri', url: 'https://github.com/Gana-Y' }],
  creator: 'Ganesh Yandigeri',
  metadataBase: new URL('https://ganesh-portfolio-silk-five.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ganesh-portfolio-silk-five.vercel.app',
    title: 'Ganesh Yandigeri — Python & AI Systems Engineer',
    description:
      'Python & AI Systems Engineer building low-latency matching engines and multimodal RAG architectures.',
    siteName: 'Ganesh Yandigeri Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 800,
        height: 800,
        alt: 'Ganesh Yandigeri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganesh Yandigeri — Python & AI Systems Engineer',
    description:
      'Python & AI Systems Engineer building low-latency matching engines and multimodal RAG architectures.',
    creator: '@Ganesh821060',
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
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
  themeColor: '#020205',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-void text-starlight font-body antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(7, 11, 22, 0.9)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              color: '#f0f6fc',
              backdropFilter: 'blur(16px)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
