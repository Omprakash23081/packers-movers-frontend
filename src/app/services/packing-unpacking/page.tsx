import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PackageOpen, ShieldCheck, Box, CheckCircle2, ArrowRight, Layers, ArrowLeft } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Premium Packing & Unpacking Services | Sunita Cargo',
  description: 'High-quality packing services using 7-layer safety standards. We provide bubble wrap, customized crates, and corrugated sheets for maximum protection.',
};

export default function PackingUnpackingPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-32 mb-16 overflow-hidden">
        <Image 
          src="/images/house-shifting.png" 
          alt="Professional Packing Services" 
          fill 
          className="object-cover z-0 object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <PackageOpen size={14} /> 7-Layer Protection
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Expert <span className="text-purple-500">Packing</span> Services.
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                We don't just put things in boxes. We engineer protection. Using premium materials and systematic labeling, we ensure your belongings survive any journey.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg">
                   Get Packing Estimate
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16">
           <div className="lg:col-span-8 space-y-16">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-3xl font-black mb-6">Our 7-Layer Packing Standard</h2>
                 <p className="text-xl text-muted-foreground">
                   Standard packing isn't enough for India's roads. We use a multi-layered approach for every fragile item to absorb shocks and prevent moisture damage.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Layers, title: "Shock Absorption", desc: "Multiple layers of bubble wrap and foam sheets to create a cushion against transit vibrations." },
                      { icon: Box, title: "Customized Crating", desc: "Wooden crates for heavy electronics, mirrors, and artwork to provide structural rigidity." },
                      { icon: ShieldCheck, title: "Moisture Protection", desc: "Industrial-grade stretch film to seal out dust and humidity during long-term transit." },
                      { icon: CheckCircle2, title: "Systematic Labeling", desc: "Room-wise and content-specific labeling for a stress-free unpacking experience." }
                    ].map((f, i) => (
                      <div key={i} className="bg-section p-6 rounded-3xl border border-border">
                         <f.icon className="text-purple-500 mb-4" size={32} />
                         <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                         <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Premium Materials We Use</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      "Heavy Duty Cartons",
                      "Air Bubble Wrap",
                      "Corrugated Sheets",
                      "Stretch Film",
                      "EPF Foam Sheets",
                      "Adhesive Tapes",
                      "Edge Protectors",
                      "Custom Crates",
                      "Vacuum Bags"
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-4 bg-background rounded-2xl border border-border text-center group hover:border-purple-500/50 transition-all">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-3">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="font-bold text-xs uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="bg-purple-500/5 p-8 rounded-3xl border border-purple-500/20">
                <h2 className="text-2xl font-black mb-6">The Unpacking Advantage</h2>
                <p className="text-muted-foreground mb-6 font-medium leading-relaxed">
                  Most people dread the weeks of living out of boxes after a move. With Sunita Cargo, our team helps you unpack, assemble beds, and arrange major furniture on the same day, so you can sleep in your new home comfortably.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm font-bold">
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500" /> Furniture Reassembly</li>
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500" /> Major Appliance Setup</li>
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500" /> Debris Collection</li>
                  <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-500" /> Item-wise Inventory Check</li>
                </ul>
              </section>
           </div>

           <div className="lg:col-span-4">
              <div className="sticky top-28 bg-section p-8 rounded-[2.5rem] border border-border shadow-2xl">
                 <h3 className="text-2xl font-black mb-6">Get a Quote</h3>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
