import { motion } from 'framer-motion';

const items = [
  {
    title: 'Portfolio Ready',
    desc: 'Use the 3D laptop to spotlight your work, apps, or product shots.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Responsive Design',
    desc: 'Looks great on desktops, tablets, and phones with fluid layout.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Subtle Motion',
    desc: 'Tasteful animations enhance focus without getting in the way.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0a0b10] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Showcase</h2>
          <p className="mt-3 text-white/70">A curated selection of visuals to complement the 3D hero.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
