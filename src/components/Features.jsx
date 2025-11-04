import { Laptop, Sparkles, Shield, Sliders } from 'lucide-react';

const features = [
  {
    icon: Laptop,
    title: '3D Laptop Hero',
    desc: 'A fully interactive Spline scene that invites users to pan, rotate, and zoom.',
  },
  {
    icon: Sparkles,
    title: 'Polished Aesthetics',
    desc: 'Soft gradients, glassy surfaces, and crisp type for a premium, modern feel.',
  },
  {
    icon: Shield,
    title: 'Smooth Performance',
    desc: 'Optimized layout and interactions for a fast, delightful experience.',
  },
  {
    icon: Sliders,
    title: 'Easy Customization',
    desc: 'Tweak colors, copy, and sections effortlessly to match your brand.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#07080d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why you’ll love it</h2>
          <p className="mt-3 text-white/70">
            Built with a playful, tech-forward vibe—perfect for portfolios and product landing pages.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Icon size={18} className="text-cyan-300" />
                </span>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
