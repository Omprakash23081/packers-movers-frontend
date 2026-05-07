import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, Clock, Shield, CheckCircle2 } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Safe Bike Transport Services | IBA Approved | Sunita Cargo',
  description: '100% scratch-proof bike packing, specialized enclosed carriers, and full transit insurance. Trust Sunita Cargo for secure two-wheeler and superbike transport.',
};

export default function BikeTransportPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-24 mb-16 overflow-hidden">
        <Image 
          src="/images/vehicle-transport.png" 
          alt="Secure Bike Transport Services" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <ShieldCheck size={14} /> 100% Insured Transit
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Premium <span className="text-primary">Bike Transport</span> Services.
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Whether it's a commuter scooter or a premium superbike, we provide scratch-proof packing and specialized enclosed carriers for secure delivery across India.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                   Get Instant Quote
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16">
           {/* Main Content */}
           <div className="lg:col-span-8 space-y-16">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-3xl font-black mb-6">Why Trust Us With Your Two-Wheeler?</h2>
                 <p className="lead text-xl text-muted-foreground">
                   We know that your motorcycle is more than just a vehicle; it's a prized possession. Standard movers often load bikes alongside heavy furniture, leading to scratches and mirror damage. Sunita Cargo uses dedicated vehicle carriers.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Shield, title: "Scratch-Proof Packing", desc: "4-layer foam, bubble wrap, and corrugated sheet protection for the chassis and fuel tank." },
                      { icon: Truck, title: "Enclosed Carriers", desc: "Your bike travels inside weather-proof, enclosed metal containers, safe from dust and rain." },
                      { icon: CheckCircle2, title: "Wheel Chocks & Tie-Downs", desc: "We use specialized hydraulic lifts to load your bike and heavy-duty nylon straps to keep it immobile." },
                      { icon: Clock, title: "GPS Tracking", desc: "Track the real-time location of your motorcycle while it is in transit." }
                    ].map((f, i) => (
                      <div key={i} className="bg-section p-6 rounded-3xl border border-border">
                         <f.icon className="text-primary mb-4" size={32} />
                         <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                         <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Our Transportation Process</h2>
                 <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {[
                      { step: "Pre-Move Inspection", text: "We conduct a thorough condition report, noting existing scratches and odometer reading." },
                      { step: "Preparation", text: "Mirrors are removed and packed separately. The fuel tank is drained to prevent fire hazards during transit." },
                      { step: "Scientific Packing", text: "The entire bike is wrapped in specialized foam and shrink wrap. Vulnerable areas get extra corrugated padding." },
                      { step: "Loading & Lashing", text: "The bike is wheeled up a ramp and secured to the truck floor using heavy-duty ratchet straps and wheel chocks." },
                      { step: "Unloading & Handover", text: "Safe delivery at the destination with a final condition verification." }
                    ].map((p, i) => (
                      <div key={i} className="relative pl-16">
                         <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black z-10 backdrop-blur-sm">
                           {i + 1}
                         </div>
                         <h3 className="text-xl font-bold mb-2">{p.step}</h3>
                         <p className="text-muted-foreground">{p.text}</p>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                    {[
                      { q: "Do I need to empty the fuel tank?", a: "Yes, for safety and compliance with transport regulations, the fuel tank must be drained prior to transport to prevent fire hazards." },
                      { q: "Can you transport superbikes?", a: "Absolutely. We have specialized equipment and highly trained handlers experienced in safely transporting high-end superbikes (Ducati, Harley Davidson, Kawasaki) and heavy cruisers." },
                      { q: "Is my bike insured during transit?", a: "Yes, we offer comprehensive transit insurance that covers your vehicle against any unforeseen accidents or damages during the journey." }
                    ].map((faq, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-section/50 border border-border">
                         <h4 className="font-bold text-lg mb-2">Q. {faq.q}</h4>
                         <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4">
              <div className="sticky top-28 bg-section p-8 rounded-[2.5rem] border border-border shadow-2xl">
                 <h3 className="text-2xl font-black mb-6">Get Transport Quote</h3>
                 <p className="text-sm text-muted-foreground mb-8">Enter your details to get an instant cost estimate for transporting your bike securely.</p>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
