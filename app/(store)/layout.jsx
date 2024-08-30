"use client"
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isMapPage = pathname === '/'; // Home 

  return (
    <html lang="en">
      <body>
        {!isMapPage && <Header />}
        {children}
        {!isMapPage && <Footer />}
      </body>
    </html>
  );
}
