'use client';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent service by Sunita Cargo! They moved my entire 3BHK from Noida to Pune without a single scratch. The team was professional and handled fragile items with extra care. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Priya Deshmukh",
    date: "1 month ago",
    rating: 5,
    text: "Truly professional packers and movers in Delhi NCR. Their rates are transparent, and there were no hidden charges. The packing quality was superior compared to Agarwal Packers I used earlier.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Verma",
    date: "3 weeks ago",
    rating: 5,
    text: "I was worried about moving my car, but Sunita Cargo handled it perfectly. Real-time tracking was available, and my vehicle reached Bangalore safely. Best value for money service.",
    avatar: "https://i.pravatar.cc/150?u=amit"
  }
];

export default function GoogleReviews() {
  // Schema for Google Rich Snippets
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "Sunita Cargo Packers and Movers",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "842"
    }
  };

  return (
    <section className="py-24 bg-section/30 overflow-hidden">
      {/* Injecting JSON-LD for Google Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="w-full px-0 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 px-4 sm:px-0 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-widest mb-4">
              <ShieldCheck size={14} /> Verified Social Proof
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Trusted by Thousands of <br />
              <span className="text-primary italic">Happy Families.</span>
            </h2>
          </div>

          <div className="bg-background/50 backdrop-blur-md border border-border p-6 rounded-3xl flex items-center gap-6 shadow-xl">
             <div className="text-center">
                <div className="text-4xl font-black text-white">4.9</div>
                <div className="flex text-yellow-500 gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">842+ Google Reviews</div>
             </div>
             <div className="h-12 w-px bg-border" />
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                   <CheckCircle2 size={14} className="text-emerald-500" /> 100% Verified
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                   <CheckCircle2 size={14} className="text-emerald-500" /> Real Customers
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border-y sm:border border-border p-8 rounded-none sm:rounded-[2.5rem] shadow-lg hover:border-primary/30 transition-all group relative"
            >
              <div className="absolute top-8 right-8">
                <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity fill-current">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  </div>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{review.date}</p>
                </div>
              </div>

              <div className="flex text-yellow-500 gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={12} fill="currentColor" />)}
              </div>

              <p className="text-white/70 leading-relaxed italic text-sm">
                &quot;{review.text}&quot;
              </p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest border border-emerald-500/10">
                  Verified Customer
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/feedback" 
            className="inline-block px-10 py-4 rounded-full border border-primary/20 bg-primary/10 text-primary font-black hover:bg-primary hover:text-white transition-all text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20"
          >
            View All Verified Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
