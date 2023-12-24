'use client'
import { useState } from 'react';
import MapChart from '@/components/MapChart';
import Header from '../components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  const [regionSelected, setRegionSelected] = useState(false);

  const handleRegionSelect = () => {
    // Lógica para manejar la selección de la región
    setRegionSelected(true);
  };

  return (
    <html lang="en">
      <body>
        <Header />
        {!regionSelected ? (
          <MapChart onRegionSelect={handleRegionSelect} />
        ) : (
          children
        )}
        <Footer />
      </body>
    </html>
  );
}
