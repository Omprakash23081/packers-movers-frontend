import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, PackageCheck, Clock, ShieldCheck, Box, UserCheck } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Premium House Shifting Services | 100% Safe Relocation',
  description: 'Stress-free, secure, and affordable home relocation services. Multi-layer packing, zero-damage guarantee, and dedicated move managers. Get a free quote today.',
};

export default function HouseShiftingPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-20 mb-16">
        <Image 
          src="/images/house-shifting.png" 
          alt="Professional House Shifting Services" 
          fill 
          className="object-cover z-0 object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-12">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <Home size={14} /> Zero Damage Policy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Turn-Key <span className="text-primary">House Shifting</span> Services.
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                From delicate glassware to heavy oak furniture, we handle your entire household with scientific packing methods and absolute care. Step into your new home, completely unpacked and arranged.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                   Get Instant Moving Quote
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
                 <h2 className="text-3xl font-black mb-6">Why We Are The Preferred Choice for Home Relocation</h2>
                 <p className="lead text-xl text-muted-foreground">
                   Moving a house is an emotional journey. It's not just about transporting items; it's about shifting a lifetime of memories. At Sunita Cargo, our permanently employed packing crew treats your belongings with the same respect as you do.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Box, title: "5-Layer Scientific Packing", desc: "We use edge guards, bubble wrap, stretch film, corrugated sheets, and heavy-duty cartons to ensure zero impact damage." },
                      { icon: UserCheck, title: "Dedicated Move Manager", desc: "You get a single point of contact who supervises the crew, answers your questions, and ensures timelines are met." },
                      { icon: ShieldCheck, title: "Transparent Pricing", desc: "No last-minute 'loading charges' or toll fee surprises. The quote we provide is the final price you pay." },
                      { icon: PackageCheck, title: "Unpacking & Setup", desc: "We don't just dump boxes. We unpack, assemble basic furniture, and help you set up your new home." }
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
                 <h2 className="text-3xl font-black mb-8">Our End-to-End Shifting Process</h2>
                 <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {[
                      { step: "Free Pre-Move Survey", text: "Our surveyor assesses the volume of goods, identifies fragile items, and checks staircase/elevator dimensions to provide an accurate estimate." },
                      { step: "Material Dispatch & Packing", text: "On moving day, our crew arrives with premium packing materials and systematically packs room-by-room." },
                      { step: "Secure Loading", text: "Heavy furniture is loaded first, followed by lighter cartons, using specialized dollies and lifting straps to prevent property damage." },
                      { step: "Transit & Tracking", text: "Your goods travel in our closed, weather-proof containers with real-time GPS tracking available for intercity moves." },
                      { step: "Unpacking & Rearrangement", text: "We unload, unpack, remove all packing debris, and help you arrange large furniture items in your new space." }
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

              {/* Pricing Blocks */}
              <section className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                <h2 className="text-2xl font-black mb-6">Estimated Shifting Charges</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">1 BHK Setup</h4>
                    <p className="text-xs text-muted-foreground mb-4">Standard Furniture & Boxes</p>
                    <p className="font-black text-primary">From ₹4,500</p>
                  </div>
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">2 BHK Setup</h4>
                    <p className="text-xs text-muted-foreground mb-4">Ideal for Small Families</p>
                    <p className="font-black text-primary">From ₹7,500</p>
                  </div>
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">3+ BHK / Villa</h4>
                    <p className="text-xs text-muted-foreground mb-4">Full Household + Electronics</p>
                    <p className="font-black text-primary">From ₹12,000</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6 text-center">* Final price depends on total volume, floor level, and distance. Contact us for a precise quote.</p>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                    {[
                      { q: "How long does a local house shift take?", a: "For a standard 2 BHK within the same city, the entire process of packing, moving, and unpacking usually takes 4-8 hours." },
                      { q: "Do you provide packing materials, or do I need to buy them?", a: "We bring all necessary premium packing materials (cartons, bubble wrap, tape) on moving day. It is all included in your final quote." },
                      { q: "Will you dismantle and reassemble my AC and beds?", a: "Yes, our team includes trained personnel to dismantle standard beds, dining tables, and basic electronics. For complex AC or Geyser installations, we can arrange dedicated technicians upon request." }
                    ].map((faq, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-section/50 border border-border">
                         <h4 className="font-bold text-lg mb-2 flex gap-2"><span className="text-primary">Q.</span> {faq.q}</h4>
                         <p className="text-muted-foreground text-sm leading-relaxed pl-6">{faq.a}</p>
                      </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4">
              <div className="sticky top-28 bg-section p-8 rounded-[2.5rem] border border-border shadow-2xl">
                 <h3 className="text-2xl font-black mb-6">Book Your Move</h3>
                 <p className="text-sm text-muted-foreground mb-8">Enter your details for a free survey and an accurate, no-obligation moving quote.</p>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
