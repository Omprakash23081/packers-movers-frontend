'use client';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '@/lib/api-config';

const testimonials = [
  {
    _id: 't1',
    fullName: 'Rahul Sharma',
    service: 'House Shifting',
    message: 'Sunita Cargo Packers made my move from Civil Lines to Pune completely stress-free. The packing was excellent, and not a single item was damaged. Their team knew exactly how to handle the heavy furniture.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    _id: 't2',
    fullName: 'Mrs. Kulkarni',
    service: 'Local Relocation',
    message: 'Shifted from Dharampeth to Manish Nagar. I was worried about the narrow lanes but the driver was incredibly skilled. The loading was done very quickly and professionally.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=44'
  },
  {
    _id: 't3',
    fullName: 'Priya Verma',
    service: 'Office Relocation',
    message: 'We hired them for moving our 50-seater IT office in MIHAN. They managed everything systematically over the weekend with zero downtime for our business operations.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    _id: 't4',
    fullName: 'Suresh Deshmukh',
    service: 'Vehicle Transport',
    message: 'Moved my car from Nagpur to Bangalore. The GPS tracking was spot on and the car arrived without a single scratch. Best experience with packers and movers so far.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=68'
  },
  {
    _id: 't5',
    fullName: 'Amit Patel',
    service: 'Warehouse Storage',
    message: 'Stored my household goods in their Wadi warehouse for 3 months. Everything was perfectly safe and clean when I took delivery. Excellent management!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=15'
  }
];

export default function ReviewsWidget() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [allReviews, setAllReviews] = useState(testimonials);

  useEffect(() => {
    const fetchRecentReviews = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/feedback`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.feedbacks && data.feedbacks.length > 0) {
            // Map backend fields to component fields if necessary
            const fetched = data.feedbacks.map((f: any) => ({
              _id: f._id,
              fullName: f.fullName,
              message: f.message,
              rating: f.rating,
              service: 'Verified Customer',
              avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.fullName)}&background=random`
            }));

            setAllReviews(prev => {
              const uniqueNew = fetched.filter((f: any) => !prev.some(p => p._id === f._id));
              return [...uniqueNew, ...prev];
            });
          }
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchRecentReviews();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Always clear existing interval before starting a new one
        if (interval) clearInterval(interval);

        if (entry.isIntersecting) {
          interval = setInterval(() => {
            if (scrollRef.current) {
              const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
              if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              } else {
                scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
              }
            }
          }, 4000); 
        }
      });
    }, { threshold: 0.1 });

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/3 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              Customer Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Don&apos;t Just Take <br /><span className="text-primary">Our Word</span> For It.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg font-medium"
            >
              Read what our recent clients have to say about their moving experience with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-8 bg-white dark:bg-black/50 p-4 rounded-2xl shadow-sm border border-border/50 w-fit"
            >
              <div className="text-4xl font-black">4.9</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="text-sm font-bold text-muted-foreground">Based on 1,200+ Reviews</div>
              </div>
            </motion.div>
          </div>

          <div
            ref={scrollRef}
            className="w-full md:w-2/3 flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {allReviews.map((testimonial, index) => (
              <motion.div
                key={testimonial._id || index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="min-w-[96%] sm:min-w-[350px] md:min-w-[400px] bg-[#0B1224] backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group snap-center shadow-2xl"
              >
                {/* Google Logo */}
                <div className="absolute top-5 right-5 opacity-40">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.16 5.4-7.84 5.4-4.8 0-8.72-3.96-8.72-8.6s3.92-8.6 8.72-8.6c2.8 0 4.64 1.16 5.68 2.16l2.6-2.6C19.12 1.28 16.08 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.2 0 11.92-5.04 11.92-12.16 0-.8-.08-1.44-.24-2.08h-11.68z" />
                  </svg>
                </div>

                {/* User Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <NextImage
                      src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.fullName)}&background=random`}
                      alt={testimonial.fullName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-white text-base leading-none">{testimonial.fullName}</h4>
                      <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-white w-2.5 h-2.5" />
                      </div>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">
                      {testimonial.service || 'Verified Customer'}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" : "text-white/10"} />
                  ))}
                </div>

                {/* Message */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-medium italic line-clamp-4">
                  &quot;{testimonial.message}&quot;
                </p>

                {/* Verified Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                  Verified Purchase
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
