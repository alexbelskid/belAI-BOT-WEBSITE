import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FomoSection } from './components/FomoSection';
import { LiveDemo } from './components/LiveDemo';
import { DigitalTwin } from './components/DigitalTwin';
import { Solutions } from './components/Solutions';
import { Calculator } from './components/Calculator';
import { Security } from './components/Security';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-space-indigo-950 text-lavender-grey-50 selection:bg-punch-red-500/30">
      <Header />
      <main className="flex flex-col gap-0">
        <Hero />
        <DigitalTwin />
        <LiveDemo />
        <Solutions />
        <FomoSection />
        <Calculator />
        <Security />
        <BeforeAfter />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}