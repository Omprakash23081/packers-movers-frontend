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
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 md:w-24 bg-red-500/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What <span className="text-red-600">Client Says</span>
            </h2>
            <div className="h-px w-12 md:w-24 bg-red-500/30" />
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
              className="flex flex-col min-w-[320px] md:min-w-[380px] group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex">
                {/* Left Side: Thumbnail with Play Button */}
                <div className="relative w-1/2 h-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.clientName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={16} fill="white" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Red Brand Info */}
                <div className="w-1/2 h-full bg-red-600 p-4 flex flex-col justify-center text-white relative whitespace-normal">
                  <div className="text-[10px] font-black leading-tight mb-2 opacity-95 uppercase italic line-clamp-3">
                    PROUDLY SHIFTED OVER 19.76 LAKHS SATISFIED CUSTOMERS WORLDWIDE! EXPERIENCE MATTERS
                  </div>
                  <div className="mt-auto">
                    <h4 className="text-[11px] font-black uppercase mb-1 truncate">{item.clientName}</h4>
                    <p className="text-[10px] font-bold opacity-80 uppercase mb-1 truncate">{item.route}</p>
                    <p className="text-[9px] opacity-70 truncate">{item.gcNo}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-4 space-y-1">
                <h3 className="font-bold text-foreground text-sm group-hover:text-red-500 transition-colors truncate">
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
          <button className="bg-red-600 text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1 hover:shadow-red-600/30 flex items-center gap-2 mx-auto">
            Read more <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </section>
  );
}
