'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Truck, Home, Building2, Warehouse, ChevronRight, Car, Bike, PackageOpen, Package, MapPin } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { TiltCard } from '@/components/ui/TiltCard';
const services = [
  {
    title: 'Household Shifting',
    description: 'Safe and secure home relocation across India. We handle your furniture and delicate items with absolute care and 5-layer packing.',
    icon: Home,
    href: '/services/house-shifting',
    color: 'text-primary',
    bg: 'bg-primary/10',
    imageUrl: '/images/house-shifting.png'
  },
  {
    title: 'Office Relocation',
    description: 'Minimize business downtime with our specialized corporate moving services. Secure transit for IT equipment, furniture, and documents.',
    icon: Building2,
    href: '/services/office-relocation',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    imageUrl: '/images/office-relocation.png'
  },
  {
    title: 'Car Transportation',
    description: 'IBA-approved enclosed carrier transport with real-time GPS tracking ensuring your vehicle reaches scratch-free.',
    icon: Car,
    href: '/services/car-transport',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    imageUrl: '/images/vehicle-transport.png'
  },
  {
    title: 'Bike Transportation',
    description: 'Specialized two-wheeler packing and transport with scratch-proof bubble wrap and dedicated bike carriers.',
    icon: Bike,
    href: '/services/bike-transport',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    imageUrl: '/images/house-shifting.png' // Fallback
  },
  {
    title: 'Loading & Unloading',
    description: 'Trained professionals to safely load and unload heavy furniture and delicate boxes using modern equipment.',
    icon: Truck,
    href: '/services/house-shifting',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    imageUrl: '/images/office-relocation.png' // Fallback
  },
  {
    title: 'Packing & Unpacking',
    description: 'Premium quality packing materials including customized crates, bubble wraps, and corrugated boxes for 100% safety.',
    icon: PackageOpen,
    href: '/services/house-shifting',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    imageUrl: '/images/house-shifting.png' // Fallback
  },
  {
    title: 'Storage / Warehouse',
    description: 'Secure, climate-controlled warehousing. 24/7 CCTV monitored facilities for short-term and long-term storage solutions.',
    icon: Warehouse,
    href: '/services/warehouse-storage',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    imageUrl: '/images/warehouse-storage.png'
  },
  {
    title: 'Local Shifting',
    description: 'Fast and affordable local moving services within your city. Completed on the same day with full setup assistance.',
    icon: MapPin,
    href: '/services/house-shifting',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    imageUrl: '/images/vehicle-transport.png' // Fallback
  }
];

export default function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="w-full px-0 sm:px-4 md:px-6">
        <div className="text-center mb-16 space-y-4 px-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Our Premium <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            From local shifting to interstate relocations, we provide end-to-end logistics solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-3 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full"
            >
              <Link href={service.href} className="block group h-full">
                <TiltCard tiltMax={10} className="h-full">
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 shadow-sm hover:shadow-2xl bg-white dark:bg-[#0A0F1E]/60 backdrop-blur-md relative overflow-hidden flex flex-col rounded-2xl md:rounded-3xl">

                    {/* Image Header */}
                    <div className="relative w-full h-24 sm:h-40 overflow-hidden">
                      <NextImage
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
                    </div>

                    <CardHeader className="relative -mt-6 sm:mt-10 z-10 pb-1 px-3 sm:px-6">
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.bg} bg-[#0A0F1E]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-1`}>
                        {(() => {
                          const Icon = service.icon;
                          return <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${service.color}`} />;
                        })()}
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col px-3 sm:px-6 pb-4 sm:pb-6 pt-1">
                      <CardTitle className="text-sm sm:text-lg font-bold mb-1.5 text-white">{service.title}</CardTitle>
                      <p className="text-[10px] sm:text-sm text-white/50 mb-4 line-clamp-2 sm:line-clamp-3 flex-grow font-medium leading-tight sm:leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[10px] sm:text-xs font-bold text-primary transition-colors group-hover:text-secondary mt-auto">
                        Learn more
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
