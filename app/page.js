"use client";
import { useState, useMemo } from 'react';
import { 
  Shield, 
  Wrench, 
  Fuel, 
  Layout, 
  Sparkles, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Menu, 
  X, 
  ArrowRight, 
  Compass, 
  Maximize2,
  Building,
  Hammer,
  MessageSquare,
  Check
} from 'lucide-react';

// Custom keyframe animations added via inline style injection
const AnimationStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-pulse-glow {
      animation: pulseGlow 4s infinite ease-in-out;
    }
    .animate-float {
      animation: floatSlow 6s infinite ease-in-out;
    }
  `}</style>
);

// --- SERVICES DATA ---

const SERVICES_DATA = [
  {
    id: "gates",
    title: "Custom Gates & Heavy Metalwork",
    icon: Shield,
    shortDesc:
      "Automated sliding gates, CNC laser-cut designer gates, MS/SS main entrance doors, and heavy boundary railings.",
    badge: "Popular Choice",
    image: "/images/gates.jpeg",
    features: [
      "Heavy-duty Mild Steel & Stainless Steel (304/316)",
      "Italian Automatic Motorized Sliding Systems",
      "CNC Precision Laser-Cut Architectural Patterns",
      "Anti-Rust Industrial Epoxy Primer & Powder Coating",
    ],
  },

  {
    id: "petrol-bunks",
    title: "Petrol Bunk Canopy & Branding",
    icon: Fuel,
    shortDesc:
      "Turnkey fuel station exterior cladding, high-durability ACP canopy structures, and LED illumination setups.",
    badge: "Commercial Specialty",
    image: "/images/petrol.jpeg",
    features: [
      "Fire-Retardant ACP Cladding",
      "IP67 Waterproof LED Underdeck Canopy Lighting",
      "Corporate Monolith Pylon Sign Towers",
      "Safety Retaining Columns & Heavy Protection Bollards",
    ],
  },

  {
    id: "outside-interiors",
    title: "Architectural Exteriors & Louvers",
    icon: Layout,
    shortDesc:
      "Modern facade elevations, weatherproof WPC louvers, structural steel pergolas, and outdoor feature walls.",
    badge: "Architectural Preferred",
    image: "/images/image1.jpeg",
    features: [
      "UV-Resistant WPC Louvers",
      "High-Pressure Exterior Laminate Wall Panels",
      "Custom Structural Steel Pergolas & Glass Canopy Roofs",
      "Vertical Elevation Frames & Modern Railing Systems",
    ],
  },

  {
    id: "signage",
    title: "3D Glow Signage & Display Boards",
    icon: Sparkles,
    shortDesc:
      "High-impact 3D acrylic LED letters, corporate entryway pylon signs, and industrial safety displays.",
    badge: "High Visibility",
    image: "/images/image2.jpeg",
    features: [
      "3D Acrylic Cutouts with Waterproof LED Backlighting",
      "Brushed Titanium & Gold Metallic Lettering",
      "Flex Box & Heavy Vinyl UV Industrial Printing",
      "Multi-directional Wayfinding & Safety Sign Boards",
    ],
  },
];

// const SERVICES_DATA = [
//   {
//     id: 'gates',
//     title: 'Custom Gates & Heavy Metalwork',
//     icon: Shield,
//     shortDesc: 'Automated sliding gates, CNC laser-cut designer gates, MS/SS main entrance doors, and heavy boundary railings.',
//     badge: 'Popular Choice',
//     image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
//     features: [
//       'Heavy-duty Mild Steel & Stainless Steel (304/316)',
//       'Italian Automatic Motorized Sliding Systems',
//       'CNC Precision Laser-Cut Architectural Patterns',
//       'Anti-Rust Industrial Epoxy Primer & Powder Coating'
//     ]
//   },
//   {
//     id: 'petrol-bunks',
//     title: 'Petrol Bunk Canopy & Branding',
//     icon: Fuel,
//     shortDesc: 'Turnkey fuel station exterior cladding, high-durability ACP canopy structures, and LED illumination setups.',
//     badge: 'Commercial Specialty',
//     image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80',
//     features: [
//       'Fire-Retardant ACP (Aluminium Composite Panel) Cladding',
//       'IP67 Waterproof LED Underdeck Canopy Lighting',
//       'Corporate Monolith Pylon Sign Towers',
//       'Safety Retaining Columns & Heavy Protection Bollards'
//     ]
//   },
//   {
//     id: 'outside-interiors',
//     title: 'Architectural Exteriors & Louvers',
//     icon: Layout,
//     shortDesc: 'Modern facade elevations, weatherproof WPC louvers, structural steel pergolas, and outdoor feature walls.',
//     badge: 'Architectural Preferred',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
//     features: [
//       'UV-Resistant Wood Plastic Composite (WPC) Louvers',
//       'High-Pressure Exterior Laminate (HPL) Wall Panels',
//       'Custom Structural Steel Pergolas & Glass Canopy Roofs',
//       'Vertical Elevation Frames & Modern Railing Systems'
//     ]
//   },
//   {
//     id: 'signage',
//     title: '3D Glow Signage & Display Boards',
//     icon: Sparkles,
//     shortDesc: 'High-impact 3D acrylic LED letters, corporate entryway pylon signs, and industrial safety displays.',
//     badge: 'High Visibility',
//     image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
//     features: [
//       '3D Acrylic Cutouts with Waterproof LED Backlighting',
//       'Brushed Titanium & Gold Metallic Lettering',
//       'Flex Box & Heavy Vinyl UV Industrial Printing',
//       'Multi-directional Wayfinding & Safety Sign Boards'
//     ]
//   }
// ];

// --- PORTFOLIO GALLERY DATA ---

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Automated Laser-Cut Villa Main Gate",
    category: "gates",
    categoryLabel: "Custom Gates",
    client: "Residential Project",
    image: "/images/gates.jpeg",
    description:
      "Custom fabricated main entrance gate designed and manufactured by SK Fabricators.",
    highlights: [
      "Heavy Duty Structure",
      "Custom Design",
      "Weather Resistant Finish",
    ],
  },

  {
    id: 2,
    title: "Commercial Petrol Bunk Canopy",
    category: "petrol-bunks",
    categoryLabel: "Petrol Bunks",
    client: "Fuel Station Project",
    image: "/images/petrol.jpeg",
    description:
      "Petrol bunk canopy fabrication and exterior finishing completed by our team.",
    highlights: [
      "ACP Cladding",
      "Structural Fabrication",
      "Exterior Lighting",
    ],
  },

  {
    id: 3,
    title: "Modern Exterior Louvers",
    category: "outside-interiors",
    categoryLabel: "Outside Interiors",
    client: "Commercial Project",
    image: "/images/exterior.jpeg",
    description:
      "Modern exterior elevation completed using durable architectural materials.",
    highlights: [
      "Modern Elevation",
      "Weather Resistant",
      "Custom Fabrication",
    ],
  },

  {
    id: 4,
    title: "3D LED Signage",
    category: "signage",
    categoryLabel: "Signage & Boards",
    client: "Commercial Project",
    image: "/images/image1.jpeg",
    description:
      "Custom fabricated signage with modern LED illumination.",
    highlights: [
      "3D Lettering",
      "LED Lighting",
      "Custom Design",
    ],
  },

  {
    id: 5,
    title: "Heavy Duty Main Gate",
    category: "gates",
    categoryLabel: "Custom Gates",
    client: "Residential Project",
    image: "/images/gates.jpeg",
    description:
      "Heavy duty fabricated entrance gate with premium finishing.",
    highlights: [
      "Heavy Duty Steel",
      "Premium Finish",
      "Custom Size",
    ],
  },

  {
    id: 6,
    title: "Steel Pergola & Exterior Work",
    category: "outside-interiors",
    categoryLabel: "Outside Interiors",
    client: "Residential Project",
    image: "/images/image2.jpeg",
    description:
      "Custom structural steel pergola designed for outdoor spaces.",
    highlights: [
      "Structural Steel",
      "Custom Fabrication",
      "Outdoor Finish",
    ],
  },
];


// const PORTFOLIO_ITEMS = [
//   {
//     id: 1,
//     title: 'Automated Laser-Cut Villa Main Gate',
//     category: 'gates',
//     categoryLabel: 'Custom Gates',
//     client: 'Residential Estate',
//     image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
//     description: '18ft motorized sliding gate crafted with 4mm CNC laser-cut MS sheet, matte charcoal powder coating, and heavy-duty automatic remote system.',
//     highlights: ['4mm Precision MS Sheet', 'Italian Motorized Actuator', 'Anti-Corrosion Powder Coating']
//   },
//   {
//     id: 2,
//     title: 'Commercial Petrol Bunk Canopy Facade',
//     category: 'petrol-bunks',
//     categoryLabel: 'Petrol Bunks',
//     client: 'Retail Fuel Station',
//     image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80',
//     description: 'Complete canopy structural cladding using PVDF coated ACP sheets, high-bay IP67 LED lighting, and 22ft monolith pylon sign tower.',
//     highlights: ['4,500 sq.ft ACP Cladding', 'Brand Compliance Certified', '120W High-Bay Canopy LEDs']
//   },
//   {
//     id: 3,
//     title: 'Modern Facade WPC Exterior Louvers',
//     category: 'outside-interiors',
//     categoryLabel: 'Outside Interiors',
//     client: 'Commercial Complex',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
//     description: '3-storey architectural exterior elevation featuring natural teak shade weather-resistant WPC louvers over structural aluminum sub-framing.',
//     highlights: ['Teak Finish WPC Louvers', 'UV & Weatherproof (15 Yr)', 'Structural Framing']
//   },
//   {
//     id: 4,
//     title: '3D Titanium LED Corporate Entry Pylon',
//     category: 'signage',
//     categoryLabel: 'Signage & Boards',
//     client: 'Corporate Headquarters',
//     image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
//     description: 'Dual-sided 20ft tall pylon board with gold titanium mirror finish 3D letters and internal Samsung LED modules for night glow.',
//     highlights: ['20 Foot Structural Height', 'Titanium Mirror Finish', 'Energy-Efficient LED Modules']
//   },
//   {
//     id: 5,
//     title: 'Industrial Heavy Duty Cantilever Gate',
//     category: 'gates',
//     categoryLabel: 'Custom Gates',
//     client: 'Logistics Park',
//     image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
//     description: '30ft trackless cantilever gate built for heavy commercial truck traffic equipped with safety photo-sensors and smooth hydraulic bump stops.',
//     highlights: ['Trackless Cantilever', 'Heavy Truck Traffic Rated', 'Dual Safety Sensors']
//   },
//   {
//     id: 6,
//     title: 'Rooftop Steel Pergola & Glass Canopy',
//     category: 'outside-interiors',
//     categoryLabel: 'Outside Interiors',
//     client: 'Penthouse Terrace',
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
//     description: 'Hollow structural steel outdoor lounge framework with toughened glass roof panels and integrated ambient LED lighting strips.',
//     highlights: ['Structural Steel Beam', '12mm Toughened Glass', 'Ambient Warm Strip Lights']
//   }
// ];

// --- STATS DATA ---
// const STATS = [
//   { value: '500+', label: 'Projects Completed', icon: Award },
//   { value: '14+', label: 'Years Fabrication Excellence', icon: Wrench },
//   { value: '100%', label: 'Quality & Durability Guarantee', icon: Shield },
//   { value: '50+', label: 'Petrol Outlets Transformed', icon: Fuel }
// ];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Contact Form State

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    service: "Gates",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "4022aa6a-ccc3-422a-bc18-d04ec12dac6b"
    );

    // Optional email subject
    formData.append(
      "subject",
      `New Website Inquiry - ${contactForm.service}`
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setResult("");

        setContactForm({
          name: "",
          phone: "",
          service: "Gates",
          message: "",
        });
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // const [contactForm, setContactForm] = useState({ name: '', phone: '', service: 'Gates', message: '' });
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered Portfolio Logic
  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   if (!contactForm.name || !contactForm.phone) return;
  //   setFormSubmitted(true);
  //   setTimeout(() => {
  //     setFormSubmitted(false);
  //     setContactForm({ name: '', phone: '', service: 'Gates', message: '' });
  //   }, 4500);
  // };

  const openWhatsApp = (customMsg) => {
    const defaultText = "Hi SK Fabricators! I would like to get a quote/design discussion for my project.";
    const text = customMsg || defaultText;
    const url = `https://wa.me/919886257136?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <AnimationStyles />

      {/* --- NAVIGATION BAR --- */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              SK
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white block leading-none">
                SK <span className="text-amber-500">FABRICATORS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase block mt-1">
                Gates • Petrol Bunks • Exteriors • Signage
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">Designs & Portfolio</a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Why SK Fabricators</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a>
          </nav>

          {/* Quick Contact & WhatsApp Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+919886257136" 
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 98862 57136</span>
            </a>

            {/* <button 
              onClick={() => openWhatsApp("Hi SK Fabricators! I want to inquire about custom designs.")}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free Design Quote</span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 py-6 space-y-4 animate-fade-in">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-medium text-slate-200 hover:text-amber-400 py-1"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-medium text-slate-200 hover:text-amber-400 py-1"
            >
              Designs & Portfolio
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-medium text-slate-200 hover:text-amber-400 py-1"
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-base font-medium text-slate-200 hover:text-amber-400 py-1"
            >
              Contact & Inquiry
            </a>
            
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a 
                href="tel:+919886257136"
                className="w-full text-center py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                Call +91 98862 57136
              </a>
              <button 
                onClick={() => { openWhatsApp(); setMobileMenuOpen(false); }}
                className="w-full text-center py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct Consultation
              </button>
            </div>
          </div>
        )}
      </header>


      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Subtle background glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Main Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" /> SK Fabricators • Turnkey Metalwork & Exteriors
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Crafting Stronger Gates, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  Petrol Stations & Modern Facades
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Specialized in automated laser-cut gates, commercial petrol bunk ACP cladding, architectural exterior louvers, and high-visibility 3D LED signage. Designed for lifetime durability and superior curb appeal.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => openWhatsApp("Hi SK Fabricators! I would like to get a design quote.")}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>Get Instant Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a 
                  href="#portfolio" 
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:border-slate-600"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Browse Designs</span>
                </a>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Heavy Gauge
                  </div>
                  <div className="text-xs text-slate-400">Mild & Stainless Steel</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Weatherproof
                  </div>
                  <div className="text-xs text-slate-400">PVDF & Epoxy Coating</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Motorized
                  </div>
                  <div className="text-xs text-slate-400">Automatic Gate Automation</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> CNC Precision
                  </div>
                  <div className="text-xs text-slate-400">Laser-Cut Patterns</div>
                </div>
              </div>

            </div>

            {/* Right Card / Interactive Visual Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 shadow-2xl animate-float">
                <div className="bg-slate-900 rounded-[22px] overflow-hidden p-6 space-y-6">
                  
                  {/* Card Image Banner */}
                  <div className="relative h-64 rounded-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                      alt="SK Fabricators Designer Gate Work"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold border border-amber-500/30">
                      Signature Design
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Automated Main Entrance</span>
                      <h3 className="text-lg font-bold text-white leading-tight">Laser-Cut Geometric Sliding Gate</h3>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">Anti-Corrosion Durability</h4>
                        <p className="text-[11px] text-slate-400">Multi-layer zinc phosphate primer and weather coat finish.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <Wrench className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-200">Custom Architectural Patterns</h4>
                        <p className="text-[11px] text-slate-400">Tailored drawings to complement residential & commercial facades.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick WhatsApp Action Button */}
                  <button 
                    onClick={() => openWhatsApp("Hi SK Fabricators! I saw your signature laser-cut gate design and want to discuss custom pricing.")}
                    className="w-full py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2 transition-all hover:border-emerald-500/60"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Inquire About This Design</span>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 bg-slate-900 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Fabrication & Exterior Work
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore our core fabrication divisions engineered for high strength, aesthetics, and resistance against weather elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-900">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Custom Designs Available</span>
                    <button 
                      onClick={() => openWhatsApp(`Hi SK Fabricators! I am interested in discussing your ${service.title} service.`)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group/btn"
                    >
                      Inquire via WhatsApp
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* --- PORTFOLIO GALLERY SECTION --- */}
      <section id="portfolio" className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                Featured Works & Fabrication Designs
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'gates', label: 'Gates' },
                { id: 'petrol-bunks', label: 'Petrol Bunks' },
                { id: 'outside-interiors', label: 'Exteriors' },
                { id: 'signage', label: 'Signage & Boards' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === tab.id 
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20' 
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(item)}
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-[11px] font-bold border border-amber-500/20">
                      {item.categoryLabel}
                    </span>
                    <button className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-amber-400 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{item.client}</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* --- PROJECT DETAIL MODAL VIEWER --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-6 relative">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-80 w-full">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="px-6 pb-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Design & Structure Details</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Specifications & Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => {
                    openWhatsApp(`Hi SK Fabricators! I checked your project "${selectedProject.title}" in the gallery and want to request a quote for similar work.`);
                    setSelectedProject(null);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md shadow-amber-500/20"
                >
                  <MessageSquare className="w-4 h-4" /> Request Quote For Similar Design
                </button>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="py-3.5 px-6 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* --- WHY CHOOSE SK FABRICATORS SECTION --- */}
      <section id="why-us" className="py-20 bg-slate-900 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Why SK Fabricators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered Strength & Craftsmanship
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From individual villa gates to oil retail company station compliance, we deliver structural precision that lasts.
            </p>
          </div>

          {/* Stats Counters Grid */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-950 rounded-2xl border border-slate-800 p-6 text-center space-y-3 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div> */}

          {/* Core Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">In-House CNC Fabrication</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We operate our own state-of-the-art CNC laser cutting machinery, heavy bending breaks, and powder-coating facilities for complete quality control.
              </p>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Petrol Station Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deep expertise in canopy structural framing, fire-retardant ACP paneling, LED lighting, and corporate pylon specifications for oil retail brands.
              </p>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">All-Weather Coating Protection</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dual-layer zinc phosphate epoxy primers and high-bake UV powder finishes safeguard metal structures against monsoon rain, rust, and sun exposure.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* --- CONTACT & INQUIRY SECTION --- */}
      <section id="contact" className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information & WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                  Contact Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
                  Let's Discuss Your Project
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  Reach out to SK Fabricators for site measurement, design consultation, or custom fabrication inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Workshop & Office</h4>
                    <p className="text-sm font-semibold text-white mt-1">
                      #214 Karna Sree Layout<br />
                      3rd Stage Medahalli<br />
                      Bengaluru, Karnataka - 560049
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Hotline</h4>
                    <p className="text-sm font-semibold text-white mt-1">+91 98862 57136</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-sm font-semibold text-white mt-1">rafi@skfabricators.com</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <MessageSquare className="w-4 h-4" /> Instant WhatsApp Estimate
                </div>
                <p className="text-xs text-slate-300">
                  Send your site photo, rough dimensions, or design ideas directly on WhatsApp for an immediate response.
                </p>
                <button 
                  onClick={() => openWhatsApp("Hi SK Fabricators! I am sending details of my project site for a quick quote.")}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-emerald-600/20"
                >
                  Start WhatsApp Chat Now
                </button>
              </div>

            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Send Us a Message
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />

                  <div className="text-lg font-bold">
                    Inquiry Sent Successfully!
                  </div>

                  <p className="text-xs text-slate-300">
                    Thank you for contacting us. Our fabrication expert will get
                    back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your Name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">
                        Phone / Mobile *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 xxxxxxxxxx"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value,
                          })
                        }
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Service Required
                    </label>

                    <select
                      name="service"
                      value={contactForm.service}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          service: e.target.value,
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="Gates">
                        Custom Gates & Automatic Systems
                      </option>

                      <option value="Petrol Bunks">
                        Petrol Bunk Canopy Cladding & Branding
                      </option>

                      <option value="Exteriors">
                        Outside Architectural Louvers & Facades
                      </option>

                      <option value="Signage">
                        3D LED Boards & Corporate Pylons
                      </option>

                      <option value="Multiple Works">
                        Multiple / Entire Project Fabrication
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Project Details / Message *
                    </label>

                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Specify gate dimensions, petrol station canopy requirements, site location, or custom designs..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Error Message */}
                  {result && (
                    <p className="text-sm text-red-400 text-center">
                      {result}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                  >
                    <Send className="w-4 h-4" />

                    {submitting ? "Sending..." : "Submit Inquiry"}
                  </button>

                </form>
              )}
            </div>
            {/* <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                  <div className="text-lg font-bold">Inquiry Sent Successfully!</div>
                  <p className="text-xs text-slate-300">
                    Thank you, {contactForm.name}. Our fabrication expert will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Your Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="Enter your Name"
                        value={contactForm.name}
                        onChange={e => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Phone / Mobile *</label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 xxxxxxxxxx"
                        value={contactForm.phone}
                        onChange={e => setContactForm({...contactForm, phone: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Service Required</label>
                    <select 
                      value={contactForm.service}
                      onChange={e => setContactForm({...contactForm, service: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                    >
                      <option value="Gates">Custom Gates & Automatic Systems</option>
                      <option value="Petrol Bunks">Petrol Bunk Canopy Cladding & Branding</option>
                      <option value="Exteriors">Outside Architectural Louvers & Facades</option>
                      <option value="Signage">3D LED Boards & Corporate Pylons</option>
                      <option value="Multiple Works">Multiple / Entire Project Fabrication</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Project Details / Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify gate dimensions, petrol station canopy requirements, site location, or custom designs..."
                      value={contactForm.message}
                      onChange={e => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </form>
              )}
            </div> */}

          </div>

        </div>
      </section>

      {/* --- LOCATION MAP SECTION --- */}
      <section className="w-full bg-slate-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.927704056118!2d77.7124323594382!3d13.03797291871028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fe770bf7ad%3A0x8f1454828f0bd4d7!2sSkfabricators!5e0!3m2!1sen!2sin!4v1793088613306!5m2!1sen!2sin"
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SK Fabricators Location"
            />
          </div>

        </div>
      </section>


      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-lg">
              SK
            </div>
            <div>
              <span className="text-base font-bold text-white block">SK FABRICATORS</span>
              <span className="text-xs text-slate-500">Gates • Petrol Station Branding • Architectural Exteriors • Signage</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 text-center sm:text-right">
            © {new Date().getFullYear()} SK Fabricators. All rights reserved.
          </div>

        </div>
      </footer>


      {/* Floating Sticky WhatsApp Button */}
      <button 
        onClick={() => openWhatsApp("Hi SK Fabricators! I want to get a project estimate and view designs.")}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl shadow-emerald-500/20 flex items-center gap-2 group transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-slate-950" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider">
          Chat On WhatsApp
        </span>
      </button>

    </div>
  );
}