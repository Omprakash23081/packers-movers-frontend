'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Tag, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Find project by slug (also handle the repeat slugs for the gallery)
  const project = projects.find(p => p.slug === slug) || 
                  projects.find(p => slug.startsWith(p.slug));

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">The project you are looking for does not exist or has been moved.</p>
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-20">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="container relative z-10 h-full flex flex-col justify-end pb-12 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-4"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary w-fit backdrop-blur-md">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="container mt-12 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 glass-panel rounded-2xl border-white/5 bg-white/5">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                    <span className="font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8 p-8 md:p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <h2 className="text-3xl font-bold">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((item, i) => (
                    <div key={i} className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <div className="text-xs font-black text-rose-500 uppercase tracking-widest flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-rose-500" /> The Challenge
                         </div>
                         <p className="text-lg font-bold">{item.challenge}</p>
                      </div>
                      <div className="space-y-2">
                         <div className="text-xs font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-emerald-500" /> Our Solution
                         </div>
                         <p className="text-muted-foreground font-medium">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Steps / Process */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-border" />
                <h2 className="text-3xl font-bold whitespace-nowrap">The Process</h2>
                <div className="h-px flex-grow bg-border" />
              </div>

              <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
                {project.process.map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 rounded-[3rem] bg-[#0A0F1E] border border-white/5 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex text-yellow-500 gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-8">
                    &quot;{project.testimonial.message}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image src={project.testimonial.avatar} alt={project.testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-lg">{project.testimonial.name}</h4>
                       <p className="text-white/40 font-bold text-xs uppercase tracking-widest">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* Gallery In-page */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">In-Action Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative h-64 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
                    <Image
                      src={img}
                      alt={`Action shot ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-28"
            >
              <Card className="glass-panel border-white/10 bg-black/40 !backdrop-blur-2xl p-8 rounded-3xl space-y-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold border-b border-border pb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                        <p className="font-bold">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Date Executed</p>
                        <p className="font-bold">{project.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <Tag size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Category</p>
                        <p className="font-bold">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-emerald-500 font-bold">
                    <ShieldCheck size={20} />
                    <span>IBA Approved Packing</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-500 font-bold">
                    <Clock size={20} />
                    <span>On-Time Guarantee</span>
                  </div>
                </div>

                <Link href="/contact" className="block w-full">
                  <Button variant="accent" size="lg" className="w-full rounded-2xl group flex items-center justify-center gap-2 font-bold shadow-accent/20">
                    Plan Similar Move <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* Trust Signal Mini-Card */}
              <div className="mt-6 p-6 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                       <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={32} height={32} />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold opacity-80">Join 10k+ Happy Customers</p>
              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </div>
  );
}
