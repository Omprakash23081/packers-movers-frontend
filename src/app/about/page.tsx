import { Metadata } from 'next';
import Image from 'next/image';
import { Truck, ShieldCheck, MapPin, Users, Award, Target, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Sunita Cargo | 15+ Years of Trust & Reliability',
  description: 'Learn about Sunita Cargo Packers Movers. An IBA-approved, ISO 9001:2015 certified relocation company with 15+ years of excellence in Nagpur and across India.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end mb-16 overflow-hidden">
        <Image 
          src="/images/hero-bg.png" 
          alt="Sunita Cargo Fleet" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-transparent h-40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-16">
           <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                Established 2009
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
                Moving People, <br /><span className="text-primary">Protecting Memories.</span>
              </h1>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Intro Section */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight border-l-8 border-primary pl-6 mb-8 text-foreground">
              Our Journey to Becoming India's Trusted Relocation Partner
            </h2>
            <p className="lead text-xl text-muted-foreground font-medium">
              What started over 15 years ago with a single transport vehicle in Nagpur has now evolved into Sunita Cargo Packers Movers—one of India's most respected and technologically advanced logistics and relocation companies.
            </p>
            <p className="text-muted-foreground">
              We recognized early on that moving isn't just about transporting boxes from Point A to Point B. It is an emotional transition. Families are uprooting their lives, and businesses are shifting their operations. Our mission was built on mitigating that stress through absolute transparency, zero-damage guarantees, and a highly trained in-house workforce.
            </p>
            
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 my-10 not-prose flex flex-col md:flex-row gap-8 items-center">
               <div className="w-full md:w-1/3">
                  <div className="text-5xl font-black text-primary mb-2">10k+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Successful Moves</div>
               </div>
               <div className="w-full md:w-1/3">
                  <div className="text-5xl font-black text-primary mb-2">15+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Years Experience</div>
               </div>
               <div className="w-full md:w-1/3">
                  <div className="text-5xl font-black text-primary mb-2">99%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Damage-Free Rate</div>
               </div>
            </div>
          </section>

          {/* Why We Stand Out */}
          <section>
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Why We Stand Out</h2>
               <p className="text-muted-foreground text-lg">The pillars that define our service excellence.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Truck, title: "100% In-House Fleet", desc: "We never outsource your belongings to third-party transporters. Our dedicated fleet of enclosed, weather-proof containers ensures total accountability." },
                { icon: ShieldCheck, title: "IBA Approved & Insured", desc: "We hold rigorous certifications including ISO 9001:2015 and IBA approval, ensuring bank-level security and compliance for every transit." },
                { icon: Users, title: "Permanent Verified Staff", desc: "Unlike aggregators who hire daily wage laborers, our packing crew consists of background-verified, permanently employed professionals." },
                { icon: Target, title: "Scientific Packing", desc: "We utilize specialized materials including 5-layer corrugated sheets, anti-static wraps for electronics, and custom wooden crates for fragile art." }
              ].map((feature, i) => (
                <div key={i} className="bg-section/30 p-8 rounded-3xl border border-border group hover:border-primary/50 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Trust */}
          <section className="p-10 rounded-[3rem] bg-gradient-to-br from-section to-background border border-border">
             <h2 className="text-3xl font-black text-center mb-10">Our Credentials</h2>
             <div className="flex flex-wrap justify-center gap-6">
                {['ISO 9001:2015 Certified', 'IBA Approved Vendor', 'GST Registered', 'Fully Insured Transit'].map(cert => (
                  <div key={cert} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
                     <CheckCircle2 className="text-emerald-500" size={24} />
                     <span className="font-bold">{cert}</span>
                  </div>
                ))}
             </div>
          </section>

          {/* CTA */}
          <section className="text-center pb-12">
             <h2 className="text-3xl font-black mb-6">Experience a Stress-Free Move Today</h2>
             <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
               Join thousands of happy families and corporate clients who trust Sunita Cargo for their relocation needs.
             </p>
             <Link href="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(var(--primary),0.3)]">
               Get Your Free Quote Now
             </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
