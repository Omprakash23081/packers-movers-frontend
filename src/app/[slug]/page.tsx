import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { 
  Truck, ShieldCheck, CheckCircle2, MapPin, Star, Clock, 
  Phone, ChevronRight, Info, HelpCircle, Award, Users, 
  Settings, Zap, Heart, Box, Navigation, IndianRupee
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generateIntro, generateLocalPricing, generateLocalizedFAQs, generateLocalInsights } from '@/lib/content-engine';
import { getCityTrait } from '@/lib/city-data';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import RouteMatrix from '@/components/seo/RouteMatrix';
import PricingGrid from '@/components/home/PricingGrid';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

const CostCalculator = dynamic(() => import('@/components/home/CostCalculator'));
const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews'));
const VisualProof = dynamic(() => import('@/components/home/VisualProof'));

// Data constants
const cities = [
  "agra", "ahmedabad", "allahabad", "alwar", "ambala", "ankleshwar", "aurangabad", "banaras", 
  "bangalore", "baroda", "bhiwandi", "bhopal", "bhubaneswar", "bhuj", "bikaner", "calicut", 
  "chandigarh", "chennai", "cochin", "coimbatore", "cuttack", "dehradun", "delhi", "dwarka", 
  "faridabad", "gandhidham", "ghaziabad", "goa", "greaternoida", "gurgaon", "guwahati", 
  "gwalior", "haridwar", "hisar", "hubli", "hyderabad", "indore", "jabalpur", "jaipur", 
  "jammu", "jamshedpur", "jamnagar", "jodhpur", "kalighat", "kanpur", "kolhapur", "kolkata", 
  "korba", "kota", "kottayam", "lucknow", "ludhiana", "madurai", "manesar", "mangalore", 
  "meerut", "mumbai", "mysore", "nagpur", "nasik", "navimumbai", "neemrana", "noida", 
  "panipat", "patalganga", "patna", "pondicherry", "portblair", "pune", "raigarh", "raipur", 
  "rajkot", "ranchi", "renukoot", "rourkela", "rudrapur", "secunderabad", "shillong", 
  "siliguri", "surat", "tinsukia", "tirupur", "trichy", "trivandrum", "udaipur", "vapi", 
  "varanasi", "vijayawada", "visakhapatnam"
];

const services = [
  "home-shifting",
  "house-shifting",
  "office-relocation",
  "car-transport",
  "car-bike-transport",
  "bike-transport",
  "warehouse-storage",
  "packers-and-movers"
];

// Content Generation Helpers
const getTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  // 1. Service + City combinations
  services.forEach(service => {
    cities.forEach(city => {
      const slug = `${service}-${city}`;
      // Prevent conflict with the static /packers-and-movers-nagpur folder
      if (slug !== 'packers-and-movers-nagpur') {
        params.push({ slug });
      }
    });
  });

  // 2. City to City + Service
  // For static generation, we'll pick top routes to keep build time reasonable
  // In production, you can generate all 400+ if needed.
  const topCities = ["delhi", "mumbai", "pune", "bangalore", "nagpur", "hyderabad"];
  topCities.forEach(from => {
    topCities.forEach(to => {
      if (from !== to) {
        params.push({ slug: `${from}-to-${to}-packers-movers` });
        params.push({ slug: `${from}-to-${to}-car-transport` });
      }
    });
  });

  return params;
}

type Props = {
  params: { slug: string };
};

type SlugData = 
  | { type: 'route', from: string, to: string, service: string }
  | { type: 'service-city', service: string, city: string };

