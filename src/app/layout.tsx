import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Toaster } from 'sonner';
import SmoothScroll from '@/components/providers/SmoothScroll';

export const metadata: Metadata = {
  title: 'Ganesh Yandigeri — Python & AI Systems Engineer',
  description:
    'Python and AI systems engineer building low-latency matching engines, cgroup code sandboxes, and multimodal RAG architectures.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'LLMs',
    'Python',
    'FastAPI',
    'RAG',
    'ChromaDB',
    'Low-Latency',
    'Docker',
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
      'Python and AI systems engineer building low-latency matching engines, cgroup code sandboxes, and multimodal RAG architectures.',
    siteName: 'Ganesh Yandigeri',
    images: [
      {
        url: '/images/portrait.png',
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
      'Python and AI systems engineer building low-latency matching engines, cgroup code sandboxes, and multimodal RAG architectures.',
    creator: '@Ganesh821060',
    images: ['/images/portrait.png'],
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
  themeColor: '#0b0d14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-canvas text-primary font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#11141c',
              border: '1px solid rgba(238, 240, 245, 0.12)',
              color: '#eef0f5',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              borderRadius: '10px',
            },
          }}
        />
      </body>
    </html>
  );
}
