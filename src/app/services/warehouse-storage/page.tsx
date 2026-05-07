import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Warehouse, ShieldCheck, Clock, Lock, Thermometer, UserCheck } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Secure Warehouse & Storage Solutions | Sunita Cargo',
  description: 'Safe, fire-proof, and CCTV-monitored warehouse storage services for households and businesses. Short-term and long-term storage available in Nagpur.',
};

export default function WarehousePage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-20 mb-16">
        <Image 
          src="/images/warehouse-storage.png" 
          alt="Secure Warehouse Storage Services" 
          fill 
          className="object-cover z-0 object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-12">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <ShieldCheck size={14} /> 100% Secure & Insured
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Safe & Secure <span className="text-primary">Warehouse</span> Storage.
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Need a place for your belongings during a transition? Our industrial-grade warehouses offer 24/7 monitoring, fire protection, and climate control for your peace of mind.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                   Get Storage Quote
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
                 <h2 className="text-3xl font-black mb-6">World-Class Storage Infrastructure</h2>
                 <p className="lead text-xl text-muted-foreground">
                    Whether you are renovating your home, traveling abroad, or need space for business inventory, Sunita Cargo provides flexible storage solutions that adapt to your needs.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Lock, title: "24/7 CCTV Monitoring", desc: "Our premises are monitored by high-definition cameras and round-the-clock physical security guards." },
                      { icon: Thermometer, title: "Climate Control", desc: "Protection against moisture, dust, and temperature fluctuations to preserve your furniture and electronics." },
                      { icon: Clock, title: "Flexible Duration", desc: "Store for a week or several years. We offer customized short-term and long-term rental plans." },
                      { icon: UserCheck, title: "Inventory Management", desc: "Every item is tagged and recorded in our digital database for easy tracking and quick retrieval." }
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
                 <h2 className="text-3xl font-black mb-8">Items We Store</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Household Furniture", "Office Equipment", "IT Assets", "Personal Luggage", "Exhibition Material", "Industrial Goods"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-bold">{item}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="bg-primary/5 p-8 rounded-3xl border border-primary/20 text-center">
                 <h2 className="text-2xl font-black mb-4">Pricing starts at just ₹60/day</h2>
                 <p className="text-muted-foreground mb-8">Affordable rates with maximum security. Pay only for the space you use.</p>
                 <Link href="/contact" className="inline-block h-12 px-8 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all">
                    Inquire About Rates
                 </Link>
              </section>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4">
              <div className="sticky top-28 bg-section p-8 rounded-[2.5rem] border border-border shadow-2xl">
                 <h3 className="text-2xl font-black mb-6">Storage Request</h3>
                 <p className="text-sm text-muted-foreground mb-8">Tell us what you need to store and for how long. We will provide a customized quote.</p>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
