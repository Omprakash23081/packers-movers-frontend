'use client';
import { motion } from 'framer-motion';
import { ClipboardList, Package, Truck, Home, Sparkles } from 'lucide-react';

const STEPS = [
  {
    title: "Request a Free Quote",
    desc: "Share your moving details via our calculator or phone. Our experts provide a transparent, all-inclusive estimate within minutes.",
    icon: ClipboardList,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Scientific Packing",
    desc: "Our trained crew arrives with premium materials. We use 4-layer packing for fragile items and heavy-duty wraps for furniture.",
    icon: Package,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Safe Loading & Transit",
    desc: "Goods are carefully loaded onto specialized trucks using modern equipment. Real-time GPS tracking keeps you updated throughout.",
    icon: Truck,
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Unpacking & Setup",
    desc: "Upon arrival, we unload, unpack, and help set up your large furniture at the new home, ensuring a seamless move-in experience.",
    icon: Home,
    color: "from-emerald-500 to-teal-500"
  }
];

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-section/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 sm:mb-20 space-y-4 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-black uppercase tracking-widest border border-primary/20"
          >
            <Sparkles size={14} /> Our Proven Methodology
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Seamless Shifting in <br />
            <span className="text-primary italic">4 Simple Steps.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10 px-2 sm:px-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-background border border-border p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-center text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} p-0.5 mb-6 sm:mb-8 rotate-3 group-hover:rotate-6 transition-transform duration-500`}>
                    <div className="w-full h-full bg-background rounded-[1.1rem] sm:rounded-[1.4rem] flex items-center justify-center">
                      <step.icon size={28} className="text-foreground" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Step 0{i + 1}</span>
                    <h3 className="text-lg sm:text-xl font-black mt-2">{step.title}</h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Localized Content for SEO */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-sm text-white/40 italic font-medium leading-relaxed">
            Proudly serving Nagpur residents in Wadi, Hingna, Jaripatka, Manish Nagar, Somalwada, and Besa. Our local shifting expertise ensures that your neighborhood move is just as professional as a cross-country relocation.
          </p>
        </div>

      </div>
    </section>
  );
}
