"use client";
import { useState } from "react";
import { Monitor, Tablet, Smartphone, ArrowRight, ArrowLeft, Code2, CheckCircle, GraduationCap, HeartPulse, Utensils, ShoppingCart, Sun, Briefcase } from "lucide-react";

export default function WebsitePreview({ onNext, onPrev, domain, websiteName, themeColor }: { onNext: () => void, onPrev: () => void, domain: string | null, websiteName: string, themeColor?: string }) {
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px"
  };

  const domainConfigs: Record<string, any> = {
    education: {
      Icon: GraduationCap,
      color: "blue",
      heroTitle: "Empowering Your Future",
      heroDesc: "Discover world-class education tailored to your goals. Learn from experts and build your career.",
      services: [
        { title: "Online Courses", desc: "Learn anywhere, anytime." },
        { title: "Expert Tutors", desc: "Guidance from professionals." },
        { title: "Certifications", desc: "Industry-recognized." },
        { title: "Workshops", desc: "Interactive learning." }
      ]
    },
    healthcare: {
      Icon: HeartPulse,
      color: "teal",
      heroTitle: "Your Health, Our Priority",
      heroDesc: "We provide exceptional healthcare services with compassion & excellence. Trust us with your family's health.",
      services: [
        { title: "General Checkup", desc: "Comprehensive health exams." },
        { title: "Cardiology", desc: "Expert heart care." },
        { title: "Laboratory", desc: "Accurate & timely testing." },
        { title: "Emergency", desc: "24/7 emergency services." }
      ]
    },
    restaurant: {
      Icon: Utensils,
      color: "orange",
      heroTitle: "A Taste You'll Remember",
      heroDesc: "Experience culinary excellence with our carefully crafted menu, using only the freshest ingredients.",
      services: [
        { title: "Dine-In", desc: "Cozy & elegant atmosphere." },
        { title: "Takeaway", desc: "Fast & convenient." },
        { title: "Catering", desc: "For your special events." },
        { title: "Delivery", desc: "Hot food at your doorstep." }
      ]
    },
    ecommerce: {
      Icon: ShoppingCart,
      color: "violet",
      heroTitle: "Discover Your Style",
      heroDesc: "Shop the latest trends with unbeatable prices. Quality products delivered straight to you.",
      services: [
        { title: "Fast Shipping", desc: "Next day delivery available." },
        { title: "Secure Checkout", desc: "100% safe payments." },
        { title: "24/7 Support", desc: "We're here to help." },
        { title: "Easy Returns", desc: "30-day return policy." }
      ]
    },
    solar: {
      Icon: Sun,
      color: "yellow",
      heroTitle: "Powering the Future",
      heroDesc: "Switch to clean, renewable energy. Save money and the planet with our premium solar solutions.",
      services: [
        { title: "Installation", desc: "Professional setup." },
        { title: "Maintenance", desc: "Keep your panels efficient." },
        { title: "Consultation", desc: "Free energy audit." },
        { title: "Battery Storage", desc: "Power when you need it." }
      ]
    },
    portfolio: {
      Icon: Briefcase,
      color: "pink",
      heroTitle: "Creative Excellence",
      heroDesc: "Showcasing my best work. Let's collaborate to bring your next big idea to life.",
      services: [
        { title: "Web Design", desc: "Beautiful & responsive." },
        { title: "Branding", desc: "Identity that stands out." },
        { title: "Photography", desc: "Capturing moments." },
        { title: "Consulting", desc: "Strategic advice." }
      ]
    }
  };

  const currentDomain = domain ? (domainConfigs[domain] || domainConfigs.healthcare) : domainConfigs.healthcare;
  const ActiveIcon = currentDomain.Icon;
  const displayName = websiteName || "My Website";
  
  // A mapping to map simple color names to tailwind classes if needed, but since we can't easily dynamically interpolate classes in tailwind without safelisting, 
  // we can use standard tailwind colors, assuming they are available or inline styles for simplicity.
  // Actually, we can just use the theme color for the generic parts, or keep the hardcoded teal and just replace the text for now if it's too complex.
  // Let's use a generic primary color class which might be defined in globals.css, or just stick to teal if they haven't safelisted.
  // We'll use inline styles for the dynamic colors to be safe against Tailwind purging.
  
  const colorMap: any = {
    blue: { text: "#2563eb", bg: "#2563eb", lightBg: "#eff6ff" },
    teal: { text: "#0d9488", bg: "#0d9488", lightBg: "#f0fdfa" },
    orange: { text: "#ea580c", bg: "#ea580c", lightBg: "#fff7ed" },
    violet: { text: "#7c3aed", bg: "#7c3aed", lightBg: "#f5f3ff" },
    yellow: { text: "#ca8a04", bg: "#ca8a04", lightBg: "#fefce8" },
    pink: { text: "#db2777", bg: "#db2777", lightBg: "#fdf2f8" },
  };

  const activeColor = colorMap[themeColor || currentDomain.color] || colorMap.teal;

  return (
    <div className="flex flex-col flex-1 min-h-[600px]">
      
      {/* Header & Device Toggles */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 shrink-0 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            Website Preview <span className="text-xl">✨</span>
          </h2>
          <p className="text-slate-500 mt-1">This is how your website looks based on your requirements.</p>
        </div>

        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button 
            onClick={() => setDevice("desktop")}
            className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${device === 'desktop' ? 'bg-white shadow-sm text-primary font-medium' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Monitor size={18} /> <span className="hidden sm:inline text-sm">Desktop</span>
          </button>
          <button 
            onClick={() => setDevice("tablet")}
            className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${device === 'tablet' ? 'bg-white shadow-sm text-primary font-medium' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Tablet size={18} /> <span className="hidden sm:inline text-sm">Tablet</span>
          </button>
          <button 
            onClick={() => setDevice("mobile")}
            className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${device === 'mobile' ? 'bg-white shadow-sm text-primary font-medium' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Smartphone size={18} /> <span className="hidden sm:inline text-sm">Mobile</span>
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex-1 overflow-hidden flex justify-center bg-slate-200/50 rounded-3xl border border-slate-200 p-4 sm:p-8">
        <div 
          className="bg-white rounded-t-2xl shadow-2xl overflow-y-auto border border-slate-300 transition-all duration-500 ease-in-out relative flex flex-col"
          style={{ width: deviceWidths[device] }}
        >
          {/* Mock Browser Header */}
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2 sticky top-0 z-10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto bg-white px-6 py-1 rounded-md text-xs text-slate-400 font-medium flex items-center gap-2 border border-slate-200">
              <span className="text-slate-300">🔒</span> https://{displayName.toLowerCase().replace(/\s+/g, '-')}.domaincraft.ai
            </div>
          </div>

          {/* Mock Website Content */}
          <div className="p-8 pb-20">
            {/* Nav */}
            <div className="flex justify-between items-center mb-16">
              <div className="font-bold text-2xl flex items-center gap-2" style={{ color: activeColor.text }}>
                <ActiveIcon style={{ color: activeColor.text }} size={28} /> {displayName}
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <span style={{ color: activeColor.text }}>Home</span>
                <span>Services</span>
                <span>About Us</span>
                <span>Contact</span>
                <button className="px-5 py-2 text-white rounded-full transition-opacity hover:opacity-90" style={{ backgroundColor: activeColor.bg }}>Get Started</button>
              </div>
            </div>

            {/* Hero */}
            <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                  {currentDomain.heroTitle.split(',')[0]}<br/> 
                  <span style={{ color: activeColor.text }}>{currentDomain.heroTitle.split(',')[1] || currentDomain.heroTitle}</span>
                </h1>
                <p className="text-slate-500 text-lg">
                  {currentDomain.heroDesc}
                </p>
                <div className="flex gap-4 pt-2">
                  <button className="px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: activeColor.bg }}>Learn More</button>
                  <button className="px-6 py-3 font-bold border rounded-lg hover:bg-slate-50 transition-colors" style={{ color: activeColor.text, borderColor: activeColor.text, backgroundColor: 'white' }}>Our Services</button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-full flex items-center justify-center p-8 border-4 border-white shadow-xl" style={{ backgroundColor: activeColor.lightBg }}>
                  <ActiveIcon className="w-full h-full opacity-80" style={{ color: activeColor.text }} />
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-slate-800">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {currentDomain.services.map((service: any) => (
                  <div key={service.title} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-bold text-xl" style={{ backgroundColor: activeColor.lightBg, color: activeColor.text }}>+</div>
                    <h4 className="font-bold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-500">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 shrink-0 gap-4">
        <button 
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"
        >
          <ArrowLeft size={20} /> Previous
        </button>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button 
            className="flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 rounded-full font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex"
          >
            <Code2 size={20} /> Export Code
          </button>
          <button 
            onClick={onNext}
            className="flex-1 sm:flex-none items-center justify-center gap-2 px-8 py-3 rounded-full font-bold bg-primary text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all flex"
          >
            <CheckCircle size={20} /> Accessibility Check <ArrowRight size={20} className="hidden sm:inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
