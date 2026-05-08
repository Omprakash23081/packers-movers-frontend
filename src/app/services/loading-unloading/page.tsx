import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ShieldCheck, Clock, Users, ArrowRight, Zap, ArrowLeft } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Professional Loading & Unloading Services | Sunita Cargo',
  description: 'Expert loading and unloading services for homes and offices. We use modern equipment to ensure zero-damage handling of heavy furniture and delicate items.',
};

export default function LoadingUnloadingPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-32 mb-16 overflow-hidden">
        <Image 
          src="/images/office-relocation.png" 
          alt="Professional Loading and Unloading" 
          fill 
          className="object-cover z-0 object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <Truck size={14} /> Expert Handling
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Safe <span className="text-emerald-500">Loading & Unloading</span>
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Heavy furniture, delicate glassware, or industrial machinery—our trained crew uses specialized equipment to ensure every item is loaded and unloaded with zero damage.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg">
                   Book Labor Only
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16">
           <div className="lg:col-span-8 space-y-16">
              <section className="prose prose-lg dark:prose-invert max-w-none">
                 <h2 className="text-3xl font-black mb-6">Why Professional Loading Matters</h2>
                 <p className="text-xl text-muted-foreground">
                   Most damages during relocation happen during the loading and unloading phase. Improper lifting or stacking can lead to structural damage to furniture or breakage of fragile items. At Sunita Cargo, we treat loading as a science.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Users, title: "Trained Muscle", desc: "Our staff is trained in ergonomic lifting techniques to move heavy items without causing property damage." },
                      { icon: Zap, title: "Modern Equipment", desc: "We use sliders, dollies, pallet jacks, and safety straps to move items smoothly across all floor types." },
                      { icon: ShieldCheck, title: "Zero Scratch Guarantee", desc: "We use protective floor runners and door-frame pads to ensure your property remains pristine." },
                      { icon: Clock, title: "Time Efficiency", desc: "What takes amateurs all day, our team completes in hours through systematic teamwork." }
                    ].map((f, i) => (
                      <div key={i} className="bg-section p-6 rounded-3xl border border-border">
                         <f.icon className="text-emerald-500 mb-4" size={32} />
                         <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                         <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">What's Included?</h2>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Dismantling of standard furniture",
                      "Systematic loading into trucks",
                      "Optimized space utilization",
                      "Securing items with lashing belts",
                      "Careful unloading at destination",
                      "Reassembly and placement",
                      "Debris removal",
                      "Final inspection"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
                        <ArrowRight size={16} className="text-emerald-500" />
                        <span className="font-bold text-sm">{item}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="bg-emerald-500/5 p-8 rounded-3xl border border-emerald-500/20 text-center">
                <h2 className="text-2xl font-black mb-4 text-emerald-500">Need Only Labor?</h2>
                <p className="text-muted-foreground mb-6 font-medium">Already have a truck? You can hire our professional loading crew for safe handling of your goods.</p>
                <Link href="/contact" className="inline-flex h-12 px-8 bg-emerald-500 text-white font-bold rounded-full items-center justify-center transition-all hover:bg-emerald-600">
                  Hire Our Crew
                </Link>
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
