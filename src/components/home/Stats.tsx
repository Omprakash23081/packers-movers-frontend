'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { TiltCard } from '@/components/ui/TiltCard';

const stats = [
  { value: 500, suffix: '+', label: 'Successful Moves' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
  { value: 100, suffix: '+', label: 'Positive Reviews' },
  { value: 24, suffix: '/7', label: 'Customer Support' },
];

function Counter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(from, { mass: 1, stiffness: 75, damping: 20 });
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );
  
  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-primary text-white border-y border-black/10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
      
      <div className="w-full px-0 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <TiltCard tiltMax={15} tiltSpeed={400} className="w-full h-full flex flex-col space-y-2 md:space-y-3 items-center justify-center p-4 md:p-6 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 shadow-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-md flex items-baseline justify-center">
                  <Counter from={0} to={stat.value} />
                  <span className="text-accent ml-0.5 text-2xl sm:text-3xl md:text-5xl font-extrabold translate-y-[-0.1em]">{stat.suffix}</span>
                </div>
                <div className="text-[10px] sm:text-sm md:text-base font-bold text-white/80 uppercase tracking-widest mt-1 md:mt-2 px-2 md:px-4 text-center break-words">
                  {stat.label}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
