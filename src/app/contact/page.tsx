'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          firstName: formData.fullName,
          lastName: '',
          movingFrom: 'Contact Page',
          movingTo: 'Contact Page',
          serviceType: 'Inquiry',
          message: 'General Inquiry via Contact Page' // Default message since field is removed
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      alert('Failed to connect to the server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Head Office (Nagpur)",
      detail: "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi, Nagpur, Maharashtra 440023",
      bgColor: "bg-blue-500/15",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Phone,
      title: "24/7 Helpline",
      detail: "+91 7387661300",
      isLink: true,
      link: "tel:+917387661300",
      bgColor: "bg-indigo-500/15",
      borderColor: "border-indigo-500/30",
      iconBg: "bg-indigo-500/20",
      iconColor: "text-indigo-400"
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "info.sunitacargopackersmovers@gmail.com",
      isLink: true,
      link: "mailto:info.sunitacargopackersmovers@gmail.com",
      bgColor: "bg-purple-500/15",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400"
    }
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0d10] text-white selection:bg-indigo-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <section className="pt-20 pb-16 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-black text-indigo-400 mb-6 uppercase tracking-[0.2em] backdrop-blur-md">
                Contact Our Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
                Get in <span className="text-indigo-500">Touch</span>
              </h1>
              <p className="text-base md:text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                We're here to make your relocation seamless. Drop us a message or call our 24/7 hotline for instant support from our Nagpur team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => scrollToSection('contact-form')}
                  className="rounded-2xl bg-indigo-500 hover:bg-indigo-600 px-8 h-14 font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-indigo-500/20 active:scale-95 transition-all"
                >
                  Get in Touch
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact-details')}
                  variant="outline"
                  className="rounded-2xl border-white/20 hover:bg-white/5 px-8 h-14 font-black text-xs tracking-[0.2em] uppercase active:scale-95 transition-all"
                >
                  Connect Info
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 w-full px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

            {/* Contact Details */}
            <motion.div
              id="contact-details"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-black text-indigo-400 tracking-tighter mb-6 underline decoration-indigo-500/30 underline-offset-8">Contact Information</h2>
                <p className="text-white/40 mb-8 leading-relaxed max-w-lg">
                  Whether you need a quick quote for house shifting, have a question about your ongoing transit, or want to partner with us, our dedicated team in Nagpur is always ready to assist.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item, idx) => {
                  const CardWrapper = item.isLink ? 'a' : 'div';
                  return (
                    <CardWrapper
                      key={idx}
                      href={item.isLink ? item.link : undefined}
                      className={`block group ${item.isLink ? 'cursor-pointer' : ''}`}
                    >
                      <Card className={`group border-white/10 ${item.bgColor} backdrop-blur-3xl hover:bg-white/[0.2] transition-all duration-300 rounded-[2rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] ${item.borderColor} hover:${item.borderColor.replace('30', '60')}`}>
                        <CardContent className="p-6 flex items-start gap-5">
                          <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center border border-white/10 ${item.iconColor} group-hover:scale-110 group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500 shadow-lg`}>
                            <item.icon size={22} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-black text-[10px] uppercase tracking-widest text-white/40 mb-1">{item.title}</h3>
                            <p className={`text-lg font-bold text-white group-hover:text-white transition-colors block leading-tight break-words whitespace-pre-wrap ${item.isLink ? 'underline-offset-4 decoration-white/20' : ''}`}>
                              {item.detail}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CardWrapper>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-indigo-500/15 rounded-[2.5rem] blur-2xl opacity-40" />
              <Card className="relative border-white/20 bg-white/[0.12] backdrop-blur-[100px] p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />

                <h3 className="text-2xl font-black text-indigo-400 tracking-tighter mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <CheckCircle size={44} className="text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white tracking-tighter">Transmission Successful!</h3>
                      <p className="text-white/50 max-w-xs mx-auto text-sm">Your inquiry has been received. Our Nagpur team will connect with you soon.</p>
                    </div>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-2xl border-white/20 hover:bg-white/10 px-8 h-14 font-bold text-[10px] tracking-widest uppercase text-white hover:text-white"
                    >
                      SEND ANOTHER MESSAGE
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { id: 'fullName', label: 'Full Name', placeholder: 'Enter Full Name', type: 'text' },
                      { id: 'email', label: 'Email Address', placeholder: 'Enter Email Address', type: 'email' },
                      { id: 'phone', label: 'Phone Number', placeholder: 'Enter Phone Number', type: 'tel' }
                    ].map((field) => (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-[10px] font-black text-white/40 ml-1 uppercase tracking-widest">{field.label}</label>
                        <input
                          id={field.id}
                          type={field.type}
                          className="w-full h-14 px-6 rounded-2xl border border-white/25 bg-indigo-950/20 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all text-white font-bold placeholder:text-white/20"
                          placeholder={field.placeholder}
                          required
                          value={(formData as any)[field.id]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        />
                      </div>
                    ))}

                    <Button type="submit" size="lg" className="w-full h-16 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl bg-indigo-500 hover:bg-indigo-600 shadow-xl shadow-indigo-500/30 active:scale-[0.98] transition-all border-none" disabled={loading}>
                      {loading ? <Loader2 className="animate-spin mr-2" /> : "Transmit Request"}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

          </div>
        </section>
      </div>
    </div>
  );
}
