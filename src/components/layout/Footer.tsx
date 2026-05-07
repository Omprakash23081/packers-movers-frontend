import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Star } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">

        {/* Pre-footer CTA */}
        <div className="pb-12 mb-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-white/5 to-white/0 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-[80px]" />
            <div className="mb-8 md:mb-0 relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Ready for a stress-free move?</h3>
              <p className="text-white/70 text-lg font-medium">Join 10,000+ happy families. Get your instant quote in 2 minutes.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center relative z-10 w-full md:w-auto mt-8 md:mt-0">
              <Link href="/contact" className="w-full md:w-auto">
                <button className="bg-accent text-white text-base md:text-lg px-6 md:px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-xl hover:shadow-accent/20 hover:-translate-y-1 w-full md:w-auto">
                  Get Quick Quote Today
                </button>
              </Link>
              <div className="text-white/80 font-bold tracking-wide flex items-center gap-2 text-sm md:text-base">
                <Phone size={18} className="text-primary" /> <a href="tel:+917387661300" className="hover:text-primary transition-colors whitespace-nowrap">Call +91 7387661300</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

          {/* Brand & Social Proof */}
          <div className="flex flex-col gap-5 text-white/80 col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 text-white">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 shrink-0">
                <Image
                  src="/favicon.ico"
                  alt="Sunita Cargo Packers Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-extrabold text-2xl sm:text-3xl tracking-tighter">
                Sunita Cargo<span className="text-primary">Packers</span>
              </span>
            </Link>

            <div className="flex items-center gap-2 mt-1 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
              <div className="flex text-yellow-500 gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-white/90 tracking-wide">4.9/5 on Google</span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-white/60 font-medium">
              India&apos;s premium packing and moving service. We handle your belongings with the utmost care, ensuring safe, secure, and on-time deliveries.
            </p>

            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="Facebook" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-transparent transition-all shadow-sm"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-transparent transition-all shadow-sm"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-transparent transition-all shadow-sm"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-transparent transition-all shadow-sm"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5"  >
            <h3 className="text-lg font-bold tracking-tight text-white line-clamp-1">Our Services</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60 font-medium">
              <li><Link href="/packers-and-movers-nagpur" className="hover:text-primary transition flex items-center gap-2 font-bold text-white"><ChevronRight size={14} className="text-primary" /> Packers & Movers Nagpur</Link></li>
              <li><Link href="/house-shifting-nagpur" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> House Shifting</Link></li>
              <li><Link href="/office-relocation-nagpur" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Office Relocation</Link></li>
              <li><Link href="/car-transport-nagpur" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Vehicle Transport</Link></li>
              <li><Link href="/warehouse-storage-nagpur" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Warehouse Storage</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold tracking-tight text-white line-clamp-1">Support</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/60 font-medium">
              <li><Link href="/about" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> About Us</Link></li>
              <li><Link href="/track" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Track Shipment</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Contact Us</Link></li>
              <li><Link href="/feedback" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> Customer Feedback</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition flex items-center gap-2"><ChevronRight size={14} className="text-primary" /> FAQ & Policies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold tracking-tight text-white line-clamp-1">Contact Info</h3>
            <ul className="flex flex-col gap-5 text-sm text-white/60 font-medium">
              <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition">
                  <MapPin className="text-primary shrink-0" size={16} />
                </div>
                <span className="mt-1">Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi, Nagpur 440023</span>
              </li>
              <li className="flex items-center gap-3 group transition">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition">
                  <Phone className="text-primary shrink-0" size={16} />
                </div>
                <a href="tel:+917387661300" className="hover:text-white transition cursor-pointer">+91 7387661300</a>
              </li>
              <li className="flex items-center gap-3 group transition">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 transition">
                  <Mail className="text-primary shrink-0" size={16} />
                </div>
                <a href="mailto:info.sunitacargopackersmovers@gmail.com" className="hover:text-white transition cursor-pointer break-all">info.sunitacargopackersmovers@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40 font-medium">
          <p>© {new Date().getFullYear()} Sunita Cargo Packers Movers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
