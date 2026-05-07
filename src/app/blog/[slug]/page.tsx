import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

import { Metadata } from 'next';
import { blogContent } from '@/lib/blog-content';

import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // These should match the slugs in your content calendar
  return [
    { slug: 'moving-charges-india-2024' },
    { slug: 'pack-electronics-for-moving' },
    { slug: 'iba-approved-packers-movers' },
    { slug: 'avoid-movers-mistakes' },
    { slug: 'nagpur-to-pune-relocation-guide' },
    { slug: 'corporate-office-relocation-tips' }
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params?.slug || '';
  if (!slug) return { title: 'Blog | Sunita Cargo' };
  
  const title = slug.split('-').map(word => (word.charAt(0) || '').toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Relocation Guide | Sunita Cargo`,
    description: `Expert guide on ${title.toLowerCase()}. Learn professional tips and strategies for a stress-free relocation with Sunita Cargo Packers Movers.`,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params?.slug || '';
  if (!slug) return notFound();
  
  const title = slug.split('-').map(word => (word.charAt(0) || '').toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen pb-20">
      {/* Full-width Hero Image with Overlay Header */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-end mb-16">
         <Image 
           src="/images/hero-bg.png" 
           alt={title} 
           fill 
           className="object-cover z-0"
           priority
         />
         {/* Top gradient for navbar visibility, bottom gradient for text readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent h-40 z-10" />
         
         <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-12">
            <div className="max-w-4xl mx-auto">
               {/* Breadcrumbs */}
               <nav className="flex items-center gap-2 text-[10px] font-bold text-white/50 uppercase tracking-widest mb-8">
                 <Link href="/" className="hover:text-primary">Home</Link>
                 <ChevronRight size={10} />
                 <Link href="/blog" className="hover:text-primary">Resource Center</Link>
                 <ChevronRight size={10} />
                 <span className="text-white/80 truncate">{title}</span>
               </nav>

               <header className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                    Relocation Strategy
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white max-w-4xl text-balance drop-shadow-lg">
                    {title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 pt-6 mt-6 border-t border-white/20 max-w-4xl">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md">
                          <User size={14} />
                        </div>
                        <span className="text-xs font-bold text-white drop-shadow-md">By Sunita Cargo Editorial</span>
                     </div>
                     <div className="flex items-center gap-2 text-white/90 text-xs font-medium drop-shadow-md">
                        <Calendar size={14} /> {blogContent[params.slug]?.date || 'May 15, 2024'}
                     </div>
                     <div className="flex items-center gap-2 text-white/90 text-xs font-medium drop-shadow-md">
                        <Clock size={14} /> {blogContent[params.slug]?.readTime || '8 Min Read'}
                     </div>
                  </div>
               </header>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Content Body */}
            <div className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-strong:text-white">
               {blogContent[params.slug] ? (
                 <div dangerouslySetInnerHTML={{ __html: blogContent[params.slug].content }} />
               ) : (
                 <p className="lead text-xl text-white/70 font-medium">Article content not found.</p>
               )}
               
               <p className="mt-10 pt-10 border-t border-white/10 text-white/70 italic">
                 We hope this guide helps you plan your next shift with confidence. For a more tailored estimate, use our instant cost calculator below.
               </p>

               {/* Share Buttons */}
               <div className="pt-16 border-t border-white/5 flex items-center gap-4 not-prose">
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Share this guide:</span>
                  <div className="flex gap-2">
                    {[Facebook, Twitter, Linkedin, Share2].map((Icon, idx) => (
                      <button key={idx} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Icon size={16} />
                      </button>
                    ))}
                  </div>
               </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-8">
               <div className="sticky top-24 space-y-8">
                  <div className="bg-[#0B1120] p-8 rounded-[2.5rem] border border-primary/20 shadow-2xl shadow-primary/5">
                     <h4 className="text-xl font-black text-white mb-4 leading-tight">Ready to Experience the Difference?</h4>
                     <p className="text-sm text-white/60 mb-8 font-medium leading-relaxed">
                       Don't settle for mediocre service. Get a premium moving quote from Nagpur's highest-rated team.
                     </p>
                     <Button asChild className="w-full h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/20">
                        <Link href="/#quote">Get Free Quote</Link>
                     </Button>
                     
                     <div className="mt-8 space-y-4">
                        {[
                          "Verified Pricing",
                          "IBA Approved Fleet",
                          "100% Transit Insurance"
                        ].map(item => (
                          <div key={item} className="flex items-center gap-3 text-xs font-bold text-white/80">
                             <CheckCircle2 size={16} className="text-emerald-500" /> {item}
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/5">
                     <h4 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Popular Resources</h4>
                     <div className="space-y-6">
                        {[
                          "Moving Charges in India (2024)",
                          "How to Pack Fragile Items",
                          "Nagpur to Pune Route Guide"
                        ].map(r => (
                          <Link key={r} href="#" className="block group">
                             <p className="text-sm font-bold text-white group-hover:text-primary transition-colors mb-1">{r}</p>
                             <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase font-bold">
                               <Clock size={10}/> 5 Min Read
                             </div>
                          </Link>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
