'use client';
import { motion } from 'framer-motion';
import { Truck, Users, Warehouse, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MOMENTS = [
  {
    title: "Advanced Logistics Fleet",
    desc: "Our GPS-enabled enclosed container trucks ensure 100% safety and real-time tracking for intercity vehicle and home relocation.",
    icon: <Truck size={24} />,
    color: "from-blue-500/20 to-transparent",
    image: "/images/vehicle-transport.png",
    link: "/services/car-transport",
    badge: "GPS Tracked"
  },
  {
    title: "Certified Packing Experts",
    desc: "With 15+ years of ground-level experience, our team uses specialized 7-layer packing for fragile households and industrial machinery.",
    icon: <Users size={24} />,
    color: "from-primary/20 to-transparent",
    image: "/images/house-shifting.png",
    link: "/services/house-shifting",
    badge: "IBA Approved"
  },
  {
    title: "Secure 24/7 Warehousing",
    desc: "Safe, fire-proof, and CCTV-monitored storage solutions in Nagpur for short-term and long-term household or business inventory.",
    icon: <Warehouse size={24} />,
    color: "from-emerald-500/20 to-transparent",
    image: "/images/warehouse-storage.png",
    link: "/services/warehouse-storage",
    badge: "CCTV Secured"
  }
];


export default function VisualProof() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px] uppercase tracking-widest">
            <ShieldCheck size={14} /> Real Logistics, No Stock Photos
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
             Logistics in <span className="text-primary italic">Motion.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-medium">
             Take a look at how we handle your belongings with industrial-grade precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {MOMENTS.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-border bg-section cursor-pointer"
             >
                <Link href={item.link} className="absolute inset-0 z-20">
                  <span className="sr-only">View {item.title}</span>
                </Link>

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                   <Image 
                     src={item.image} 
                     alt={item.title} 
                     fill 
                     className="object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0"
                   />
                   <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-60`} />
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                 {/* Content */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                   {item.badge && (
                      <div className="mb-4 inline-block">
                        <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                          {item.badge}
                        </span>
                      </div>
                   )}
                   <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{item.title}</h3>
                   <p className="text-white/60 font-medium leading-relaxed group-hover:text-white/90 transition-colors mb-6">
                      {item.desc}
                   </p>
                   <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest transition-all group-hover:text-primary">
                      Explore Service <Truck size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
