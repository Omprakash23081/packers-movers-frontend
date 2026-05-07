'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Truck, Star, CheckCircle, MessageCircle, PhoneCall, ShieldCheck, Users, MapPin, Award } from 'lucide-react';
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
        Top-Rated Packers & Movers Across India
      </div>

      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-tight relative z-10 text-white">
          Safe & Hassle-Free <span className="text-primary">Shifting Services</span>
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
        Trusted by Hundreds of Families. Home Shifting, Office Relocation, Car Transport & Warehousing with Professional Packing and Secure Delivery.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mt-4">
        <a href="https://wa.me/917387661300?text=Hi%2C%20I%20am%20looking%20for%20a%20packers%20and%20movers%20quotation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
          <Button size="lg" className="w-full rounded-full gap-2 text-md h-14 px-6 font-bold bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg shadow-[#25D366]/20 transition-all border border-[#25D366]/50">
            <MessageCircle size={20} className="fill-current" />
            WhatsApp Quote
          </Button>
        </a>
        <a href="tel:+917387661300" className="w-full sm:w-1/2">
          <Button size="lg" variant="outline" className="w-full rounded-full gap-2 h-14 px-6 text-md border-white/30 bg-white/10 backdrop-blur-md font-bold text-white hover:bg-white/20 hover:border-white/50 transition-all shadow-xl">
             <PhoneCall size={18} />
             Call Now
          </Button>
        </a>
      </div>

      {/* Trust Signals Area */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-6 pt-6 border-t border-white/10 mt-2">
        {[
          { text: "Damage Protection", icon: ShieldCheck, color: "text-blue-400" },
          { text: "GST Verified", icon: Award, color: "text-emerald-400" },
          { text: "GPS Tracking", icon: MapPin, color: "text-rose-400" },
          { text: "24x7 Support", icon: PhoneCall, color: "text-amber-400" }
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white/90">
            <div className={`p-1.5 rounded-md bg-white/5 border border-white/10 ${feature.color}`}>
              <feature.icon size={16} className="shrink-0" aria-hidden="true" />
            </div>
            <span>{feature.text}</span>
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
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#12141a] bg-accent text-white flex items-center justify-center text-[8px] sm:text-[10px] font-black shadow-xl ring-1 ring-white/5 z-10 uppercase" aria-label="More than 500 customers">
            500+
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex text-yellow-500 gap-1 mb-1" aria-label="5 star rating">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" aria-hidden="true" />)}
          </div>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white/50 leading-none">Trusted by 500+ Families</span>
        </div>
      </div>
    </motion.div>
  );
}
