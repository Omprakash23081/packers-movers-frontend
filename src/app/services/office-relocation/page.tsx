import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Clock, ShieldCheck, Zap, HardHat, Monitor } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Corporate Office Relocation Services | Zero Downtime',
  description: 'Specialized corporate and office relocation services. We handle IT equipment, servers, and heavy office furniture with zero business disruption and strict timelines.',
};

export default function OfficeRelocationPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-16 mb-16 overflow-hidden">
        <Image 
          src="/images/office-relocation.png" 
          alt="Professional Office Relocation Services" 
          fill 
          className="object-cover z-0 object-[center_60%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <Clock size={14} /> Zero Business Downtime
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                Corporate <span className="text-primary">Office Relocation</span>
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Relocating a business requires precision, speed, and strict security. We specialize in weekend transitions, IT asset handling, and heavy furniture moving, ensuring your team is ready to work on Monday morning.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                   Schedule Pre-Move Survey
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
                 <h2 className="text-3xl font-black mb-6">Why Corporate Leaders Choose Sunita Cargo</h2>
                 <p className="lead text-xl text-muted-foreground">
                   An office move is vastly different from a residential move. It involves sensitive data, expensive IT infrastructure, and strict operational deadlines. Our commercial moving division is specifically trained to handle complex corporate transitions.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Zap, title: "Weekend & Night Moves", desc: "We operate 24/7. We can pack on Friday evening and have your new office completely set up before Monday morning." },
                      { icon: Monitor, title: "IT & Server Handling", desc: "Anti-static packing materials for servers, meticulous cable labeling, and safe transit for sensitive workstations." },
                      { icon: HardHat, title: "Commercial Crew", desc: "Our team includes specialized carpenters for modular furniture dismantling and heavy-machinery riggers." },
                      { icon: ShieldCheck, title: "Data Security", desc: "Secure, tamper-proof packing for confidential files, physical documents, and hard drives." }
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
                 <h2 className="text-3xl font-black mb-8">The Corporate Shifting Masterplan</h2>
                 <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {[
                      { step: "Strategic Planning", text: "We assign a Project Manager who works with your IT and Admin teams to create a master timeline and floor plan mapping." },
                      { step: "Asset Inventory", text: "Every desk, chair, and computer is color-coded and tagged with a unique barcode corresponding to the new office layout." },
                      { step: "IT Disconnect & Packing", text: "Servers and workstations are carefully disconnected, wrapped in anti-static bubble film, and placed in reinforced IT crates." },
                      { step: "Modular Dismantling", text: "Cubicles, conference tables, and compactors are dismantled by our in-house carpenters." },
                      { step: "Deployment", text: "Everything is unloaded precisely according to the floor plan. We reassemble the workstations and assist your IT team with the setup." }
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

              <section className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                   <div>
                     <h2 className="text-2xl font-black mb-4">Request a Corporate Proposal</h2>
                     <p className="text-muted-foreground">Office relocations require a detailed site visit. Contact our commercial division for a comprehensive audit and commercial proposal.</p>
                   </div>
                   <Link href="tel:+917387661300" className="w-full md:w-auto text-center px-8 py-4 bg-primary text-white font-bold rounded-xl whitespace-nowrap">
                     Call Commercial Head
                   </Link>
                </div>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                    {[
                      { q: "Can you move our business without disrupting working hours?", a: "Yes. We specialize in 'Zero Downtime' relocations, executing the move during weekends, holidays, or overnight shifts." },
                      { q: "How do you handle confidential documents?", a: "We use specialized hard plastic crates with tamper-proof security seals. Only authorized personnel from your company can seal and unseal them." },
                      { q: "Do you provide temporary storage for office assets?", a: "Yes, we offer secure, climate-controlled warehousing for surplus furniture, old records, or temporary holding during office renovations." }
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
                 <h3 className="text-2xl font-black mb-6">Contact B2B Team</h3>
                 <p className="text-sm text-muted-foreground mb-8">Submit details for your commercial move, and our project manager will contact you.</p>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
