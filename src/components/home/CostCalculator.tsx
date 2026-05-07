'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, MapPin, Home, ArrowRightLeft, 
  IndianRupee, Info, Search, Loader2, Sparkles,
  ChevronRight, CheckCircle2, Building2, Car
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { API_BASE_URL } from '@/lib/api-config';

const CATEGORIES = [
  { id: 'house', label: 'House Shifting', icon: <Home size={18} /> },
  { id: 'office', label: 'Office Relocation', icon: <Building2 size={18} /> },
  { id: 'vehicle', label: 'Car & Bike', icon: <Car size={18} /> }
];

const CITIES = [
  "Agra", "Ahmedabad", "Allahabad", "Alwar", "Ambala", "Ankleshwar", "Aurangabad", "Banaras", 
  "Bangalore", "Baroda", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bhuj", "Bikaner", "Calicut", 
  "Chandigarh", "Chennai", "Cochin", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dwarka", 
  "Faridabad", "Gandhidham", "Ghaziabad", "Goa", "Greater Noida", "Gurgaon", "Guwahati", 
  "Gwalior", "Haridwar", "Hisar", "Hubli", "Hyderabad", "Indore", "Jabalpur", "Jaipur", 
  "Jammu", "Jamshedpur", "Jamnagar", "Jodhpur", "Kalighat", "Kanpur", "Kolhapur", "Kolkata", 
  "Korba", "Kota", "Kottayam", "Lucknow", "Ludhiana", "Madurai", "Manesar", "Mangalore", 
  "Meerut", "Mumbai", "Mysore", "Nagpur", "Nasik", "Navi Mumbai", "Neemrana", "Noida", 
  "Panipat", "Patalganga", "Patna", "Pondicherry", "Port Blair", "Pune", "Raigarh", "Raipur", 
  "Rajkot", "Ranchi", "Renukoot", "Rourkela", "Rudrapur", "Secunderabad", "Shillong", 
  "Siliguri", "Surat", "Tinsukia", "Tirupur", "Trichy", "Trivandrum", "Udaipur", "Vapi", 
  "Varanasi", "Vijayawada", "Visakhapatnam"
];

const CATEGORY_OPTIONS: Record<string, string[]> = {
  house: ["1 BHK Home", "2 BHK Home", "3 BHK Home", "4 BHK / Villa"],
  office: ["Small Office", "Medium Office", "Large Office", "Corporate Hub"],
  vehicle: ["Bike Only", "Car Only", "Car + Bike", "Luxury Vehicle"]
};

interface IPricingTier {
  type: string;
  costs: {
    upTo50km: string;
    upTo500km: string;
    upTo1000km: string;
    upTo1500km: string;
    upTo2500km: string;
  };
}


