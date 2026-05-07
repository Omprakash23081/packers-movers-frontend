'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Clock, Star, Inbox } from 'lucide-react';
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
  },
  {
    title: "7 Mistakes to Avoid When Hiring Packers and Movers",
    excerpt: "Don't fall for low-ball quotes. Learn how to spot rogue movers and ensure your belongings are in safe hands with our expert checklist.",
    category: "Relocation Tips",
    readTime: "7 min read",
    date: "May 18, 2024",
    image: "/images/hero-bg.png",
    slug: "avoid-movers-mistakes"
  },
  {
    title: "Nagpur to Pune: A Complete Relocation Case Study",
    excerpt: "Follow the journey of a family moving from Nagpur to Pune. Discover the timeline, costs, and challenges solved by our logistics team.",
    category: "City Guides",
    readTime: "10 min read",
    date: "May 20, 2024",
    image: "/images/hero-bg.png",
    slug: "nagpur-to-pune-relocation-guide"
  },
  {
    title: "Corporate Relocation: Minimizing Business Downtime",
    excerpt: "Moving your office? Our guide explains how to plan a weekend shift so your employees can start work on Monday morning without a hitch.",
    category: "Office Moves",
    readTime: "6 min read",
    date: "May 22, 2024",
    image: "/images/hero-bg.png",
    slug: "corporate-office-relocation-tips"
  }

];

const CATEGORIES = ['All', 'Cost Guides', 'Relocation Tips', 'Industry Insights', 'Vehicle Transport', 'Office Moves', 'City Guides'];

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
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

           <div className="relative max-w-xl mx-auto mt-8 group">
              <Search className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${searchQuery ? 'text-primary' : 'text-white/40'}`} size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for guides, tips, or city routes..." 
                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-primary focus:bg-white/10 transition-all text-white font-medium"
              />
           </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
           {CATEGORIES.map(cat => (
             <button 
               key={cat} 
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${
                 activeCategory === cat 
                   ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                   : 'bg-white/5 border-white/10 text-white/40 hover:border-primary hover:text-primary'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
           <AnimatePresence mode="popLayout">
             {filteredPosts.length > 0 ? (
               filteredPosts.map((post, i) => (
                 <motion.div
                   key={post.slug}
                   layout
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
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
               ))
             ) : (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="col-span-1 md:col-span-3 flex flex-col items-center justify-center py-20 text-center"
               >
                 <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                   <Inbox size={40} className="text-white/20" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">No guides found</h3>
                 <p className="text-white/40">Try searching for different keywords or categories.</p>
                 <button 
                   onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                   className="mt-6 text-primary font-bold uppercase tracking-widest text-xs hover:underline"
                 >
                   Clear all filters
                 </button>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
