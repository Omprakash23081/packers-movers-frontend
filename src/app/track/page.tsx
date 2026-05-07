"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, Map, PackageCheck, Truck, Phone, ChevronRight, Clock, MapPin } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { API_BASE_URL } from '@/lib/api-config';

export default function TrackShipment() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center">
        <PackageCheck className="w-12 h-12 text-primary animate-pulse" />
      </div>
    }>
      <TrackContent />
    </Suspense>
  );
}

function TrackContent() {
  const searchParams = useSearchParams();
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [showFullLogs, setShowFullLogs] = useState(false);

  const performTracking = async (id: string) => {
    if (!id.trim()) return;

    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const res = await fetch(`${API_BASE_URL}/shipments/track/${id.toUpperCase()}`);
      const data: any = await res.json();

      if (data.success) {
        setShipment(data.data);
      } else {
        setError(data.message || 'Tracking ID not found. Please check and try again.');
      }
    } catch {
      setError('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setTrackingId(id);
      performTracking(id);
    }
  }, [searchParams]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    performTracking(trackingId);
  };

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'booked': return 10;
      case 'packing': return 30;
      case 'in_transit': return 65;
      case 'out_for_delivery': return 90;
      case 'delivered': return 100;
      default: return 0;
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-background pt-20 pb-32 border-b border-border flex-grow flex items-center justify-center relative overflow-hidden">

        {/* Background Maps Illustration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="w-full px-2 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <PackageCheck size={16} className="mr-2" />
            Real-Time Live Tracking
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2 text-balance">
            Track Your <span className="text-primary">Shipment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed">
            Enter your 10-digit mobile number or Tracking ID to instantly check the live status of your cargo.
          </p>

          <Card className="shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] border-white/10 glass-panel relative overflow-hidden text-left bg-white/5 backdrop-blur-3xl p-6 md:p-8 max-w-4xl mx-auto rounded-[3rem] mb-12">
            <CardContent className="relative z-10 p-0">
              <form onSubmit={handleTrack} className="flex flex-col gap-6">
                <div className="flex-1 space-y-3">
                  <label className="text-sm font-bold text-white/50 ml-1 uppercase tracking-widest">Tracking ID or Mobile Number</label>
                  <div className="relative">
                    <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400" />
                    <input
                      type="text"
                      className="w-full h-16 pl-14 pr-6 rounded-2xl border border-white/10 bg-white/5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-xl font-bold tracking-wide uppercase text-white placeholder:text-white/20"
                      placeholder="Enter Mobile Number or Tracking ID"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full h-16 bg-indigo-500 hover:bg-indigo-600 text-white font-black text-lg tracking-widest rounded-2xl shadow-lg shadow-indigo-500/20 transition-all border-none" disabled={loading}>
                  {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'TRACK SHIPMENT'}
                </Button>
              </form>
              {error && (
                <div className="mt-4 p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 text-center">
                  {error}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracking Result */}
          {shipment && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto text-left">
              <Card className="border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden rounded-[3rem] bg-white/5 backdrop-blur-3xl relative">
                {/* Decorative background glow */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="px-8 py-10 border-b border-white/5 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Shipment Live</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-white capitalize tracking-tighter flex items-center gap-4">
                        {shipment.currentStatus === 'delivered' ? (
                          <PackageCheck className="w-14 h-14 text-emerald-500 shrink-0" />
                        ) : (
                          <Truck className="w-14 h-14 text-indigo-400 shrink-0 animate-bounce [animation-duration:3s]" />
                        )}
                        {shipment.currentStatus.replace(/_/g, ' ')}
                      </h2>
                    </div>
                    <div className="md:text-right bg-gradient-to-br from-indigo-500/20 to-transparent p-6 rounded-3xl border border-indigo-500/20 backdrop-blur-xl group hover:from-indigo-500/30 transition-all duration-500">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">Tracking ID</p>
                      <p className="text-3xl font-black font-mono tracking-tighter text-white drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]">{shipment.trackingId}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-8 relative z-10">
                  {/* Route & Driver Section */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Route Card */}
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
                        <MapPin size={12} className="text-primary" /> Delivery Route
                      </p>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-lg font-bold text-white tracking-tight">{shipment.origin}</span>
                        <div className="flex items-center gap-2 py-0.5">
                          <div className="w-0.5 h-3 bg-indigo-500/20 rounded-full" />
                          <ChevronRight className="w-3 h-3 text-indigo-400/40 rotate-90 md:rotate-0" />
                          <div className="w-0.5 h-3 bg-indigo-500/20 rounded-full md:hidden" />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">{shipment.destination}</span>
                      </div>
                    </div>

                    {/* Driver Card */}
                    {shipment.driverName && (
                      <div className="p-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-500/20 flex items-center justify-between group hover:border-indigo-500/40 transition-all duration-500">
                        <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Assigned In-Charge</p>
                          <div>
                            <p className="text-xl font-bold text-white tracking-tight">{shipment.driverName}</p>
                            <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mt-1 italic">
                              {shipment.vehicleNumber || 'Wait for update'}
                            </p>
                          </div>
                        </div>
                        {shipment.driverPhone && (
                          <a
                            href={`tel:${shipment.driverPhone}`}
                            className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-[0_16px_32px_-8px_rgba(99,102,241,0.5)] hover:scale-110 hover:-rotate-12 transition-all duration-300"
                          >
                            <Phone className="w-6 h-6 fill-current" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Progress Bar Container */}
                  <div className="space-y-5">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Journey Completion</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{getStatusProgress(shipment.currentStatus)}%</p>
                      </div>
                      <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] font-bold text-white/60">
                        {shipment.updates.length} UPDATES
                      </div>
                    </div>
                    <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden border border-white/5 p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-1000 ease-out relative"
                        style={{ width: `${getStatusProgress(shipment.currentStatus)}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div className="space-y-6 pt-2">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 flex items-center gap-2">
                       Journey Log
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {[
                        { status: 'booked', label: 'Ordered', icon: MapPin },
                        { status: 'packing', label: 'Packed', icon: PackageCheck },
                        { status: 'in_transit', label: 'Shipped', icon: Truck },
                        { status: 'out_for_delivery', label: 'Arrived', icon: MapPin },
                        { status: 'delivered', label: 'Success', icon: PackageCheck },
                      ].map((stage, index) => {
                        const statusOrder = ['booked', 'packing', 'in_transit', 'out_for_delivery', 'delivered'];
                        const currentIndex = statusOrder.indexOf(shipment.currentStatus);
                        const stageIndex = statusOrder.indexOf(stage.status);
                        const isCompleted = currentIndex > stageIndex || (currentIndex === stageIndex && shipment.currentStatus === 'delivered');
                        const isActive = shipment.currentStatus === stage.status;

                        return (
                          <div key={stage.status} className="relative flex md:flex-col items-center gap-3 md:gap-3 flex-1">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                              isCompleted ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' :
                              isActive ? 'bg-white/10 border-indigo-500 text-indigo-400 shadow-lg shadow-indigo-500/10 animate-pulse' :
                              'bg-white/5 border-white/10 text-white/20'
                            }`}>
                              <stage.icon size={20} />
                            </div>
                            <div className="text-left md:text-center space-y-0.5">
                              <p className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-indigo-400' : isCompleted ? 'text-white' : 'text-white/20'}`}>
                                {stage.label}
                              </p>
                            </div>
                            {/* Desktop Line */}
                            {index < 4 && (
                              <div className="hidden md:block absolute left-[calc(100%-1.25rem)] top-6 w-[calc(100%-2.5rem)] h-[1px] bg-white/10 z-0">
                                <div className={`h-full bg-indigo-500 transition-all duration-1000 ${isCompleted ? 'w-full' : 'w-0'}`} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {showFullLogs && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-4 pt-4 border-t border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Activity Records</h4>
                      <div className="space-y-3 relative pl-4 border-l border-white/5">
                        {shipment.updates.slice().reverse().map((update: any, idx: number) => (
                          <div key={idx} className="flex flex-col gap-0.5">
                            <p className="text-xs font-bold text-white/80">{update.status}</p>
                            <div className="flex justify-between items-center text-[9px] text-white/40 uppercase font-black">
                              <span>{update.location}</span>
                              <span>{new Date(update.timestamp).toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Activity Logs Footer */}
                  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Clock size={14} className="text-white/30" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Activity Updated</p>
                        <p className="text-xs font-bold text-white/70">{new Date(shipment.updates[shipment.updates.length - 1]?.timestamp).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => setShowFullLogs(!showFullLogs)}
                      variant="outline" 
                      className={`rounded-xl border-white/10 hover:bg-white/10 text-[10px] font-black tracking-widest px-5 py-3 h-auto transition-all ${showFullLogs ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' : 'bg-white/5 text-white/40'}`}
                    >
                      {showFullLogs ? 'HIDE LOG HISTORY' : 'VIEW FULL LOG HISTORY'}
                    </Button>
                  </div>
               </CardContent>

                <div className="bg-primary/5 px-8 py-6 text-center border-t border-white/5 relative z-10">
                  <p className="text-xs text-white/40 font-medium">
                    Questions about your shipment? Call Support at <a href="tel:+917387661300" className="text-primary font-black hover:underline">+91 7387661300</a>
                  </p>
                </div>
              </Card>
            </div>
          )}

          {!shipment && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Map size={16} /> GPS integrated trucks update location every 15 minutes.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