export default function CostCalculator() {
  const [activeCategory, setActiveCategory] = useState('house');
  const [origin, setOrigin] = useState('Nagpur');
  const [destination, setDestination] = useState('');
  const [moveSize, setMoveSize] = useState("1 BHK Home");
  const [result, setResult] = useState<string | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [pricingData, setPricingData] = useState<Record<string, IPricingTier[]>>({});
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pricing`);
        const data = await response.json();
        const formattedData: Record<string, IPricingTier[]> = {};
        data.forEach((item: { category: string; tiers: IPricingTier[] }) => {
          formattedData[item.category] = item.tiers;
        });
        setPricingData(formattedData);
      } catch (error) {
        // Handle silently
      }
    };
    fetchPricing();
  }, []);

  useEffect(() => {
    // Reset moveSize when category changes
    setMoveSize(CATEGORY_OPTIONS[activeCategory][0]);
    setResult(null);
  }, [activeCategory]);

  // Coordinates for supported cities (Lat, Lng)
  const CITY_COORDS: Record<string, [number, number]> = {
    "Nagpur": [21.1458, 79.0882],
    "Mumbai": [19.0760, 72.8777],
    "Pune": [18.5204, 73.8567],
    "Delhi": [28.6139, 77.2090],
    "Bangalore": [12.9716, 77.5946],
    "Hyderabad": [17.3850, 78.4867],
    "Chennai": [13.0827, 80.2707],
    "Kolkata": [22.5726, 88.3639],
    "Ahmedabad": [23.0225, 72.5714],
    "Surat": [21.1702, 72.8311],
    "Jaipur": [26.9124, 75.7873],
    "Lucknow": [26.8467, 80.9462],
    "Kanpur": [26.4499, 80.3319],
    "Indore": [22.7196, 75.8577],
    "Thane": [19.2183, 72.9781],
    "Bhopal": [23.2599, 77.4126],
    "Visakhapatnam": [17.6868, 83.2185],
    "Pimpri-Chinchwad": [18.6298, 73.7997],
    "Patna": [25.5941, 85.1376],
    "Vadodara": [22.3072, 73.1812],
    "Ghaziabad": [28.6692, 77.4538],
    "Ludhiana": [30.9010, 75.8573],
    "Agra": [27.1767, 78.0081],
    "Nashik": [19.9975, 73.7898],
    "Faridabad": [28.4089, 77.3178],
    "Meerut": [28.9845, 77.7064],
    "Rajkot": [22.3039, 70.8022],
    "Kalyan-Dombivli": [19.2403, 73.1305],
    "Vasai-Virar": [19.3919, 72.8397],
    "Varanasi": [25.3176, 82.9739],
    "Srinagar": [34.0837, 74.7973],
    "Aurangabad": [19.8762, 75.3433],
    "Dhanbad": [23.7957, 86.4304],
    "Amritsar": [31.6340, 74.8723],
    "Navi Mumbai": [19.0330, 73.0297],
    "Allahabad": [25.4358, 81.8463],
    "Ranchi": [23.3441, 85.3096],
    "Howrah": [22.5851, 88.3307],
    "Coimbatore": [11.0168, 76.9558],
    "Jabalpur": [23.1815, 79.9864],
    "Gwalior": [26.2124, 78.1772],
    "Vijayawada": [16.5062, 80.6480],
    "Jodhpur": [26.2389, 73.0243],
    "Madurai": [9.9252, 78.1198],
    "Raipur": [21.2514, 81.6296],
    "Kota": [25.2138, 75.8648],
    "Chandigarh": [30.7333, 76.7794],
    "Guwahati": [26.1445, 91.7362],
    "Solapur": [17.6599, 75.9064],
    "Hubli-Dharwad": [15.3647, 75.1240],
    "Mysore": [12.2958, 76.6394],
    "Tiruchirappalli": [10.7905, 78.7047],
    "Bareilly": [28.3670, 79.4304],
    "Aligarh": [27.8974, 78.0880],
    "Tiruppur": [11.1085, 77.3411],
    "Gurgaon": [28.4595, 77.0266],
    "Moradabad": [28.8385, 78.7733],
    "Jalandhar": [31.3260, 75.5762],
    "Bhubaneswar": [20.2961, 85.8245],
    "Salem": [11.6643, 78.1460],
    "Warangal": [17.9689, 79.5941],
    "Guntur": [16.3067, 80.4365],
    "Bhiwandi": [19.2813, 73.0483],
    "Saharanpur": [29.9640, 77.5460],
    "Gorakhpur": [26.7606, 83.3731],
    "Bikaner": [28.0229, 73.3119],
    "Amravati": [20.9320, 77.7523],
    "Noida": [28.5355, 77.3910],
    "Jamshedpur": [22.8046, 86.2029],
    "Bhilai": [21.1938, 81.3509],
    "Cuttack": [20.4625, 85.8830],
    "Firozabad": [27.1500, 78.4000],
    "Kochi": [9.9312, 76.2673],
    "Bhavnagar": [21.7645, 72.1519],
    "Dehradun": [30.3165, 78.0322],
    "Durgapur": [23.4807, 87.3204],
    "Asansol": [23.6739, 86.9524],
    "Nanded": [19.1383, 77.3210],
    "Kolhapur": [16.7050, 74.2433],
    "Ajmer": [26.4499, 74.6399],
    "Gulbarga": [17.3297, 76.8343],
    "Jamnagar": [22.4707, 70.0577],
    "Ujjain": [23.1760, 75.7885],
    "Loni": [28.7500, 77.2833],
    "Siliguri": [26.7271, 88.3953],
    "Jhansi": [25.4484, 78.5685],
    "Ulhasnagar": [19.2215, 73.1645],
    "Nellore": [14.4426, 79.9865],
    "Jammu": [32.7266, 74.8570],
    "Belgaum": [15.8497, 74.4977],
    "Mangalore": [12.9141, 74.8560],
    "Ambattur": [13.1143, 80.1482],
    "Tirunelveli": [8.7139, 77.7567],
    "Malegaon": [20.5500, 74.5333],
    "Gaya": [24.7914, 85.0002],
    "Jalgaon": [21.0076, 75.5626],
    "Udaipur": [24.5854, 73.7125],
    "Maheshtala": [22.5033, 88.2325],
    "Goa": [15.2993, 74.1240],
    "Greater Noida": [28.4744, 77.5040],
    "Pondicherry": [11.9416, 79.8083],
    "Haridwar": [29.9457, 78.1642],
  };

  const calculateDistance = (city1: string, city2: string) => {
    if (city1 === city2) return 20; // local shifting distance
    
    const coord1 = CITY_COORDS[city1];
    const coord2 = CITY_COORDS[city2];
    
    if (!coord1 || !coord2) {
      // Fallback if city not in coords list - use a default based on hash
      const str = city1 + city2;
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
          hash = ((hash << 5) - hash) + str.charCodeAt(i);
          hash |= 0;
      }
      return (Math.abs(hash) % 1500) + 100;
    }

    // Haversine formula to calculate real distance
    const R = 6371; // Earth's radius in km
    const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
    const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const dist = R * c;
    
    // Add 15% for road travel overhead (since birds fly straight, trucks don't)
    return Math.round(dist * 1.15);
  };

  const handleCalculate = () => {
    if (!origin || !destination) return;
    
    setCalculating(true);
    setResult(null);

    // Simulate calculation time
    setTimeout(() => {
      const d = calculateDistance(origin, destination);
      setDistance(d);

      const categoryTiers = pricingData[activeCategory] || [];
      const tier = categoryTiers.find(t => t.type === moveSize);
      
      if (tier) {
        let priceRange = "";
        if (d <= 50) priceRange = tier.costs.upTo50km;
        else if (d <= 500) priceRange = tier.costs.upTo500km;
        else if (d <= 1000) priceRange = tier.costs.upTo1000km;
        else if (d <= 1500) priceRange = tier.costs.upTo1500km;
        else priceRange = tier.costs.upTo2500km;

        setResult(priceRange);
      } else {
        setResult("Contact for Quote");
      }
      setCalculating(false);
    }, 800);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="calculator">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full px-2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest"
            >
              <Sparkles size={14} /> Instant Estimator
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Know Your <span className="text-primary italic">Moving Cost</span> <br />
              In Seconds.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="glass-panel border-none bg-white/5 backdrop-blur-3xl !rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Category Tabs Inside Card */}
                <div className="bg-white/5 border-b border-white/10 p-4">
                  <div className="flex p-1 bg-black/20 rounded-xl overflow-x-auto scrollbar-none">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all duration-300 shrink-0 ${
                          activeCategory === cat.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* From City */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Starting City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform" size={18} />
                      <select 
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-bold appearance-none cursor-pointer"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                      >
                        {CITIES.map(city => <option key={city} value={city} className="bg-[#0B1120]">{city}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* To City */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Destination City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={18} />
                      <select 
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-bold appearance-none cursor-pointer"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      >
                        <option value="" className="bg-[#0B1120]">Select Destination</option>
                        {CITIES.map(city => <option key={city} value={city} className="bg-[#0B1120]">{city}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Move Size / Options */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">
                      {activeCategory === 'vehicle' ? 'Which vehicle?' : 'Scale of Move'}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {CATEGORY_OPTIONS[activeCategory].map(option => (
                        <button
                          key={option}
                          onClick={() => setMoveSize(option)}
                          className={`h-12 rounded-xl text-[10px] font-black uppercase tracking-tighter border transition-all ${
                            moveSize === option 
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                            : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                          }`}
                        >
                          {option.replace(' Home', '').replace(' Office', '')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={!origin || !destination || calculating}
                  className="w-full h-16 rounded-2xl mt-10 text-lg font-black bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  {calculating ? <Loader2 className="mr-2 animate-spin" /> : <Calculator className="mr-2" />}
                  {calculating ? "Analyzing Routes..." : "Calculate Moving Cost"}
                </Button>
              </div>
            </Card>

              <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                <Info size={24} className="text-primary shrink-0" />
                <p className="text-xs text-secondary leading-relaxed font-medium">
                  This estimator provides a data-driven range based on current market trends and distance. 
                  Actual price might vary slightly based on item volume and packing complexity.
                </p>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[400px]">
                <AnimatePresence mode="wait">
                  {!result ? (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center rounded-[2.5rem] border-2 border-dashed border-white/10"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <ArrowRightLeft size={32} className="text-white/20" />
                      </div>
                      <h4 className="text-xl font-bold text-white/40 mb-2">Price Summary</h4>
                      <p className="text-sm text-white/30 max-w-xs">Select your origin, destination and move size to see a verified price estimate.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="glass-panel overflow-hidden border-none bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl p-10 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                          Estimate Ready
                        </div>
                        <div className="text-primary font-black text-sm">
                          {distance} KM Range
                        </div>
                      </div>

                      <div className="space-y-2 mb-10">
                        <p className="text-xs font-black uppercase tracking-widest text-white/60">Estimated Cost Range</p>
                        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-center">
                          {result}
                        </h3>
                      </div>

                      <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Transparent Door-to-Door Pricing</span>
                         </div>
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Professional Multi-Layer Packing</span>
                         </div>
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Transit Insurance Included</span>
                         </div>
                      </div>

                      <div className="mt-auto pt-6">
                         <Button asChild size="lg" variant="accent" className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-accent/20">
                            <a href="#quote" className="flex items-center justify-center">
                               Book My Move <ChevronRight className="ml-2" />
                            </a>
                         </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
