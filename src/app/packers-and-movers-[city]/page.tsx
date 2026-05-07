import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

// Define standard metadata for SEO
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: `Best Packers and Movers in ${city} | Sunita Cargo Packers Movers`,
    description: `Looking for reliable packers and movers in ${city}? Sunita Cargo offers safe, affordable home and office shifting, car transport, and warehousing in ${city}. Get a free quote!`,
    alternates: {
      canonical: `https://sunitacargopackersmovers.com/packers-and-movers-${params.city}`,
    }
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  
  return (
    <main className="pt-20">
      {/* 1. Localized Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1120] to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 animate-pulse">
              Verified Local Shifting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Top Rated Packers and Movers in <span className="text-yellow-400">{city}</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 font-medium">
              Professional relocation services with 100% damage protection. Whether you are moving down the street or across the country, we have {city} covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
                View Pricing
              </a>
              <a href="tel:+917387661300" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEO Content: About Service in City */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 prose lg:prose-lg dark:prose-invert">
          <h2 className="text-3xl font-black mb-6">Reliable Moving Services in {city}</h2>
          <p className="text-lg text-muted-foreground">
            Sunita Cargo Packers and Movers is the leading relocation company operating in {city}. With over 15 years of logistics experience, our local {city} branch is equipped with state-of-the-art closed container trucks, professional packing materials, and an expertly trained crew. 
          </p>
          <p className="text-lg text-muted-foreground">
            We understand the unique challenges of shifting in {city}, from navigating narrow lanes to coordinating with high-rise apartment societies. Our goal is zero downtime and zero damage.
          </p>
        </div>
      </section>

      {/* 3. Price Estimate Table (Crucial for SEO Rich Snippets) */}
      <section id="pricing" className="py-20 bg-section/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Packers and Movers Charges in {city}</h2>
            <p className="text-muted-foreground">Estimated standard rates for local and domestic shifting.</p>
          </div>
          <div className="bg-background rounded-3xl overflow-hidden border border-border shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary/5 text-foreground">
                <tr>
                  <th className="py-4 px-6 font-black uppercase tracking-widest text-xs border-b border-border">House Size</th>
                  <th className="py-4 px-6 font-black uppercase tracking-widest text-xs border-b border-border">Local Shifting (Within {city})</th>
                  <th className="py-4 px-6 font-black uppercase tracking-widest text-xs border-b border-border">Intercity Shifting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-6 font-bold text-foreground">1 BHK</td>
                  <td className="py-4 px-6 text-primary font-medium">₹4,000 - ₹7,000</td>
                  <td className="py-4 px-6 font-medium">₹11,000 - ₹22,000</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-6 font-bold text-foreground">2 BHK</td>
                  <td className="py-4 px-6 text-primary font-medium">₹6,000 - ₹10,000</td>
                  <td className="py-4 px-6 font-medium">₹16,000 - ₹32,000</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-6 font-bold text-foreground">3 BHK</td>
                  <td className="py-4 px-6 text-primary font-medium">₹9,000 - ₹15,000</td>
                  <td className="py-4 px-6 font-medium">₹22,000 - ₹45,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schema Injection */}
      <LocalBusinessSchema city={city} />
      <FAQSchema faqs={[
        { question: `How much do packers and movers cost in ${city}?`, answer: `The cost depends on volume, distance, and packing type. For a 1BHK local shift in ${city}, prices range from ₹4,000 to ₹7,000.` },
        { question: `Are your moving services in ${city} insured?`, answer: `Yes, we provide comprehensive transit insurance for all moves originating or ending in ${city}.` }
      ]} />
    </main>
  );
}
