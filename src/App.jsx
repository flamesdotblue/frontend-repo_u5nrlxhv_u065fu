import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingAndBranding from './components/PricingAndBranding';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <PricingAndBranding />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Digital Anency • Built in Bengaluru, India • All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
