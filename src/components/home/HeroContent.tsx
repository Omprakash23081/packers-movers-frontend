'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Truck, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 relative z-20 -mt-10 sm:-mt-16"
    >

      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-sm font-bold text-primary w-fit shadow-sm backdrop-blur-md uppercase tracking-widest">
        <Star size={14} className="mr-1.5 sm:mr-2 fill-primary" aria-hidden="true" />
        #1 IBA-Approved Packers and Movers in Nagpur
      </div>

      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-tight relative z-10 text-white">
          Expert & Licensed Packers and Movers in <span className="text-primary">Nagpur</span>
        </h1>
        {/* Moving Truck Animation - Optimized to run once for performance */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "60%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, ease: "linear", repeat: 1 }}
          className="absolute -top-12 left-0 text-primary/10 z-0"
        >
          <Truck size={120} aria-hidden="true" />
        </motion.div>
      </div>

      <p className="text-lg md:text-xl text-white/70 max-w-lg text-balance leading-relaxed font-medium">
        IBA-Approved and ISO 9001:2015 Certified. We provide 100% safe home shifting and car transport in Nagpur with 15+ years of trusted excellence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" variant="accent" className="w-full rounded-full gap-2 text-md h-14 px-8 font-semibold">
          <a href="#calculator">
            Calculate Shifting Cost <Truck size={18} />
          </a>
        </Button>
        <a href="tel:+917387661300">
          <Button size="lg" variant="outline" className="w-full rounded-full h-14 px-8 text-md border-white/20 bg-white/10 backdrop-blur-md font-bold text-white hover:bg-white/20 transition-all">
            Call Now: +91 7387661300
          </Button>
        </a>
      </div>

      {/* Hero Features Area */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-white/10">
        {[
          "10,000+ Successful Moves",
          "4.9/5 Average Rating",
          "100% Safe & Insured Transit",
          "On-Time Delivery Guarantee"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm font-bold text-white/80">
            <CheckCircle size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Trust Signals Avatar Stack */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="flex -space-x-3 sm:-space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#12141a] bg-[#1a1d25] flex items-center justify-center overflow-hidden shadow-xl ring-1 ring-white/5">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                <Image src="/images/avatar-placeholder.svg" alt="" width={48} height={48} className="opacity-60 scale-90" aria-hidden="true" />
              </div>
            </div>
          ))}
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#12141a] bg-accent text-white flex items-center justify-center text-[8px] sm:text-[10px] font-black shadow-xl ring-1 ring-white/5 z-10 uppercase" aria-label="More than 10,000 customers">
            10k+
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex text-yellow-500 gap-1 mb-1" aria-label="5 star rating">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" aria-hidden="true" />)}
          </div>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white/50 leading-none">Trusted by 10,000+ Customers</span>
        </div>
      </div>
    </motion.div>
  );
}
