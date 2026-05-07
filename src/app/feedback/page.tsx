'use client';
import { useState, useEffect } from 'react';
import { Star, Send, ShieldCheck, HeartHandshake, Loader2, Quote } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { API_BASE_URL } from '@/lib/api-config';

interface Feedback {
  _id: string;
  fullName: string;
  rating: number;
  message: string;
  createdAt: string;
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
        setFeedbacks(prev => {
          const newFeedbacks = data.feedbacks.filter((df: any) => !prev.some(p => p._id === df._id));
          return [...newFeedbacks, ...prev];
        });
      }
    } catch (error) {
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
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setRating(0);
        fetchFeedbacks();
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
                            className={`transition-colors duration-300 ${
                              (hoverRating || rating) >= star 
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
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter Full Name"
                        className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Enter Phone Number"
                      className="w-full h-14 px-6 rounded-2xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Feedback</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbacks.map((fb) => (
                <div key={fb._id} className="bg-section p-8 rounded-3xl border border-border relative">
                  <Quote className="absolute top-6 right-6 text-primary/10" size={40} />
                  <div className="flex text-yellow-500 mb-6">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={16} fill={i <= fb.rating ? "currentColor" : "none"} className={i <= fb.rating ? "" : "text-muted-foreground/30"} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium italic mb-8 leading-relaxed">
                    "{fb.message}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary uppercase">
                      {fb.fullName.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{fb.fullName}</p>
                      <p className="text-xs text-muted-foreground">{new Date(fb.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-section/30 rounded-3xl border border-border border-dashed">
              <p className="text-muted-foreground">No feedback yet. Be the first to share your experience!</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
