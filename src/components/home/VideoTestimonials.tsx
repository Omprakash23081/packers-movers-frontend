'use client';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const videoTestimonials = [
  {
    id: 1,
    clientName: 'MR. PRAFULLA KUMAR MOHAPATRA',
    role: 'Asst General Manager, Indian Overseas Bank',
    route: 'CHENNAI TO BHUBANESWAR',
    gcNo: 'GC NO. GCCHE202108714',
    thumbnail: 'https://i.pravatar.cc/400?img=11',
    videoTitle: 'Moving - From Chennai To Bhubaneswar'
  },
  {
    id: 2,
    clientName: 'MR. KULDEEP PATHAK',
    role: 'Assistant Manager, Pernod Ricard India Ltd.',
    route: 'ALLAHABAD TO AGRA',
    gcNo: 'GC NO. GCPRG202100058',
    thumbnail: 'https://i.pravatar.cc/400?img=12',
    videoTitle: 'Moving - From Allahabad To Agra'
  },
  {
    id: 3,
    clientName: 'MR. VIKRAM THAKUR',
    role: 'Asst Manager, Bacardi India Pvt. Ltd.',
    route: 'GOA TO KASHIPUR',
    gcNo: 'GC NO. GCGOA202100602',
    thumbnail: 'https://i.pravatar.cc/400?img=13',
    videoTitle: 'Moving - From Goa To Kashipur'
  },
  {
    id: 4,
    clientName: 'MR. SUNIL KUMAR',
    role: 'Asst General Manager, ACC Cements',
    route: 'GURUGRAM TO CHANDIGARH',
    gcNo: 'GC NO. GCGRG202100341',
    thumbnail: 'https://i.pravatar.cc/400?img=14',
    videoTitle: 'Moving - From Gurugram To Chandigarh'
  }
];

// Duplicate for marquee
const marqueeItems = [...videoTestimonials, ...videoTestimonials];

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border/50">
      <div className="w-full px-4 md:px-6 mb-16">
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight">
              Real <span className="text-primary italic">Moving Stories</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg font-medium">
            We made them happy, You could be next
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden py-4">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: [0, -1624] }} // Move by half the width of duplicated content
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col min-w-[300px] sm:min-w-[340px] md:min-w-[380px] group"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex">
                {/* Left Side: Thumbnail with Play Button */}
                <div className="relative w-[45%] h-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.clientName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={16} fill="white" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Brand Info */}
                <div className="w-[55%] h-full bg-primary p-4 md:p-6 flex flex-col justify-center text-white relative whitespace-normal">
                  <div className="text-[9px] md:text-[10px] font-black leading-tight mb-3 opacity-95 uppercase italic line-clamp-4">
                    NAGPUR'S MOST TRUSTED PACKERS & MOVERS. 15+ YEARS OF EXCELLENCE. 100% SAFE TRANSIT GUARANTEED.
                  </div>
                  <div className="mt-2">
                    <h4 className="text-[10px] md:text-[11px] font-black uppercase mb-1 truncate">{item.clientName}</h4>
                    <p className="text-[9px] md:text-[10px] font-bold opacity-80 uppercase mb-1 truncate">{item.route}</p>
                    <p className="text-[8px] md:text-[9px] opacity-70 truncate">{item.gcNo}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                  {item.videoTitle}
                </h3>
                <p className="text-xs text-muted-foreground font-medium leading-tight truncate">
                  {item.clientName}, {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/feedback">
          <button className="bg-primary text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-xl hover:-translate-y-1 hover:shadow-primary/30 flex items-center gap-2 mx-auto">
            Read more <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </section>
  );
}
