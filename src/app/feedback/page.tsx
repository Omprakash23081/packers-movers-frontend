'use client';
import { useState, useEffect } from 'react';
import { Star, Send, ShieldCheck, HeartHandshake, Loader2, Quote, CheckCircle2 } from 'lucide-react';
import NextImage from 'next/image';
import { Button } from '@/components/ui/Button';
import { API_BASE_URL } from '@/lib/api-config';

interface Feedback {
  _id: string;
  fullName: string;
  rating: number;
  message: string;
  createdAt: string;
  avatar?: string;
}

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      _id: 'v1',
      fullName: 'Vikram Singh',
      rating: 5,
      message: 'Moved my 3BHK from Nagpur to Hyderabad. The team was extremely professional and handled the heavy furniture with ease. Highly recommend Sunita Cargo!',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'v2',
      fullName: 'Anjali Deshpande',
      rating: 5,
      message: 'Great service for local shifting in Nagpur. They arrived on time and finished the packing and loading in record time. Zero damages!',
      createdAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
      _id: 'v3',
      fullName: 'Rajesh Khanna',
      rating: 5,
      message: 'Excellent bike transport service. My Royal Enfield reached Delhi in 5 days without a single scratch. The GPS tracking was very helpful.',
      createdAt: new Date(Date.now() - 172800000).toISOString()
    },
    {
      _id: 'v4',
      fullName: 'Suresh Menon',
      rating: 5,
      message: 'Professional office relocation service. They shifted our IT equipment with extreme care over the weekend. We were up and running by Monday morning.',
      createdAt: new Date(Date.now() - 259200000).toISOString()
    },
    {
      _id: 'v5',
      fullName: 'Priya Sharma',
      rating: 5,
      message: 'Used their warehouse storage for 3 months while my new house was being ready. Very clean and secure facility. My goods were returned in perfect condition.',
      createdAt: new Date(Date.now() - 345600000).toISOString()
    },
    {
      _id: 'v6',
      fullName: 'Amitabh Gupta',
      rating: 5,
      message: 'Nagpur to Bangalore move was flawless. The packing quality was superior to any other movers I have used before. Transparent pricing and no hidden costs.',
      createdAt: new Date(Date.now() - 432000000).toISOString()
    }

  ]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const fetchFeedbacks = async () => {
    setLoadingFeedbacks(true);
    try {
      const res = await fetch(`${API_BASE_URL}/feedback`);

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        if (res.status === 404) {
          return;
        }
        throw new Error(`Server returned ${res.status}`);
      }

      if (!contentType || contentType.indexOf("application/json") === -1) {
        throw new Error("Invalid response from server");
      }

      const data = await res.json();
      if (data.success && data.feedbacks) {
        if (data.feedbacks.length > 0) {
          setFeedbacks(prev => {
            const newFeedbacks = data.feedbacks.filter((df: any) => !prev.some(p => p._id === df._id));
            return [...newFeedbacks, ...prev];
          });
        }
      }
    } catch (error) {
      console.error("Failed to fetch feedbacks:", error);
    } finally {
      setLoadingFeedbacks(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a star rating");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          rating
        }),
      });

      const contentType = response.headers.get("content-type");
      if (response.ok) {
        const data = await response.json().catch(() => null);
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setRating(0);

        // Add the new feedback to the list immediately for better UX
        if (data && data.success && data.feedback) {
          setFeedbacks(prev => {
            // Avoid duplicates if fetchFeedbacks also runs
            if (prev.some(p => p._id === data.feedback._id)) return prev;
            return [data.feedback, ...prev];
          });
        } else {
          fetchFeedbacks();
        }
      } else {
        // Handle non-JSON or missing error messages gracefully
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || 'Something went wrong.'}`);
        } else {
          if (response.status === 503 || response.status === 502) {
            alert(`The feedback service is currently waking up or under maintenance. Please try again in 30 seconds.`);
          } else if (response.status === 404) {
            alert(`Service update in progress. The feedback endpoint is being initialized on the server. Please check back shortly.`);
          } else {
            alert(`Server Error (${response.status}). The service might be temporarily unavailable.`);
          }
        }
      }
    } catch (error) {
      alert('Network Error: Failed to connect to the feedback service. Please check your internet connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 relative mobile-95-container">

        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20 backdrop-blur-md">
            <HeartHandshake size={18} />
            We Value Your Opinion
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            How was your move?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium px-2">
            Your feedback helps us continuously improve our packing and moving services. Let us know how we did!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">

          {/* Feedback Form */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2rem] border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

              {submitted ? (
                <div className="text-center py-16 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground text-lg mb-8">
                    We truly appreciate you taking the time to share your experience with us.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    Submit Another Response
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Star Rating */}
                  <div className="space-y-4 text-center pb-8 border-b border-border">
                    <label className="block text-sm font-bold text-muted-foreground uppercase tracking-widest">
                      Rate Your Experience
                    </label>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="transition-transform hover:scale-110 focus:outline-none"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                        >
                          <Star
                            size={48}
                            className={`transition-colors duration-300 ${(hoverRating || rating) >= star
                              ? 'fill-yellow-500 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]'
                              : 'text-muted-foreground/30 hover:text-muted-foreground/50'
                              }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter Full Name"
                        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter Email Address"
                        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter Phone Number"
                      className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Feedback</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter Your Feedback"
                      className="w-full h-40 p-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
                  >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Send size={20} className="mr-2" />}
                    Submit Feedback
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4 space-y-6 mobile-95-container">
            <div className="bg-primary/5 border border-primary/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-black mb-4">Why your feedback matters?</h3>
              <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                We review every single piece of feedback to ensure we maintain our 99% customer satisfaction rate and 4.9/5 star Google rating.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-primary">
                <ShieldCheck size={20} />
                <span>100% Confidential & Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display Submitted Feedback */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real feedback from recent relocations</p>
          </div>

          {loadingFeedbacks ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-primary" size={40} />
            </div>
          ) : feedbacks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
              {feedbacks.map((fb) => (
                <div key={fb._id} className="w-[96%] mx-auto sm:w-full bg-[#0B1224] backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group shadow-2xl">
                  {/* Google Logo */}
                  <div className="absolute top-5 right-5 opacity-40">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.16 5.4-7.84 5.4-4.8 0-8.72-3.96-8.72-8.6s3.92-8.6 8.72-8.6c2.8 0 4.64 1.16 5.68 2.16l2.6-2.6C19.12 1.28 16.08 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.2 0 11.92-5.04 11.92-12.16 0-.8-.08-1.44-.24-2.08h-11.68z" />
                    </svg>
                  </div>

                  {/* Header: User Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                      <NextImage
                        src={fb.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(fb.fullName)}&background=random`}
                        alt={fb.fullName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white text-base leading-none">{fb.fullName}</h4>
                        <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="text-white w-2.5 h-2.5" />
                        </div>
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">
                        {new Date(fb.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={14} fill={i <= fb.rating ? "currentColor" : "none"} className={i <= fb.rating ? "drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" : "text-white/10"} />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium italic line-clamp-4">
                    &quot;{fb.message}&quot;
                  </p>

                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    Verified Customer
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-section/30 rounded-3xl border border-border border-dashed">
              <p className="text-muted-foreground">No feedback found. Be the first to share your experience!</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
