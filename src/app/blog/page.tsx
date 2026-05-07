'use client';
import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const POSTS = [
  {
    title: "The Ultimate Guide to Moving Charges in India (2024)",
    excerpt: "Break down the costs of relocation across major Indian cities. Learn how to calculate prices for 1BHK, 2BHK, and 3BHK shifts with 100% transparency.",
    category: "Cost Guides",
    readTime: "8 min read",
    date: "May 10, 2024",
    image: "/images/hero-bg.png",
    slug: "moving-charges-india-2024"
  },
  {
    title: "How to Safely Pack Electronics for a Long-Distance Move",
    excerpt: "Your laptops, TVs, and appliances need more than just bubble wrap. Discover our 5-layer scientific packing method for sensitive electronics.",
    category: "Relocation Tips",
    readTime: "5 min read",
    date: "May 12, 2024",
    image: "/images/hero-bg.png",
    slug: "pack-electronics-for-moving"
  },
  {
    title: "IBA Approved Packers and Movers: Why It Matters",
    excerpt: "What does IBA approval mean for you? Learn why choosing an approved transporter ensures safety, insurance, and professional handling.",
    category: "Industry Insights",
    readTime: "6 min read",
    date: "May 15, 2024",
    image: "/images/hero-bg.png",
    slug: "iba-approved-packers-movers"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest"
           >
             <BookOpen size={14} /> Relocation Resource Center
           </motion.div>
           <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
             Expert Insights for a <br />
             <span className="text-primary italic">Smarter Move.</span>
           </h1>
           <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
             Comprehensive guides, cost breakdowns, and professional tips to help you navigate your next relocation with confidence.
           </p>

           <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input 
                type="text" 
                placeholder="Search for guides, tips, or city routes..." 
                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-primary transition-all text-white font-medium"
              />
           </div>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {POSTS.map((post, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-section rounded-[2.5rem] border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                 <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                    />
                    <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </div>
                 </div>

                 <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">
                       <div className="flex items-center gap-1.5"><Clock size={12}/> {post.readTime}</div>
                       <div className="h-1 w-1 rounded-full bg-white/20" />
                       <div>{post.date}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest group/link">
                      Read Full Article <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                 </div>
               </Link>
             </motion.div>
           ))}
        </div>

        {/* Categories / Sidebar-like area */}
        <div className="mt-24 pt-16 border-t border-border flex flex-wrap justify-center gap-4">
           {['Cost Guides', 'Packing Tips', 'Vehicle Transport', 'Office Moves', 'Insurance & Safety', 'City Guides'].map(cat => (
             <button key={cat} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/60 hover:border-primary hover:text-primary transition-all uppercase tracking-widest">
               {cat}
             </button>
           ))}
        </div>
      </div>
    </div>
  );
}
