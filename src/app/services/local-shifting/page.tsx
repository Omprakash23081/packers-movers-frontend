import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, Truck, ArrowRight, Zap, CheckCircle2, ArrowLeft } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Fast Local Shifting Services | Same Day Delivery | Sunita Cargo',
  description: 'Affordable and professional local moving services within your city. We ensure same-day completion and zero-damage transit for your household goods.',
};

export default function LocalShiftingPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-32 mb-16 overflow-hidden">
        <Image 
          src="/images/vehicle-transport.png" 
          alt="Local City Shifting Services" 
          fill 
          className="object-cover z-0 object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <MapPin size={14} /> City-Wide Coverage
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Fast <span className="text-cyan-500">Local Shifting</span> Services.
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Moving across the street or to the other side of town? We provide swift, same-day relocation services with professional packing and full setup assistance.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg">
                   Book Local Move
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16">
           <div className="lg:col-span-8 space-y-16">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-3xl font-black mb-6">Efficiency Meets Affordability</h2>
                 <p className="text-xl text-muted-foreground">
                   Local moves don't have to be stressful. We specialize in navigating narrow city lanes and managing high-rise apartment logistics to ensure your move is completed within hours, not days.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Clock, title: "Same-Day Completion", desc: "For most 1-2 BHK local shifts, we pack, move, and unpack within the same day." },
                      { icon: Zap, title: "No Hidden Costs", desc: "Our local shifting quotes include labor, transport, and basic packing materials. What you see is what you pay." },
                      { icon: ShieldCheck, title: "Damage-Free Guarantee", desc: "Even for short distances, we use protective padding for your large furniture and electronics." },
                      { icon: Truck, title: "Specialized Local Fleet", desc: "Small and medium-sized trucks optimized for city traffic and tight parking spaces." }
                    ].map((f, i) => (
                      <div key={i} className="bg-section p-6 rounded-3xl border border-border">
                         <f.icon className="text-cyan-500 mb-4" size={32} />
                         <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                         <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">What Makes Our Local Service Better?</h2>
                 <div className="space-y-4">
                    {[
                      { title: "Apartment Specialists", text: "We coordinate with society security and manage elevator logistics to ensure zero property damage and minimal disruption." },
                      { title: "Furniture Dismantling", text: "Beds, wardrobes, and dining tables are dismantled and reassembled at your new home by experts." },
                      { title: "Secure Transit", text: "We use closed-body trucks to protect your goods from city dust and unpredictable weather." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-background rounded-2xl border border-border flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="bg-cyan-500/5 p-8 rounded-3xl border border-cyan-500/20">
                <h2 className="text-2xl font-black mb-6">Local Moving Charges</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded-xl border border-border text-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">1 BHK</p>
                    <p className="text-xl font-black text-cyan-500">₹4,000 - ₹6,500</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border text-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">2 BHK</p>
                    <p className="text-xl font-black text-cyan-500">₹6,000 - ₹9,500</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border text-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">3 BHK</p>
                    <p className="text-xl font-black text-cyan-500">₹9,000 - ₹14,000</p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-4 text-center">* Rates may vary based on exact volume and floor levels. GST extra.</p>
              </section>
           </div>

           <div className="lg:col-span-4">
              <div className="sticky top-28 bg-section p-8 rounded-[2.5rem] border border-border shadow-2xl">
                 <h3 className="text-2xl font-black mb-6">Book Local Move</h3>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
