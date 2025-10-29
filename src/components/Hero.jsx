import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[680px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl px-6 py-20 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs sm:text-sm font-medium backdrop-blur">
          Bengaluru-born • AI-first Digital Agency
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          Digital Anency
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Tagline: Build, launch, and grow your brand with an AI partner that thinks like a strategist and ships like a team.
        </p>
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
          Elevator pitch: Digital Anency is a full‑service, AI‑powered marketing platform from Bengaluru that lets businesses chat their way to outcomes—run ad campaigns, audit SEO, design and deploy websites, generate content, and track performance in real time. One interface. Measurable results.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 text-sm sm:text-base font-medium transition-colors">
            <Rocket className="h-4 w-4" />
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm sm:text-base font-medium transition-colors">
            <MessageCircle className="h-4 w-4" />
            Explore Capabilities
          </a>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,114,255,0.25),transparent_60%)]" />
      </div>
    </section>
  );
};

export default Hero;
