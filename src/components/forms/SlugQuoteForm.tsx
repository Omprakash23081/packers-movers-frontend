'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';

interface Props {
  originCity: string;
}

export default function SlugQuoteForm({ originCity }: Props) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    movingTo: ''
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
          firstName: formData.fullName,
          lastName: '',
          email: 'inquiry@example.com',
          phone: formData.phone,
          movingFrom: originCity || 'Not Specified',
          movingTo: formData.movingTo || 'Not Specified',
          serviceType: 'City Page Inquiry',
          message: `Requested from ${originCity} Page`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', phone: '', movingTo: '' });
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

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-6 space-y-4"
      >
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle size={32} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-black text-white">Request Received!</h3>
          <p className="text-sm mt-2 text-white/70">An expert will call you shortly.</p>
        </div>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6 border-white/20 hover:bg-white/10 text-white rounded-xl px-6 h-10 font-bold text-xs uppercase"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Full Name</label>
        <input 
          required
          type="text" 
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" 
          placeholder="Enter Full Name" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Mobile number</label>
        <input 
          required
          type="tel" 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" 
          placeholder="Enter Mobile Number" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Moving To</label>
        <input 
          required
          type="text" 
          value={formData.movingTo}
          onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
          className="w-full h-12 px-5 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-medium" 
          placeholder="Enter Destination City" 
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-14 text-lg font-black rounded-2xl mt-4 bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all disabled:opacity-70"
      >
        {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Instant Estimate"}
      </Button>
      <div className="flex items-center justify-center gap-4 mt-6 opacity-40">
        <ShieldCheck size={16} className="text-white"/>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Safe & Confidential</span>
      </div>
    </form>
  );
}