function parseSlug(slug: string): SlugData | null {
  // Pattern 1: [from]-to-[to]-[service]
  const routeMatch = slug.match(/^([a-z-]+)-to-([a-z-]+)-(packers-movers|car-transport|home-shifting|office-relocation|bike-transport|warehouse-storage)$/);
  if (routeMatch) {
    return {
       type: 'route',
       from: routeMatch[1],
       to: routeMatch[2],
       service: routeMatch[3]
    };
  }

  // Pattern 2: [service]-[city]
  // Normalize packers-movers to packers-and-movers for consistency
  const normalizedSlug = slug.startsWith('packers-movers-') 
    ? slug.replace('packers-movers-', 'packers-and-movers-')
    : slug;

  for (const service of services) {
    if (normalizedSlug.startsWith(`${service}-`)) {
      const city = normalizedSlug.replace(`${service}-`, '');
      if (cities.includes(city)) {
        return {
          type: 'service-city',
          service,
          city
        };
      }
    }
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = parseSlug(params.slug);
  if (!data) return { title: 'Not Found' };

  // Normalize canonical URL to packers-and-movers to avoid duplicate content
  const normalizedSlug = params.slug.startsWith('packers-movers-') 
    ? params.slug.replace('packers-movers-', 'packers-and-movers-')
    : params.slug;
  const canonicalUrl = `https://sunitacargopackersmovers.com/${normalizedSlug}`;

  const serviceName = getTitleCase(data.service);
  const cityName = data.type === 'service-city' ? getTitleCase(data.city) : getTitleCase(data.from);
  const intro = data.type === 'service-city' ? generateIntro(data.city, data.service) : '';

  if (data.type === 'service-city') {
    return {
      title: `Top-Rated ${serviceName} in ${cityName} | IBA Approved | Sunita Cargo`,
      description: `Verified ${serviceName.toLowerCase()} in ${cityName}. Sunita Cargo offers 100% safe house shifting, car transport, and office relocation. IBA-approved fleet & expert packing.`,
      alternates: {
        canonical: canonicalUrl,
      }
    };
  } else {
    const fromCity = getTitleCase(data.from!);
    const toCity = getTitleCase(data.to!);
    return {
      title: `${serviceName} from ${fromCity} to ${toCity} | Safe & Fast | Sunita Cargo`,
      description: `Secure ${serviceName.toLowerCase()} from ${fromCity} to ${toCity}. Sunita Cargo Packers Movers provides high-speed intercity transit with real-time GPS tracking.`,
      alternates: {
        canonical: canonicalUrl,
      }
    };
  }
}

export default function DynamicSEOPage({ params }: Props) {
  const data = parseSlug(params.slug);
  if (!data) notFound();

  const isRoute = data.type === 'route';
  const mainTitle = data.type === 'route'
    ? `${getTitleCase(data.service)} from ${getTitleCase(data.from)} to ${getTitleCase(data.to)}`
    : `${getTitleCase(data.service)} in ${getTitleCase(data.city)}`;
  
  const targetCity = data.type === 'route' ? getTitleCase(data.to) : getTitleCase(data.city);
  const originCity = data.type === 'route' ? getTitleCase(data.from) : targetCity;
  const serviceName = getTitleCase(data.service);

  return (
    <div className="w-full">
      <LocalBusinessSchema city={targetCity} />
      <FAQSchema faqs={data.type === 'service-city' ? generateLocalizedFAQs(data.city, serviceName) : []} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-background pt-24 pb-20 border-b border-border text-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <Truck size={16} className="mr-2" />
            Licensed {serviceName} Experts
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
             {mainTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-300 text-balance">
            {isRoute 
              ? `Planning a move from ${originCity} to ${targetCity}? Sunita Cargo Packers Movers provides the most secure and price-effective intercity ${serviceName.toLowerCase()} services with a 100% damage-free guarantee.`
              : generateIntro(data.city!, data.service!)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in duration-1000 delay-500">
            <Button asChild size="lg" className="rounded-full shadow-apple h-14 px-8 text-lg font-bold cursor-pointer">
              <a href="#calculator">Calculate Shifting Cost</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur-md h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/20 transition-all">
              <a href="tel:+917387661300">Call Now: +91 7387661300</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <div className="bg-section/50 border-b border-border py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
           {['ISO 9001:2015 Certified', 'IBA Approved Fleet', '15+ Years Excellence', 'Registered & Insured', '24/7 Live Support'].map(badge => (
             <div key={badge} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
               <ShieldCheck size={14} className="text-primary"/> {badge}
             </div>
           ))}
        </div>
      </div>



      {/* Main Content Area */}
      <section className="py-20 w-full px-2 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column (Main SEO Content) */}
          <div className="lg:col-span-8 space-y-20 order-3 lg:order-1">
            
            {/* 1. In-Depth Introduction (SEO Boost) */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground border-l-8 border-primary pl-6 mb-8">
                Your Trusted Partner for {serviceName} in {targetCity}
              </h2>
              <p className="text-muted-foreground leading-extra-relaxed">
                Relocating home or business can be one of life&apos;s most stressful events. At Sunita Cargo Packers Movers, we have spent over 15 years refining our process to make <strong>{serviceName.toLowerCase()} in {targetCity}</strong> as seamless and worry-free as possible. {data.type === 'service-city' && generateIntro(data.city, data.service)} Whether you are moving down the street or shifting {isRoute ? `from ${originCity} to ${targetCity}` : `across the country`}, our team is equipped with the skills and passion to deliver perfection.
              </p>
              <p className="text-muted-foreground leading-extra-relaxed">
                {data.type === 'route' 
                   ? `Our specialized ${serviceName.toLowerCase()} between ${originCity} and ${targetCity} is marked by thousands of successful long-distance deliveries.`
                   : `Our presence in ${targetCity} is marked by thousands of successful moves and a reputation for being the most reliable logistics provider in ${getTitleCase(getCityTrait(data.city).tier)} regions.`} We don&apos;t just move items; we move feelings, memories, and valuable assets. Our commitment to using high-standard packing materials like triple-layer bubble wrap, edge protectors, and customized wooden crates for fragile items sets us apart from the competition.
              </p>

              <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl mt-8">
                 <div className="flex items-center gap-3 mb-4 text-primary">
                    <Navigation size={24} />
                    <h3 className="text-xl font-bold m-0 text-foreground">Local Shifting Insights for {targetCity}</h3>
                 </div>
                 <p className="text-sm text-muted-foreground italic leading-relaxed m-0">
                    {generateLocalInsights(data.type === 'service-city' ? data.city : 'india')}
                 </p>
              </div>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4">
                    <Award className="text-accent shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-foreground">Award-Winning Service</h4>
                      <p className="text-sm text-muted-foreground">Recognized as the best regional packers and movers for 3 consecutive years.</p>
                    </div>
                 </div>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4">
                    <Users className="text-primary shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-foreground">50,000+ Happy Families</h4>
                      <p className="text-sm text-muted-foreground">Join our growing community of satisfied customers across India.</p>
                    </div>
                 </div>
              </div>

              {!isRoute && <RouteMatrix city={targetCity} />}
              
              {/* 3.5 Localized Pricing Table (SEO Depth) */}
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500"><IndianRupee /></div>
                    <h2 className="text-3xl font-black tracking-tight text-foreground">Moving Cost Breakdown in {targetCity}</h2>
                 </div>
                 <div className="overflow-hidden rounded-3xl border border-border bg-section/10">
                    <table className="w-full text-left">
                       <thead className="bg-white/5">
                          <tr>
                             <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Home/Office Size</th>
                             <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/40">Estimated Price</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-border">
                          {generateLocalPricing(data.type === 'service-city' ? data.city : 'india', serviceName).table?.map((row, idx) => (
                             <tr key={idx} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-bold text-white">{row.size}</td>
                                <td className="px-6 py-4 font-black text-primary">{row.price}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>

            {/* 2. Process Section - Expanded */}
            <div className="space-y-10">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-black tracking-tight text-foreground">The Sunita Cargo {serviceName} Workflow</h2>
                <p className="text-muted-foreground mt-2">Professionalism at every step of your journey in {targetCity}.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { step: '01', title: 'Free Asset Survey', desc: 'Our experts conduct a detailed audit of your belongings to provide a fixed-price, transparent quotation with no hidden charges.', icon: <Box size={20}/> },
                  { step: '02', title: '5-Layer Premium Packing', desc: 'Items are wrapped in multiple layers of protection, including heavy-duty sheets and waterproof film to withstand all weather conditions.', icon: <Settings size={20}/> },
                  { step: '03', title: 'Safe Loading & Transit', desc: `Securely loaded into specialized moving containers with GPS monitoring for real-time updates as your goods move ${isRoute ? "between cities" : "locally"}.`, icon: <Navigation size={20}/> },
                  { step: '04', title: 'Unpacking & Setup', desc: 'On arrival, our team doesn’t just unload; we help you set up your new home or office exactly how you want it.', icon: <Heart size={20}/> }
                ].map((item, idx) => (
                  <div key={idx} className="bg-section/30 p-8 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                        {item.icon}
                      </div>
                      <span className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors uppercase italic">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-extrabold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

             {/* 3. Competitive Advantage (Long-form content) */}
             <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Why We Are Different From Other Packers and Movers in {targetCity}</h2>
                <p>
                   Most logistics companies in {targetCity} rely on third-party laborers and open trucks. At Sunita Cargo Packers Movers, we maintain our own fleet and a permanent staff of trained professionals. This control over our operations ensures that we can maintain a <strong>near-zero damage rate</strong> over thousands of moves.
                </p>
                <p>
                   Our specialized services for {serviceName.toLowerCase()} are designed to cater to the specific needs of {targetCity} residents. Whether it&apos;s navigating narrow residential lanes or coordinating with high-rise apartment management, we have the experience to handle local challenges effortlessly.
                </p>
                
                <div className="not-prose bg-gradient-to-br from-section to-background p-8 rounded-[2.5rem] border border-white/5 my-12">
                   <h3 className="text-xl font-black mb-6 text-center text-primary uppercase tracking-[0.2em]">Our Shifting Checklist</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        'Professional pre-move survey', 'Customized packing strategies', 'Door-to-door transportation', 'Consolidated or dedicated truck options', 'Warehousing solutions for up to 6 months', 'Post-move support and unpacking'
                      ].map(check => (
                        <div key={check} className="flex gap-3 items-center text-sm font-bold opacity-80">
                           <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                              <CheckCircle2 size={12}/>
                           </div>
                           {check}
                        </div>
                      ))}
                   </div>
                </div>
             </div>

            {/* 4. FAQ Section - Enhanced with city references */}
            <div className="space-y-10">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><HelpCircle /></div>
                 <h2 className="text-3xl font-black tracking-tight text-foreground">Questions People Ask About {serviceName} in {targetCity}</h2>
               </div>
               <div className="space-y-6">
                 {(isRoute ? [
                    { question: `What are the average charges for ${serviceName.toLowerCase()} from ${originCity} to ${targetCity}?`, answer: `Intercity shifting from ${originCity} to ${targetCity} depends on distance (approx. long-distance) and volume, with costs varying from ₹15,000 to ₹45,000 depending on the vehicle size and packing requirements.` },
                    { question: `How many days does it take to move from ${originCity} to ${targetCity}?`, answer: `Transit time depends on the distance and road conditions. Typically, a move from ${originCity} to ${targetCity} takes 3-7 days for delivery.` }
                 ] : generateLocalizedFAQs(data.city!, serviceName)).map((faq, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-border bg-section/20 hover:bg-section/40 transition-all duration-300">
                      <h4 className="font-bold text-lg mb-3 flex gap-3">
                        <span className="text-primary font-black">Q.</span> {faq.question}
                      </h4>
                      <p className="text-muted-foreground pl-7 text-sm leading-relaxed border-l-2 border-primary/20">{faq.answer}</p>
                    </div>
                 ))}
               </div>
            </div>

            {/* 5. Reviews Snippet (Boost CTR) */}
            <div className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10 space-y-8 overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-foreground">Verified Customer Reviews in {targetCity}</h3>
                  <div className="flex items-center gap-1 text-accent">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor"/>)}
                  </div>
               </div>
               <TestimonialCarousel />
               <div className="text-center">
                 <Link href="/feedback" className="text-primary font-bold hover:underline">Read all 1,200+ Google Reviews</Link>
               </div>
            </div>

             {/* 6. Internal Linking / Reach - Optimized */}
             <div className="pt-20 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">
                   <div>
                     <h3 className="text-xl font-bold text-foreground">Our Service Network</h3>
                     <p className="text-sm text-muted-foreground">Find us in every major city across India.</p>
                   </div>
                   <Button variant="outline" className="rounded-full">View All Serviceable Areas</Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                   {cities.map(c => (
                     <Link key={c} href={`/${serviceName.toLowerCase().replace(/\s/g, '-')}-${c}`} className="group flex items-center gap-2 p-3 rounded-xl border border-border bg-white/5 hover:bg-primary hover:border-primary transition-all duration-300">
                       <MapPin size={12} className="text-primary group-hover:text-white" />
                       <span className="text-[11px] font-bold text-muted-foreground group-hover:text-white uppercase tracking-wider">{getTitleCase(c)}</span>
                     </Link>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 z-20 order-1 lg:order-2" id="quote">
            <Card className="apple-card border-none bg-[#0B1120] border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent w-full" />
              <CardContent className="p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <Zap size={20} fill="currentColor"/>
                  <span className="text-xs font-black uppercase tracking-[0.2em]">Priority Callback</span>
                </div>
                <h3 className="font-black text-3xl mb-3 text-white">Save Up To 20%</h3>
                <p className="text-sm text-secondary mb-8 leading-relaxed font-medium">Connect with an expert in {targetCity} and get a customized moving estimate in 5 minutes.</p>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Full Name</label>
                    <input type="text" className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" placeholder="Enter Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Mobile number</label>
                    <input type="tel" className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" placeholder="Enter Mobile Number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Moving To</label>
                    <input type="text" className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" placeholder="Enter Destination City" />
                  </div>
                  <Button className="w-full h-14 text-lg font-black rounded-2xl mt-4 bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all">Get Instant Estimate</Button>
                  <div className="flex items-center justify-center gap-4 mt-6 opacity-40">
                    <ShieldCheck size={16}/>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Confidential</span>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
               <Link href="tel:+917387661300" className="flex items-center gap-4 p-6 rounded-3xl bg-section border border-border group hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Phone size={24}/></div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Speak to Expert</p>
                    <p className="text-lg font-black text-foreground">+91 7387661300</p>
                  </div>
               </Link>
               
               <div className="p-8 rounded-[2rem] bg-gradient-to-br from-section to-background border border-border space-y-6">
                  <div className="flex items-center gap-3">
                     <Info className="text-primary" size={24} />
                     <h4 className="font-extrabold text-lg">Quick Guide</h4>
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-muted-foreground font-medium">Service Area:</span> <span className="font-black">{targetCity}</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-muted-foreground font-medium">Starting Price:</span> <span className="font-black text-primary">{data.type === 'route' ? '₹15,000' : generateLocalPricing(data.city, serviceName).start}</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-muted-foreground font-medium">Transit Type:</span> <span className="font-black">Closed Container</span></li>
                    <li className="flex justify-between"><span className="text-muted-foreground font-medium">Insurance:</span> <span className="font-black">Available</span></li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 w-full px-2 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Estimated Moving Charges in {targetCity}</h2>
          <p className="text-muted-foreground font-medium italic">Transparent pricing based on current Nagpur market rates.</p>
        </div>
        <PricingGrid city={targetCity} />
      </div>

      <VisualProof />
      <GoogleReviews />
    </div>
  );
}
