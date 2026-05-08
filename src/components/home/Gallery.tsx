'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { projects } from '@/lib/projects';

export default function Gallery() {
  // Use the detailed project data for the gallery
  const galleryItems = [
    { ...projects[0], height: 'h-[350px]', delay: 0 },
    { ...projects[1], height: 'h-[350px]', delay: 0.1 },
    { ...projects[2], height: 'h-[350px]', delay: 0.2 },
    { ...projects[3], height: 'h-[350px]', delay: 0.3 },
    { ...projects[4], height: 'h-[350px]', delay: 0.4 },
    { ...projects[5], height: 'h-[350px]', delay: 0.5 }
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-muted/20 relative">
      <div className="w-full px-0 sm:px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
          >
            Project Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Our Work <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            A glimpse into our professional packing, secure loading, and seamless transportation process across India.
          </motion.p>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.3, ease: "easeOut" }}
              className={`relative w-full ${item.height}`}
            >
              <Link href={`/projects/${item.slug}`} className="block w-full h-full">
                <TiltCard tiltMax={10} className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-white/5 bg-[#0A0F1E]">
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/20 to-transparent opacity-90 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <ZoomIn size={24} />
                      </div>
                      <h3 className="text-white font-black text-2xl mb-1 tracking-tight">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">{item.category}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/40 font-bold text-xs uppercase tracking-widest">View Project</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <button className="bg-foreground text-background font-bold text-lg px-10 py-4 rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl hover:-translate-y-1 hover:shadow-primary/30">
              Get Your Free Quote
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
