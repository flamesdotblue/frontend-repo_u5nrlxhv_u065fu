import React from 'react';
import { MessageCircle, Rocket, BarChart3, Globe } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Chat to Brief',
    desc: 'Tell the AI your goal: “Launch a lead-gen campaign for Bengaluru SaaS founders.” It clarifies budget, audience, and timeline.'
  },
  {
    icon: Rocket,
    title: 'Plan to Launch',
    desc: 'AI drafts media plans, SEO audits, content calendars, and site structures. Approve in chat and auto-deploy to selected platforms.'
  },
  {
    icon: Globe,
    title: 'Build & Ship',
    desc: 'Generate copy, creatives, landing pages, and pixel tracking. Integrates with Google, Meta, LinkedIn, and modern hosts.'
  },
  {
    icon: BarChart3,
    title: 'Track & Optimize',
    desc: 'Unified dashboard monitors spend, CPA, rankings, and engagement. AI suggests experiments and automates daily optimizations.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">How users interact with Digital Anency</h2>
        <p className="mt-3 text-white/70 text-center max-w-3xl mx-auto">
          A simple, guided flow from conversation to measurable outcomes.
        </p>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-indigo-300 text-sm font-medium">Step {idx + 1}</div>
                  <h3 className="text-white font-medium mt-1">{title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
