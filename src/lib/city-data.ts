/**
 * City Classification and Metadata for Dynamic SEO Content Generation
 */

export type CityTier = 'metro' | 'tier1' | 'tier2' | 'industrial' | 'tourist';

export interface CityTrait {
  name: string;
  tier: CityTier;
  landmarks: string[];
  neighbors: string[];
  localities?: string[];
  weather?: string;
  trafficLevel: 'high' | 'medium' | 'low';
}

export const cityData: Record<string, CityTrait> = {
  // Metro Cities
  mumbai: {
    name: 'Mumbai',
    tier: 'metro',
    landmarks: ['Gateway of India', 'Marine Drive', 'Bandra-Worli Sea Link'],
    neighbors: ['Thane', 'Navi Mumbai', 'Borivali'],
    weather: 'humid monsoon',
    trafficLevel: 'high'
  },
  delhi: {
    name: 'Delhi',
    tier: 'metro',
    landmarks: ['Red Fort', 'India Gate', 'Qutub Minar'],
    neighbors: ['Noida', 'Gurgaon', 'Faridabad'],
    weather: 'extreme summers',
    trafficLevel: 'high'
  },
  noida: {
    name: 'Noida',
    tier: 'tier1',
    landmarks: ['Film City', 'DLF Mall', 'Sector 18'],
    neighbors: ['Greater Noida', 'Ghaziabad', 'Delhi'],
    localities: ['sector-15', 'sector-18', 'sector-62', 'sector-137', 'sector-50', 'sector-75'],
    trafficLevel: 'high'
  },
  gurgaon: {
    name: 'Gurgaon',
    tier: 'metro',
    landmarks: ['Cyber Hub', 'Ambience Mall', 'Kingdom of Dreams'],
    neighbors: ['Delhi', 'Faridabad', 'Manesar'],
    localities: ['dlf-phase-1', 'dlf-phase-2', 'dlf-phase-3', 'sohna-road', 'golf-course-road', 'sushant-lok'],
    trafficLevel: 'high'
  },
  ghaziabad: {
    name: 'Ghaziabad',
    tier: 'tier1',
    landmarks: ['Indirapuram', 'Raj Nagar Extension', 'Crossings Republik'],
    neighbors: ['Noida', 'Delhi', 'Meerut'],
    localities: ['indirapuram', 'vaishali', 'vasundhara', 'raj-nagar', 'kaushambi'],
    trafficLevel: 'high'
  },
  greaternoida: {
    name: 'Greater Noida',
    tier: 'tier1',
    landmarks: ['Pari Chowk', 'Buddh International Circuit', 'Knowledge Park'],
    neighbors: ['Noida', 'Ghaziabad', 'Faridabad'],
    localities: ['noida-extension', 'beta-1', 'alpha-1', 'omega-1'],
    trafficLevel: 'medium'
  },
  bangalore: {
    name: 'Bangalore',
    tier: 'metro',
    landmarks: ['Lalbagh', 'Cubbon Park', 'Vidhana Soudha'],
    neighbors: ['Whitefield', 'Electronic City', 'Indiranagar'],
    weather: 'pleasant',
    trafficLevel: 'high'
  },
  hyderabad: {
    name: 'Hyderabad',
    tier: 'metro',
    landmarks: ['Charminar', 'Golconda Fort', 'Cyber Towers'],
    neighbors: ['Gachibowli', 'Secunderabad', 'Madhapur'],
    trafficLevel: 'high'
  },
  pune: {
    name: 'Pune',
    tier: 'metro',
    landmarks: ['Shaniwar Wada', 'Aga Khan Palace', 'Hinjewadi IT Park'],
    neighbors: ['Pimpri-Chinchwad', 'Kothrud', 'Wagholi'],
    trafficLevel: 'high'
  },
  nagpur: {
    name: 'Nagpur',
    tier: 'tier1',
    landmarks: ['Zero Mile', 'Futala Lake', 'Deekshabhoomi'],
    neighbors: ['Wadi', 'Wardha Road', 'Manish Nagar'],
    localities: ['dharampeth', 'ramdaspeth', 'bajaj-nagar', 'shankar-nagar', 'sadar', 'civil-lines', 'sitabuldi', 'mahal', 'manish-nagar', 'besa', 'hingna', 'wadi', 'wardhaman-nagar', 'nandanvan', 'kamal-chowk', 'koradi-road', 'zingabai-takli', 'trimurti-nagar', 'pratap-nagar', 'swawalambi-nagar', 'dighori', 'manewada'],
    weather: 'severe heat',
    trafficLevel: 'medium'
  },
  // Add major Tier 1
  jaipur: {
    name: 'Jaipur',
    tier: 'tier1',
    landmarks: ['Hawa Mahal', 'Amber Fort', 'City Palace'],
    neighbors: ['Mansarovar', 'Malviya Nagar'],
    trafficLevel: 'medium'
  },
  lucknow: {
    name: 'Lucknow',
    tier: 'tier1',
    landmarks: ['Bara Imambara', 'Rumi Darwaza', 'Hazratganj'],
    neighbors: ['Gomti Nagar', 'Alambagh'],
    trafficLevel: 'medium'
  },
  indore: {
    name: 'Indore',
    tier: 'tier1',
    landmarks: ['Rajwada', 'Lal Bagh Palace', 'Sarafa Bazaar'],
    neighbors: ['Vijay Nagar', 'Rajendra Nagar'],
    trafficLevel: 'medium'
  }
};

// Default traits for cities not explicitly defined
export const getDefaultTraits = (cityName: string): CityTrait => ({
  name: cityName.charAt(0).toUpperCase() + cityName.slice(1),
  tier: 'tier2',
  landmarks: ['local landmarks'],
  neighbors: ['nearby localities'],
  trafficLevel: 'medium'
});

export const getCityTrait = (citySlug: string): CityTrait => {
  const slug = citySlug.toLowerCase().replace(/[\s-]/g, '');
  return cityData[slug] || getDefaultTraits(citySlug);
};
