'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function TrackingBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-900 to-blue-700 py-6 border-y border-white/10 relative z-30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-yellow-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Map className="w-8 h-8 text-yellow-400 relative z-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Live Shipment Tracking Available</h3>
              <p className="text-blue-200 text-sm md:text-base font-medium">Track your belongings 24/7 with our GPS enabled fleet.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-100 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
              <Truck className="w-4 h-4 text-emerald-400" /> Verified Fleet
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-100 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Safe
            </div>
            <Link href="/track">
              <Button className="bg-yellow-400 text-blue-900 px-8 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] border-none">
                Track Status
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
