import React from 'react';
import { Rocket, Search, Globe, PenTool, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Ad Campaigns',
    desc: 'Plan, generate creatives, set budgets, and deploy to Google, Meta, and LinkedIn—guided by AI prompts tuned for conversion.'
  },
  {
    icon: Search,
    title: 'SEO Audits & Keywords',
    desc: 'Automated technical audits, schema suggestions, and keyword clusters mapped to search intent and difficulty.'
  },
  {
    icon: Globe,
    title: 'Web & App Development',
    desc: 'From landing pages to product sites—AI scaffolds UX, design tokens, and deploys to modern hosting with CI built-in.'
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    desc: 'On-brand blog calendars, social posts, and ad copy with tone controls. Ship faster with human-in-the-loop editing.'
  },
  {
    icon: BarChart3,
    title: 'Unified Analytics',
    desc: 'Connect ad platforms, web analytics, and socials into one dashboard. Track ROI with auto-generated insights.'
  },
  {
    icon: Shield,
    title: 'Governance & Safety',
    desc: 'Role-based approvals, brand guardrails, and data privacy by design. Enterprise-ready from day one.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">Key Features & Benefits</h2>
        <p className="mt-3 text-white/70 text-center max-w-3xl mx-auto">
          Everything you need to build, deploy, and grow—through a natural chat interface powered by AI.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-indigo-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
