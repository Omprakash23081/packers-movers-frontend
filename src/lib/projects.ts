export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  location: string;
  date: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  process: { step: string; detail: string }[];
  testimonial?: { name: string; role: string; message: string; avatar: string };
  challenges?: { challenge: string; solution: string }[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'premium-villa-shifting-nagpur',
    title: 'Premium Villa Shifting',
    category: 'House Shifting',
    location: 'Civil Lines, Nagpur',
    date: 'February 2026',
    mainImage: '/images/house-shifting.png',
    gallery: ['/images/house-shifting.png', '/images/warehouse-storage.png'],
    description: 'A complete relocation of a 5-bedroom premium villa in Civil Lines, Nagpur. Our team handled high-value furniture, delicate artwork, and a professional kitchen setup with zero damages.',
    features: [
      'Multi-layer bubble wrapping',
      'Specialized glassware crates',
      'Electronic item diagnostics',
      'Furniture dismantling & assembly'
    ],
    process: [
      { step: 'Pre-move Survey', detail: 'Conducted a detailed audit of all high-value items and furniture.' },
      { step: 'Systematic Packing', detail: 'Used 5-layer corrugated sheets and bubble wrap for maximum protection.' },
      { step: 'Safe Loading', detail: 'Utilized specialized tail-lift trucks for heavy furniture.' },
      { step: 'Unpacking & Setup', detail: 'Completed assembly of all furniture and organized items as per floor plan.' }
    ],
    testimonial: {
      name: "Mr. Sharma",
      role: "Villa Owner",
      message: "Absolutely professional! They handled my grandmother's antique mirror with so much care. Not a single scratch on any of the large mahogany pieces. Highly recommended for premium moves.",
      avatar: "https://i.pravatar.cc/150?u=sharma"
    },
    challenges: [
      { challenge: "Narrow staircases and high-value antique furniture.", solution: "Used specialized furniture sliders and extra padding to navigate tight corners without any wall or item contact." }
    ]
  },
  {
    id: '2',
    slug: 'corporate-it-office-relocation',
    title: 'Corporate IT Office Relocation',
    category: 'Office Relocation',
    location: 'MIHAN SEZ, Nagpur',
    date: 'January 2026',
    mainImage: '/images/office-relocation.png',
    gallery: ['/images/office-relocation.png', '/images/vehicle-transport.png'],
    description: 'Relocated a 200-seater IT office from MIHAN to Wardha Road. The project required minimal downtime and secure handling of server racks and workstations.',
    features: [
      'Anti-static server packing',
      'Sequential device labeling',
      'Overnight transition support',
      'Ergonomic furniture setup'
    ],
    process: [
      { step: 'Asset Inventory', detail: 'Logged over 500 individual IT assets and workstations.' },
      { step: 'Secure Packing', detail: 'Used anti-static materials for servers and delicate electronics.' },
      { step: 'Weekend Move', detail: 'Executed the relocation over the weekend to ensure zero business disruption.' },
      { step: 'Deployment', detail: 'Assisted in the connection of all workstations and server testing.' }
    ],
    testimonial: {
      name: "Sandeep Gupta",
      role: "Operations Manager, IT Corp",
      message: "Sunita Cargo managed our office move flawlessly. We finished on Sunday evening and our team was productive by Monday 9 AM. The IT asset tracking was impressive.",
      avatar: "https://i.pravatar.cc/150?u=sandeep"
    },
    challenges: [
      { challenge: "Relocating heavy server racks without disconnecting internal cabling.", solution: "Used specialized hydraulic lift jacks and custom shock-proof bases to move the racks as single units." }
    ]
  },
  {
    id: '3',
    slug: 'luxury-car-transport-nagpur-pune',
    title: 'Luxury Car Transport',
    category: 'Vehicle Transport',
    location: 'Nagpur to Pune',
    date: 'March 2026',
    mainImage: '/images/vehicle-transport.png',
    gallery: ['/images/vehicle-transport.png', '/images/office-relocation.png'],
    description: 'Transported a fleet of luxury vehicles from Nagpur to Pune using our specialized enclosed car carriers.',
    features: [
      'Enclosed container carriers',
      'Transit insurance coverage',
      'Real-time GPS tracking',
      'Door-to-door delivery'
    ],
    process: [
      { step: 'Vehicle Inspection', detail: 'Detailed report showing existing condition and odometer reading.' },
      { step: 'Secure Loading', detail: 'Used wheel chocks and high-tension straps to secure the car.' },
      { step: 'Transit Monitoring', detail: 'Continuous updates via our GPS-enabled tracking system.' },
      { step: 'Safe Unloading', detail: 'Handover at the destination with a second condition report.' }
    ],
    testimonial: {
      name: "Rohan Mehra",
      role: "Luxury Car Owner",
      message: "I was nervous about moving my BMW, but Sunita Cargo's enclosed carrier was top-notch. The GPS tracking kept me at ease throughout the 700km journey.",
      avatar: "https://i.pravatar.cc/150?u=rohan"
    },
    challenges: [
      { challenge: "Low ground clearance of the sports vehicles.", solution: "Used custom-built hydraulic ramps with shallow angles to ensure zero undercarriage contact during loading." }
    ]
  },
  {
    id: '4',
    slug: 'industrial-machinery-storage',
    title: 'Industrial Machinery Storage',
    category: 'Warehouse Storage',
    location: 'Hingna MIDC, Nagpur',
    date: 'December 2025',
    mainImage: '/images/warehouse-storage.png',
    gallery: ['/images/warehouse-storage.png', '/images/house-shifting.png'],
    description: 'Managed long-term storage and inventory for heavy industrial machinery in our climate-controlled Nagpur warehouse.',
    features: [
      '24/7 CCTV surveillance',
      'Pest-controlled facility',
      'Moisture protection',
      'Inventory management software'
    ],
    process: [
      { step: 'Arrival Audit', detail: 'Checking the condition of machinery and indexing items.' },
      { step: 'Protective Coating', detail: 'Applied rust-prevention coatings where necessary.' },
      { step: 'Storage Allocation', detail: 'Assigned specialized heavy-duty racks for the machinery.' },
      { step: 'Regular Maintenance', detail: 'Conducted bi-weekly inspections and dust removal.' }
    ],
    testimonial: {
      name: "Vikram Singh",
      role: "MIDC Factory Owner",
      message: "The cleanest warehouse facility in Nagpur. Our machinery was stored for 6 months and came back in the same pristine condition we sent it in. Excellent reporting.",
      avatar: "https://i.pravatar.cc/150?u=vikram"
    },
    challenges: [
      { challenge: "Protecting sensitive calibration tools from humidity.", solution: "Implemented localized dehumidification units and vacuum sealing for high-precision instruments." }
    ]
  },
  {
    id: '5',
    slug: 'nagpur-to-mumbai-household-relocation',
    title: 'Interstate Home Relocation',
    category: 'House Shifting',
    location: 'Nagpur to Mumbai',
    date: 'April 2026',
    mainImage: '/images/house-shifting.png',
    gallery: ['/images/house-shifting.png', '/images/vehicle-transport.png'],
    description: 'A long-distance relocation of a 3BHK household from Nagpur to Mumbai. The project involved navigating interstate checkpoints and ensuring safety during the 800km journey.',
    features: [
      'Weather-proof container trucks',
      'Real-time GPS tracking',
      'Interstate permit handling',
      'Door-to-door delivery'
    ],
    process: [
      { step: 'Packing', detail: 'Used 7-layer safety packing for long-distance durability.' },
      { step: 'Loading', detail: 'Weighted balance loading to prevent shifts during highway transit.' },
      { step: 'Transit', detail: '800km journey completed in 36 hours with dual-driver rotation.' },
      { step: 'Delivery', detail: 'Unpacked and placed all items in the new Mumbai apartment.' }
    ],
    testimonial: {
      name: "Anjali Deshmukh",
      role: "Home Maker",
      message: "Moving to a different city was stressful, but Sunita Cargo made it look easy. My plants and fish tank arrived healthy and safe!",
      avatar: "https://i.pravatar.cc/150?u=anjali"
    },
    challenges: [
      { challenge: "Transporting a large indoor garden and an aquarium across 800km.", solution: "Used climate-controlled specialized compartments and oxygenated water systems for the transit period." }
    ]
  },
  {
    id: '6',
    slug: 'local-shop-relocation-nagpur',
    title: 'Local Retail Shop Relocation',
    category: 'Commercial Shifting',
    location: 'Itwari to Dharampeth, Nagpur',
    date: 'May 2026',
    mainImage: '/images/office-relocation.png',
    gallery: ['/images/office-relocation.png', '/images/warehouse-storage.png'],
    description: 'Relocated a high-end retail clothing store within Nagpur. The project required careful handling of display mannequins, glass racks, and inventory management.',
    features: [
      'Inventory tagging',
      'Mannequin protection',
      'Glass rack crating',
      'Same-day setup'
    ],
    process: [
      { step: 'Inventory Audit', detail: 'Scanning and tagging every SKU in the store.' },
      { step: 'Fragile Packing', detail: 'Custom crates for glass displays and racks.' },
      { step: 'Quick Transit', detail: 'Moved entire inventory in 4 hours using 3 medium trucks.' },
      { step: 'Re-stocking Assistance', detail: 'Helped in arranging the display at the new location.' }
    ],
    testimonial: {
      name: "Karan Johar",
      role: "Shop Owner",
      message: "Our store was up and running in the new location in less than 12 hours. The systematic inventory management meant we didn't lose a single item.",
      avatar: "https://i.pravatar.cc/150?u=karan"
    },
    challenges: [
      { challenge: "Moving fragile glass display cases without dismantling.", solution: "Used custom-fit timber bracing and high-density foam blocks to secure the cases during the short city transit." }
    ]
  }
];
