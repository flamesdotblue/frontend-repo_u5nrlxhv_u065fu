import React from 'react';
import { Zap, Building2, Users, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '₹6,999/mo',
    badge: 'For early-stage teams',
    features: [
      '2 workspaces • 3 users',
      'AI chat assistant + prompts',
      'Basic SEO audit & content ideas',
      '1-click Google/Meta campaign launch',
      'Unified reporting (lite)'
    ]
  },
  {
    name: 'Growth',
    price: '₹24,999/mo',
    badge: 'Most popular',
    featured: true,
    features: [
      'Unlimited workspaces • 10 users',
      'Advanced SEO & keyword clusters',
      'Multi-channel ads + experiments',
      'Content calendar + brand voice',
      'Attribution & cohort reporting'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    badge: 'For scale-ups & enterprises',
    features: [
      'SSO, roles & approvals',
      'Brand guardrails & compliance',
      'Custom integrations & SLAs',
      'On-prem or VPC deployment',
      'Dedicated success manager'
    ]
  }
];

const BrandingAndVision = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">Business model, branding, and vision</h2>
        <p className="mt-3 text-white/70 text-center max-w-3xl mx-auto">
          Flexible pricing powered by AI credits, modern Bengaluru aesthetics, and a long-term vision for autonomous growth teams.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-xl border bg-white/5 p-6 ${tier.featured ? 'border-indigo-400/40' : 'border-white/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{tier.name}</h3>
                {tier.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/30 px-2 py-0.5 text-xs">
                    <Star className="h-3 w-3" /> {tier.badge}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 text-white/70 border border-white/10 px-2 py-0.5 text-xs">
                    {tier.badge}
                  </span>
                )}
              </div>
              <div className="mt-3 text-2xl text-white">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Zap className="h-4 w-4 text-indigo-300 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium transition-colors ${tier.featured ? 'bg-indigo-500 hover:bg-indigo-400 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium flex items-center gap-2"><Building2 className="h-5 w-5 text-indigo-300" /> Visual branding suggestions</h3>
            <ul className="mt-3 text-sm text-white/80 space-y-2 list-disc list-inside">
              <li>Palette: Deep slate (#0B1220), Indigo (#6366F1), Electric Blue (#22D3EE), and Warm Ember (#F59E0B) accents.</li>
              <li>Typography: Inter for UI, Manrope for headings. Bold weights for headlines, generous tracking for a modern tech feel.</li>
              <li>Tone: Confident, precise, and optimistic—rooted in Bengaluru’s product craftsmanship and global ambition.</li>
              <li>Imagery: Futuristic gradients and minimal line icons; use the hero’s Spline aura to reinforce the AI core.</li>
              <li>UI: Rounded radii, glass surfaces, soft glows, and dark mode by default for focus and polish.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-medium flex items-center gap-2"><Users className="h-5 w-5 text-indigo-300" /> Vision for the future</h3>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Digital Anency will evolve into an autonomous growth companion that orchestrates channels, budgets, and creatives with minimal human effort. The platform will learn from each campaign, forecast outcomes, and propose experiments—moving from decision support to decision automation while preserving brand safety. From Bengaluru to the world, we’re building the operating system for modern marketing teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingAndVision;
