'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, Users, PackageCheck, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    title: 'Experienced Movers',
    description: 'Trained professionals for zero-damage handling.',
    icon: Users,
  },
  {
    title: 'GPS Tracking',
    description: 'Live tracking for end-to-end relocations.',
    icon: PackageCheck,
  },
  {
    title: 'Insurance Coverage',
    description: 'Full compensation for any transit damages.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Customer Support',
    description: 'Dedicated customer service team.',
    icon: HeadphonesIcon,
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-tr-full blur-3xl -z-10" aria-hidden="true" />

      <div className="w-full px-0 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Images & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative min-h-[400px] md:min-h-[500px] w-full"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-none sm:rounded-3xl overflow-hidden shadow-2xl z-10">

              <Image
                src="/images/warehouse-storage.png"
                alt="Sunita Cargo Packers and Movers Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Trust Badge 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 z-20 bg-white dark:bg-black/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-border/50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={20} aria-hidden="true" />
                </div>
                <div className="font-bold text-2xl">15+</div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Years of Trusted Experience</p>
            </motion.div>

            {/* Floating Trust Badge 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-12 -left-8 z-20 bg-white dark:bg-black/80 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-border/50 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <ShieldCheck size={20} aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-sm">ISO 9001:2015</div>
                <div className="text-xs text-muted-foreground">Certified Company</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Story & Features */}
          <div className="lg:w-1/2 space-y-8 px-6 md:px-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary mb-4"
              >
                Our Company Story
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Delivering Excellence <br /> <span className="text-primary">Since 2008.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed font-medium"
              >
                Sunita Cargo Packers Movers began in 2008 with a simple mission: to provide the people of Nagpur with a packing and moving service that actually cares. Led by a team of industry veterans with over 15 years of ground-level experience, we have grown from a single-truck operation in Wadi to an IBA-approved national logistics network.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed font-medium mt-4"
              >
                Our head office at Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Nagpur serves as our central hub for residential shifting, commercial relocation, and secure warehousing. We pride ourselves on using 100% in-house staff—never third-party contractors—to ensure your belongings are handled with the same care we would give our own.
              </motion.p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/50">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
