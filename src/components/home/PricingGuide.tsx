'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Home, IndianRupee, Building2, Car, Loader2 } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api-config';

const services = [
  { id: 'house', label: 'House Shifting', icon: <Home size={18} /> },
  { id: 'office', label: 'Office Relocation', icon: <Building2 size={18} /> },
  { id: 'vehicle', label: 'Car & Bike', icon: <Car size={18} /> }
];

const distances = [
  { label: 'Up to 50 KM', sub: '(Local)' },
  { label: 'Up to 500 KM', sub: '(Short)' },
  { label: 'Up to 1000 KM', sub: '(Medium)' },
  { label: 'Up to 1500 KM', sub: '(Long)' },
  { label: 'Within 2500 KM', sub: '(Express)' }
];

interface IPricingTier {
  type: string;
  costs: {
    upTo50km: string;
    upTo500km: string;
    upTo1000km: string;
    upTo1500km: string;
    upTo2500km: string;
  };
}

export default function PricingGuide() {
  const [activeTab, setActiveTab] = useState('house');
  const [pricingData, setPricingData] = useState<Record<string, IPricingTier[]> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pricing`);
        const data = await response.json();
        const formattedData: Record<string, IPricingTier[]> = {};
        data.forEach((item: { category: string; tiers: IPricingTier[] }) => {
          formattedData[item.category] = item.tiers;
        });
        setPricingData(formattedData);
      } catch (error) {
        // Handle error silently or show a UI notification
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  if (loading) {
    return (
      <div className="py-24 flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const currentData = pricingData?.[activeTab] || [];

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            Pricing Transparency
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl leading-[1.1]"
          >
            Simple, Honest <br />
            <span className="text-primary italic">Moving Estimates.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
          >
            Estimated relocation costs for <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">{services.find(s => s.id === activeTab)?.label}</span>.
            Final pricing varies based on exact volume and distance.
          </motion.p>

          {/* Tab Switcher - More Premium Look */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex p-1.5 bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl overflow-x-auto scrollbar-none max-w-full mx-auto"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 md:px-8 py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-black transition-all duration-500 relative shrink-0 ${activeTab === service.id
                    ? 'bg-primary text-white shadow-xl shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {service.icon}
                <span className="hidden sm:inline">{service.label}</span>
                <span className="sm:hidden">{service.label.split(' ')[0]}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="glass-panel overflow-hidden rounded-none md:rounded-[2.5rem] border-x-0 md:border-x border-y border-white/20 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white/60 dark:bg-black/40 backdrop-blur-3xl">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/50 bg-black/5 dark:bg-white/5">
                      <th className="sticky left-0 z-20 bg-white/95 dark:bg-black/95 backdrop-blur-xl p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground min-w-[160px] md:min-w-[180px] border-r border-border/10">Shifting Type</th>
                      {distances.map((dist, i) => (
                        <th key={i} className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="text-foreground text-xs md:text-sm">{dist.label}</span>
                            <span className="text-[9px] md:text-[10px] opacity-60 font-medium">{dist.sub}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <AnimatePresence mode="wait">
                      {currentData.map((row: IPricingTier, idx: number) => (
                        <motion.tr
                          key={`${activeTab}-${idx}`}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group hover:bg-primary/5 transition-all duration-300"
                        >
                          <td className="sticky left-0 z-10 bg-white/95 dark:bg-black/95 backdrop-blur-xl p-4 md:p-6 border-r border-border/10">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0">
                                {services.find(s => s.id === activeTab)?.icon}
                              </div>
                              <span className="font-bold text-foreground text-xs md:text-sm">{row.type}</span>
                            </div>
                          </td>
                          <td className="p-4 md:p-6 font-bold text-primary/80 group-hover:text-primary transition-colors whitespace-nowrap text-xs md:text-sm">{row.costs.upTo50km}</td>
                          <td className="p-4 md:p-6 font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap text-xs md:text-sm">{row.costs.upTo500km}</td>
                          <td className="p-4 md:p-6 font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap text-xs md:text-sm">{row.costs.upTo1000km}</td>
                          <td className="p-4 md:p-6 font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap text-xs md:text-sm">{row.costs.upTo1500km}</td>
                          <td className="p-4 md:p-6 font-bold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap text-xs md:text-sm">{row.costs.upTo2500km}</td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Truck size={16} className="text-primary" />
                  <span>GST (18%) and Insurance extra as applicable</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <IndianRupee size={16} />
                  <span>All prices are starting from estimates</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
