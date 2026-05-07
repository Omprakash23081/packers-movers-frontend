'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Package, Headphones, BadgeCheck, Zap, Globe } from 'lucide-react';

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "100% Transit Insurance",
    desc: "We provide comprehensive insurance coverage for all your household goods. Our claims process is fast and hassle-free, ensuring zero financial risk during relocation."
  },
  {
    icon: Package,
    title: "7-Layer Packing Standard",
    desc: "We use industrial-grade packing materials including bubble wrap, foam sheets, corrugated rolls, and moisture-proof stretch films to protect your prized possessions."
  },
  {
    icon: Clock,
    title: "On-Time Delivery Guarantee",
    desc: "Time is money. Our advanced logistics network and experienced drivers ensure that your goods reach the destination exactly when promised, with real-time GPS tracking."
  },
  {
    icon: BadgeCheck,
    title: "IBA Approved & Certified",
    desc: "Sunita Cargo is a fully certified and IBA-approved packing and moving company. We adhere to the highest industry standards for safety, reliability, and ethics."
  }
];

const FEATURES = [
  "No Hidden Costs - 100% Transparent Quotations",
  "Dedicated Move Coordinator for every client",
  "Specialized carriers for Car and Bike transport",
  "24/7 Customer Support and live tracking",
  "Skilled and verified professional workforce",
  "Eco-friendly packing options available"
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={14} /> The Sunita Cargo Advantage
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
              Why We Are India's <br />
              <span className="text-primary italic">Most Trusted</span> Movers.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
              Relocation is more than just moving boxes; it's about moving lives. At Sunita Cargo Packers Movers, we blend decades of expertise with modern technology to deliver a stress-free shifting experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck size={12} className="text-emerald-500" />
                  </div>
                  <span className="text-sm font-bold text-white/70">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-section border border-border hover:border-primary/40 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* SEO Text Block */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
          <h3 className="text-2xl font-black mb-6 text-center">Comprehensive Relocation Solutions Across India</h3>
          <div className="columns-1 md:columns-2 gap-12 text-sm text-muted-foreground leading-relaxed font-medium">
            <p className="mb-4">
              As the leading **Packers and Movers in Nagpur**, Sunita Cargo offers a wide range of services including house shifting, office relocation, and industrial moves. We specialize in **Nagpur to Pune packers and movers** routes, as well as long-distance transport to Delhi, Mumbai, Bangalore, and Hyderabad. Our team is trained in scientific packing methods, ensuring your furniture and electronics stay safe during thousands of kilometers of transit.
            </p>
            <p>
              Our car and bike transport services use specialized enclosed carriers to prevent road damage and wear-and-tear. We are also known for our secure **warehouse and storage solutions**, providing short-term and long-term space for households and businesses in Nagpur. Whether you are looking for local shifting or domestic relocation, our transparent pricing and commitment to safety make us the preferred choice for thousands of satisfied customers every year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
