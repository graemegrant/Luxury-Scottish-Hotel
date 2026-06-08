import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { SCHEMA_BASE } from '@/lib/seo';
import { PageFade } from '@/components/Motion';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://craigmorehouse.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Craigmore House | Luxury Highland Hotel, Perthshire',
    template: '%s | Craigmore House',
  },
  description: 'Craigmore House is a 12-room luxury highland retreat in the heart of Perthshire, Scotland. Fly fishing, field sports, seasonal dining. Best rate guaranteed on direct bookings.',
  keywords: ['luxury hotel perthshire', 'highland hotel scotland', 'boutique hotel perthshire', 'craigmore house', 'scottish country house hotel', 'perthshire hotel'],
  authors: [{ name: 'Craigmore House' }],
  creator: 'Craigmore House',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'Craigmore House',
    images: [{ url: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=1200&q=80', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <Script
          id="schema-lodging"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BASE.lodgingBusiness) }}
        />
        <Navbar />
        <main className="min-h-screen">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
