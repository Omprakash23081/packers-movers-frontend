'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api-config';

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  movingFrom: string;
  movingTo: string;
  serviceType: string;
  phone: string;
}

export default function HeroForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    movingFrom: 'Nagpur',
    movingTo: '',
    serviceType: 'House Shifting',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const submissionData = {
      ...formData,
      firstName: formData.firstName || 'Anonymous',
      lastName: formData.lastName || '',
      email: formData.email || 'inquiry@example.com'
    };

    try {
      const response = await fetch(`${API_BASE_URL}/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Error (${response.status}): ${errorData.message || "Something went wrong. Please try again."}`);
      }
    } catch (err) {
      alert("Failed to connect to server. Please check your internet or if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:pl-10 relative"
      id="quote"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-transparent/20 rounded-full blur-[600px] -z-10" />

      <Card className="glass-panel overflow-hidden relative border-none bg-black/40 dark:bg-black/40 !backdrop-blur-xl rounded-3xl !border-white/20 dark:!border-white/10 !shadow-2xl py-5">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-20" />
        <CardHeader className="relative z-10 border-b border-border/50 pb-5 pt-8">
          <div className="flex items-center space-x-2 w-full">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Get Free Moving Quote</CardTitle>
          </div>
          <p className="text-sm text-white/80 font-medium mt-1">Get a verified estimate within 2 minutes</p>
        </CardHeader>
        <CardContent className="relative z-10 px-4 sm:px-6 py-10 min-h-[400px] flex items-center justify-center">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="space-y-1.5 focus-within:text-primary transition-colors">
                <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-white/80">Full Name</label>
                <input 
                  id="firstName"
                  type="text" 
                  placeholder="Enter Full Name" 
                  className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                  value={formData.firstName || ''}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-1.5 focus-within:text-primary transition-colors">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/80">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="Enter Phone Number" 
                  className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 focus-within:text-primary transition-colors">
                  <label htmlFor="movingFrom" className="text-xs font-bold uppercase tracking-wider text-white/80">Moving From (City)</label>
                  <input 
                    id="movingFrom"
                    type="text" 
                    placeholder="Enter Source City" 
                    className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                    value={formData.movingFrom}
                    onChange={(e) => setFormData({...formData, movingFrom: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-1.5 focus-within:text-primary transition-colors">
                  <label htmlFor="movingTo" className="text-xs font-bold uppercase tracking-wider text-white/80">Moving To (City)</label>
                  <input 
                    id="movingTo"
                    type="text" 
                    placeholder="Enter Destination City" 
                    className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                    value={formData.movingTo}
                    onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5 focus-within:text-primary transition-colors relative">
                <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-wider text-white/80">Select Service</label>
                <div className="relative">
                  <select 
                    id="serviceType"
                    className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer shadow-inner backdrop-blur-md"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    aria-label="Relocation Service Type"
                  >
                    <option className="bg-background text-white" value="">Select Service</option>
                    <option className="bg-background text-white">House Shifting</option>
                    <option className="bg-background text-white">Office Relocation</option>
                    <option className="bg-background text-white">Vehicle Transport</option>
                    <option className="bg-background text-white">Local Shifting</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={18} />
                </div>
              </div>
              <button 
                type="submit"
                disabled={loading}
                aria-label="Submit quote request"
                className="w-full h-14 rounded-xl mt-4 font-bold text-lg bg-accent text-white hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-50 disabled:translate-y-0"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Free Quote"}
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank you for connecting with us!</h3>
              <p className="text-secondary text-white/80">Our team will call you back within 15 minutes to provide a precise quote.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary font-semibold hover:underline mt-4 cursor-pointer"
              >
                Submit another inquiry
              </button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
