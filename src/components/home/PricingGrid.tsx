'use client';
import React, { useState, useEffect } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api-config';


interface PricingTier {
  size: string;
  local: string;
  intercity: string;
  features: string[];
  popular?: boolean;
}

export default function PricingGrid({ city = 'Nagpur' }: { city?: string }) {
  const [tiers, setTiers] = useState<PricingTier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPricing() {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`${API_BASE_URL}/pricing/house`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        if (data && data.tiers) {
          const mappedTiers = data.tiers.map((t: any, index: number) => ({
            size: t.type.replace(' Home', ''),
            local: t.costs.upTo50km,
            intercity: t.costs.upTo500km,
            features: [
              'Professional Packing',
              'Safe Loading/Unloading',
              'Experienced Team',
              'Damage Protection'
            ],
            popular: index === 1 // Set 2BHK as default popular
          })).slice(0, 3);
          
          setTiers(mappedTiers);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPricing();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Fetching Live Pricing...</p>
      </div>
    );
  }

  if (error || tiers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center bg-white/5 rounded-[2.5rem] border border-dashed border-white/10">
        <AlertCircle className="w-12 h-12 text-primary/40 mb-4" />
        <h4 className="text-xl font-bold mb-2">Pricing Currently Unavailable</h4>
        <p className="text-sm text-white/40 max-w-xs">Our dynamic pricing engine is being updated. Please get a custom quote for the most accurate rates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div 
          key={tier.size}
          className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${
            tier.popular 
              ? 'bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10' 
              : 'bg-white/5 border-white/10 hover:border-white/20'
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              Most Selected
            </div>
          )}
          
          <div className="text-center mb-8">
            <h4 className="text-xl font-black mb-1">{tier.size} Move</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Starting from</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Local in {city}</p>
              <p className="text-2xl font-black text-white">{tier.local}</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
              <p className="text-[10px] font-bold text-accent uppercase mb-1">Outstation from {city}</p>
              <p className="text-2xl font-black text-white">{tier.intercity}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-medium text-white/60">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
