'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';

export default function NagpurQuoteForm() {
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
          movingFrom: 'Nagpur',
          movingTo: formData.movingTo || 'Not Specified',
          serviceType: 'Nagpur Inquiry',
          message: 'Requested from Nagpur Page'
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
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <CheckCircle size={32} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-2xl font-black tracking-tighter">Success!</h3>
          <p className="text-sm mt-1 text-muted-foreground">Our team will contact you shortly.</p>
        </div>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-4 rounded-xl px-6 h-10 font-bold text-xs tracking-widest uppercase"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input 
        required
        type="text" 
        value={formData.fullName}
        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" 
        placeholder="Enter Full Name" 
      />
      <input 
        required
        type="tel" 
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" 
        placeholder="Enter Phone Number" 
      />
      <input 
        required
        type="text" 
        value={formData.movingTo}
        onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" 
        placeholder="Enter Destination City" 
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 disabled:opacity-70"
      >
        {loading ? <Loader2 className="animate-spin mr-2" /> : "Transmit Quote Request"}
      </Button>
    </form>
  );
}
