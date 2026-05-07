import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle2, Truck, ShieldCheck, Clock, MapPin, 
  Phone, Star, Zap, Award, HelpCircle
} from 'lucide-react';
import dynamic from 'next/dynamic';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import FAQSchema from '@/components/seo/FAQSchema';

const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews'));
const VisualProof = dynamic(() => import('@/components/home/VisualProof'));
import NagpurQuoteForm from '@/components/forms/NagpurQuoteForm';

export const metadata: Metadata = {
  title: 'Best Packers and Movers in Nagpur | 15+ Years Experience | Sunita Cargo',
  description: 'Verified packers and movers in Nagpur. Get 100% safe house shifting, bike transport, and office relocation. 5-layer packing, IBA-approved fleet & transparent pricing.',
};

export default function NagpurPage() {
  const nagpurFaqs = [
    { question: 'Are you registered and insured?', answer: 'Yes, we are a GST-registered company based in Wadi, Nagpur. All moves include optional transit insurance to cover 100% of the value.' },
    { question: 'How do you handle moves during Nagpur heat waves?', answer: 'We use industrial-grade, heat-resistant bubble wrap and schedule packing for early mornings to protect your belongings and our team.' },
    { question: 'Do you provide warehousing in Nagpur?', answer: 'Yes, we have a secure, CCTV-monitored warehouse in Wadi for short-term and long-term storage.' },
    { question: 'Will you dismantle my AC and Bed?', answer: 'Yes, our team includes skilled carpenters and electricians for basic dismantling and reassembling in your new Nagpur home.' },
    { question: 'Can I track my truck during the move?', answer: 'For all intercity moves (e.g., Nagpur to Pune), we provide real-time GPS coordinates of your enclosed container.' }
  ];

  return (
    <div className="w-full">
      <LocalBusinessSchema city="Nagpur" />
      <FAQSchema faqs={nagpurFaqs} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs mb-8 border border-primary/20 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700 uppercase tracking-widest">
              <Award size={16} /> #1 Rated Packers & Movers in Nagpur
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-balance">
              Trusted Packers and Movers in <span className="text-primary">Nagpur</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed font-medium">
              Moving your home or office in Nagpur shouldn't be a nightmare. From <strong>Dharampeth</strong> to <strong>Manish Nagar</strong>, we offer safe, stress-free shifting with 15+ years of local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full shadow-apple h-14 px-8 text-lg font-bold">
                <a href="tel:+917387661300">Call +91 7387661300</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 backdrop-blur-md h-14 px-8 text-lg font-bold border-white/10 hover:bg-white/10 transition-all">
                <a href="https://wa.me/917387661300">Get WhatsApp Quote</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Why We Outperform National Brands in the Orange City
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike generic aggregators, Sunita Cargo is a **local Nagpur-based moving company**. We don't outsource your move. Our permanent staff handles everything, ensuring local accountability.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Local Expertise', desc: 'We know the narrow lanes of Wadi and the traffic restrictions in Sitabuldi.' },
                { title: 'Climate-Smart Packing', desc: 'Nagpur\'s 45°C heat requires specialized heat-resistant bubble wrap.' },
                { title: 'Asset-Heavy Fleet', desc: 'We use our own IBA-approved enclosed containers for maximum safety.' },
                { title: 'No Hidden Fees', desc: 'Clear, upfront quotes including all Nagpur entry and Octroi charges.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl -z-10 opacity-50" />
            <div className="bg-section p-5 md:p-12 rounded-[2rem] border border-border space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[10px] uppercase tracking-widest border border-emerald-500/20">
                <ShieldCheck size={14} /> Guaranteed Price
              </div>
              <h3 className="text-3xl font-black">Get a Local Quote</h3>
              <NagpurQuoteForm />
              <p className="text-center text-xs text-muted-foreground">
                <Clock size={12} className="inline mr-1" /> 5-Minute Call Back Guarantee for Nagpur Residents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-section/30">
        <div className="w-full px-2 max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Premium Shifting Services in Nagpur</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Tailored logistics solutions designed to handle the unique challenges of Nagpur's terrain and traffic.
          </p>
        </div>
        
        <div className="w-full px-2 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <MapPin />, title: 'Local House Shifting', desc: 'Moving from Civil Lines to Narendra Nagar? We provide end-to-end local relocation.' },
            { icon: <Truck />, title: 'Intercity Shifting', desc: 'Secure transit to Pune, Mumbai, Hyderabad via Samruddhi Mahamarg.' },
            { icon: <ShieldCheck />, title: 'IBA Approved Transport', desc: 'Reliable vehicle transport with 100% insurance and tracking.' },
            { icon: <Zap />, title: 'Office Relocation', desc: 'Minimal downtime shifting for businesses in MIHAN and Hingna.' },
            { icon: <Clock />, title: 'Storage & Warehouse', desc: 'Safe, CCTV-monitored storage in Wadi for short & long terms.' },
            { icon: <Star />, title: 'Packing Expertise', desc: '5-layer scientific packing to protect against heat and impact.' }
          ].map((service, i) => (
            <div key={i} className="p-10 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Moving Charges in Nagpur (2026)</h2>
          <p className="text-muted-foreground font-medium italic">Honest pricing. No hidden "loading" surprises.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { size: '1 BHK', local: '₹4,500 – ₹9,000', intercity: '₹14,000 – ₹22,000', color: 'bg-blue-500/10 text-blue-500' },
            { size: '2 BHK', local: '₹7,500 – ₹15,000', intercity: '₹20,000 – ₹35,000', color: 'bg-primary/10 text-primary' },
            { size: '3 BHK+', local: '₹12,000 – ₹22,000', intercity: '₹30,000 – ₹55,000+', color: 'bg-purple-500/10 text-purple-500' }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-section border border-border space-y-6 text-center hover:scale-105 transition-transform">
              <div className={`w-20 h-10 rounded-full mx-auto flex items-center justify-center font-black text-xs uppercase tracking-widest ${item.color}`}>
                {item.size} Move
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-muted-foreground uppercase">Local Shifting</p>
                <p className="text-3xl font-black">{item.local}</p>
              </div>
              <div className="h-px bg-border w-1/2 mx-auto" />
              <div className="space-y-2">
                <p className="text-xs font-bold text-muted-foreground uppercase">Intercity (Nagpur → Outside)</p>
                <p className="text-3xl font-black">{item.intercity}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Zap className="text-primary shrink-0" size={32} />
            <p className="font-bold text-lg leading-tight">Need a custom quote? Our local Nagpur agents respond in under 5 minutes.</p>
          </div>
          <Button asChild size="lg" className="rounded-full px-10 font-bold">
            <a href="tel:+917387661300">Call Expert Now</a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-section/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center flex items-center justify-center gap-4">
            <HelpCircle className="text-primary" size={48} /> Nagpur Shifting FAQs
          </h2>
          
          <div className="space-y-8">
            {nagpurFaqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all">
                <h4 className="text-xl font-bold mb-4 flex gap-3">
                  <span className="text-primary font-black">Q.</span> {faq.question}
                </h4>
                <p className="text-muted-foreground pl-8 text-sm leading-relaxed border-l-2 border-primary/20">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-black p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-0 translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10">Ready for a Stress-Free Move in Nagpur?</h2>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Join 10,000+ happy Nagpur families. No damage, no delays, only smooth transitions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl font-bold">
                <a href="tel:+917387661300">Book Your Move Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 border-white/20 px-12 h-16 text-xl font-bold hover:bg-white/10 text-white">
                <a href="https://wa.me/917387661300">WhatsApp Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <VisualProof />
      <GoogleReviews />
    </div>
  );
}
