import type { Metadata } from 'next';
import { Archivo, JetBrains_Mono, Public_Sans } from 'next/font/google';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SITE_NAME, SITE_URL } from '../lib/site';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-archivo', display: 'swap' });
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-public-sans', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable} ${jetbrains.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-orange-700 selection:text-white">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
