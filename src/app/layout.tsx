import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mohammedfareed.dev'),
  title: 'Mohammed Fareed — Full-Stack Developer & Digital Builder',
  description:
    'Mohammed Fareed is a Ghanaian full-stack software engineer and digital builder crafting high-performance web applications, scalable digital products, and robust systems.',
  keywords: [
    'Mohammed Fareed',
    'Full Stack Developer',
    'Software Engineer',
    'Ghana Developer',
    'Tamale Developer',
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'NorthMarket',
    'AfriCart',
  ],
  authors: [{ name: 'Mohammed Fareed' }],
  creator: 'Mohammed Fareed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammedfareed.dev',
    title: 'Mohammed Fareed — Full-Stack Developer & Digital Builder',
    description:
      'Crafting high-performance digital experiences, scalable systems, and localized commerce platforms.',
    siteName: 'Mohammed Fareed Portfolio',
    images: [
      {
        url: '/images/Fareed.png',
        width: 1200,
        height: 630,
        alt: 'Mohammed Fareed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Fareed — Full-Stack Developer & Digital Builder',
    description:
      'Crafting high-performance digital experiences, scalable systems, and localized commerce platforms.',
    images: ['/images/Fareed.png'],
    creator: '@mohammedfareed',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@600;700&family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohammed Fareed',
              jobTitle: 'Full-Stack Software Engineer',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'Ghana',
              },
              url: 'https://mohammedfareed.dev',
              sameAs: [
                'https://github.com/mohammedfareed',
                'https://linkedin.com/in/mohammedfareed',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-black">
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="fixed inset-0 bg-radial-fade pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
