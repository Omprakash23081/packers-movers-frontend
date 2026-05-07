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
    ]
  }
];
