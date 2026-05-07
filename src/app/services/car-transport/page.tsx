import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, Clock, Navigation, CheckCircle2, MapPin } from 'lucide-react';
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Safe Car Transport Services | Enclosed Carriers | Sunita Cargo',
  description: 'Looking for reliable car transport? We offer door-to-door car pickup, closed car carrier trucks, 100% transit insurance, and GPS tracking across India.',
};

export default function CarTransportPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-24 mb-16 overflow-hidden">
        <Image 
          src="/images/vehicle-transport.png" 
          alt="Enclosed Car Carrier Transport" 
          fill 
          className="object-cover z-0 object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
           <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-500 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                <Navigation size={14} /> Door-To-Door Delivery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6">
                IBA-Approved <span className="text-primary">Car Transport</span>
              </h1>
              <p className="text-xl text-white/70 font-medium mb-10 leading-relaxed">
                Relocate your sedan, hatchback, or luxury SUV anywhere in India with zero driving wear-and-tear. We use specialized enclosed car carriers and provide 100% transit insurance.
              </p>
              <div className="flex gap-4">
                 <Link href="/contact" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                   Calculate Transport Cost
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
                 <h2 className="text-3xl font-black mb-6">India's Safest Vehicle Relocation Network</h2>
                 <p className="lead text-xl text-muted-foreground">
                   Driving a car across states adds thousands of kilometers, reduces resale value, and increases the risk of accidents. Sunita Cargo offers a stress-free alternative with our modern fleet of hydraulic-lift enclosed car carriers.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { icon: Truck, title: "Enclosed Car Carriers", desc: "We don't use open trucks. Your car is secured inside a weather-proof metal container, protecting it from dust, rain, and stone chips." },
                      { icon: MapPin, title: "Door-to-Door Service", desc: "Our executives will pick up the car from your driveway and hand over the keys at your new destination." },
                      { icon: ShieldCheck, title: "100% Transit Insurance", desc: "Every transport includes a comprehensive insurance policy covering the full declared value of your vehicle." },
                      { icon: Clock, title: "Real-Time GPS Tracking", desc: "Never wonder where your car is. Get live GPS updates sent straight to your phone." }
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
                 <h2 className="text-3xl font-black mb-8">Our 4-Step Secure Transit Process</h2>
                 <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                    {[
                      { step: "Initial Condition Report", text: "We conduct a joint inspection, logging the odometer reading and photographing any existing scratches to ensure total transparency." },
                      { step: "Hydraulic Loading", text: "Your car is carefully driven up a hydraulic ramp into the carrier to prevent undercarriage scraping." },
                      { step: "Wheel Lashing", text: "The vehicle is locked in place using wheel chocks and heavy-duty safety belts over the tires (not the chassis) to prevent suspension damage." },
                      { step: "Handover", text: "Safe delivery at the destination, complete with a final condition verification and sign-off." }
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
                <h2 className="text-2xl font-black mb-6">Transport Pricing Estimates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">Hatchback</h4>
                    <p className="text-xs text-muted-foreground mb-4">i20, Swift, Baleno</p>
                    <p className="font-black text-primary">From ₹8,000</p>
                  </div>
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">Sedan</h4>
                    <p className="text-xs text-muted-foreground mb-4">City, Verna, Virtus</p>
                    <p className="font-black text-primary">From ₹10,500</p>
                  </div>
                  <div className="p-6 bg-background rounded-2xl border border-border">
                    <h4 className="font-bold text-lg mb-1">SUV / Luxury</h4>
                    <p className="text-xs text-muted-foreground mb-4">Creta, Fortuner, BMW</p>
                    <p className="font-black text-primary">From ₹14,000</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6 text-center">* Pricing depends on distance. Contact us for exact quote.</p>
              </section>

              <section>
                 <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                    {[
                      { q: "Can I pack personal belongings in the car?", a: "For safety and legal reasons, we strictly advise against keeping personal belongings in the car. It can damage the interior during transit and is not covered by insurance." },
                      { q: "How much fuel should I leave in the car?", a: "Please leave only about 1/4th tank of fuel. This is enough for loading and unloading, while keeping the weight down and minimizing fire hazards." },
                      { q: "Do you transport luxury/vintage cars?", a: "Yes, we handle luxury and vintage cars. We use specialized enclosed carriers with hydraulic lifts to ensure zero scraping for low-clearance vehicles." }
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
                 <h3 className="text-2xl font-black mb-6">Book Car Transport</h3>
                 <p className="text-sm text-muted-foreground mb-8">Enter your details to get an instant cost estimate for transporting your car securely.</p>
                 <NagpurQuoteForm />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
