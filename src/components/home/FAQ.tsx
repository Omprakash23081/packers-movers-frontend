'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What are the packers and movers charges in Nagpur?",
    answer: "Local shifting within Nagpur starts from ₹3,500 for a 1BHK and can go up to ₹18,000 for a 3BHK villa. For inter-city moves like Nagpur to Pune, the cost depends on the truck size (TATA Ace vs 19ft Container) and distance. We provide fixed-price quotes that include packing materials, labor, and transport."
  },
  {
    question: "Do you provide car and bike transport service?",
    answer: "Yes, we are experts in vehicle relocation. We use specialized hydraulic car carriers and bike crates with 5-layer packing to ensure your vehicles reach scratch-free. We also provide GPS tracking for all vehicle transits across India."
  },
  {
    question: "How do you ensure the safety of my fragile items?",
    answer: "We use a 'Zero-Damage' packing protocol. This includes triple-layer bubble wrap for glassware, foam padding for electronics, and customized wooden crates for high-value antiques. Every move is handled by our permanent, trained staff—not daily laborers."
  },
  {
    question: "What is your booking and claim process?",
    answer: "We recommend booking at least 3-5 days in advance. In the rare case of damage, we have a transparent claim process. If you have taken transit insurance, we assist you in settling the claim with the insurance provider within 7-10 working days."
  },
  {
    question: "Are there any hidden costs like Toll or Green Tax?",
    answer: "No. Our quotations are 'All-Inclusive'. The price we commit during the site survey includes GST, Toll taxes, Green taxes, and loading/unloading charges. You don't have to pay a single rupee extra on delivery day."
  }
];

// FAQ Schema for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 bg-muted/10 relative overflow-hidden">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="w-full px-4 sm:px-6 relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
          >
            <MessageCircleQuestion size={16} className="mr-2" />
            Help & Support
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about our moving services, pricing, and safety guarantees.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`border-y sm:border rounded-none sm:rounded-2xl bg-white dark:bg-black/50 overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary/50 shadow-lg shadow-primary/5' 
                  : 'border-border/60 hover:border-primary/30 shadow-sm'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary/10' : 'bg-muted group-hover:bg-primary/5'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : 'text-muted-foreground group-hover:text-primary'}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/40 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
