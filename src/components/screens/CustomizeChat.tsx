"use client";
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Lock,
  GraduationCap, 
  HeartPulse, 
  Utensils, 
  ShoppingCart, 
  Sun, 
  Briefcase 
} from "lucide-react";

const domainConfigs: Record<string, any> = {
  education: {
    Icon: GraduationCap,
    color: "blue",
    heroTitle: "Empowering Your Future",
    heroDesc: "Discover world-class education tailored to your goals. Learn from experts and build your career.",
    buttonText: "Explore Courses"
  },
  healthcare: {
    Icon: HeartPulse,
    color: "teal",
    heroTitle: "Your Health, Our Priority",
    heroDesc: "We provide exceptional healthcare services with compassion & excellence. Trust us with your family's health.",
    buttonText: "Book Appointment"
  },
  restaurant: {
    Icon: Utensils,
    color: "orange",
    heroTitle: "A Taste You'll Remember",
    heroDesc: "Experience culinary excellence with our carefully crafted menu, using only the freshest ingredients.",
    buttonText: "View Menu"
  },
  ecommerce: {
    Icon: ShoppingCart,
    color: "violet",
    heroTitle: "Discover Your Style",
    heroDesc: "Shop the latest trends with unbeatable prices. Quality products delivered straight to you.",
    buttonText: "Shop Now"
  },
  solar: {
    Icon: Sun,
    color: "yellow",
    heroTitle: "Powering the Future",
    heroDesc: "Switch to clean, renewable energy. Save money and the planet with our premium solar solutions.",
    buttonText: "Get Quote"
  },
  portfolio: {
    Icon: Briefcase,
    color: "pink",
    heroTitle: "Creative Excellence",
    heroDesc: "Showcasing my best work. Let's collaborate to bring your next big idea to life.",
    buttonText: "Hire Me"
  }
};

const colorMap: any = {
  blue: { text: "#2563eb", bg: "#2563eb", lightBg: "#eff6ff" },
  teal: { text: "#0d9488", bg: "#0d9488", lightBg: "#f0fdfa" },
  orange: { text: "#ea580c", bg: "#ea580c", lightBg: "#fff7ed" },
  violet: { text: "#7c3aed", bg: "#7c3aed", lightBg: "#f5f3ff" },
  yellow: { text: "#ca8a04", bg: "#ca8a04", lightBg: "#fefce8" },
  pink: { text: "#db2777", bg: "#db2777", lightBg: "#fdf2f8" },
};

export default function CustomizeChat({ onNext, onPrev, themeColor, domain, websiteName, darkMode }: { onNext: () => void, onPrev: () => void, themeColor: string, domain: string | null, websiteName: string, darkMode?: boolean }) {
  const currentDomain = domain ? (domainConfigs[domain] || domainConfigs.healthcare) : domainConfigs.healthcare;
  const ActiveIcon = currentDomain.Icon;
  const displayName = websiteName || "My Website";
  
  const activeColor = colorMap[themeColor || currentDomain.color] || colorMap.teal;

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      
      <div className="mb-3 flex items-end justify-between shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Customize Your Site
          </h2>
          <p className="text-slate-500 mt-1">Talk to your AI assistant to make adjustments instantly.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden min-h-0">
        
        {/* Full Width Preview */}
        <div className="w-full h-full bg-slate-100/50 rounded-2xl border border-slate-200 p-4 overflow-hidden relative flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          
          <div className={`w-full h-full max-w-4xl rounded-xl shadow-xl border transition-all duration-500 ease-in-out overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200/60'}`}>
            <div className={`p-2 border-b flex items-center gap-2 shrink-0 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 flex justify-center mr-8">
                <div className={`border rounded-md py-1 px-8 text-xs font-medium flex items-center gap-1.5 shadow-sm ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-400'}`}>
                   <Lock size={10} /> preview.domaincraft.ai
                </div>
              </div>
            </div>
            
            {/* Website Content */}
            <div className={`flex-1 overflow-y-auto p-10 transition-colors duration-500 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
              <div className="flex justify-between items-center mb-16">
                 <div className="text-2xl font-extrabold tracking-tight transition-colors duration-500 flex items-center gap-2" style={{ color: activeColor.text }}>
                   <ActiveIcon size={24} /> {displayName}
                 </div>
                 <div className={`flex gap-6 text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                   <span className="cursor-pointer hover:underline">Services</span>
                   <span className="cursor-pointer hover:underline">About</span>
                   <span className="cursor-pointer hover:underline">Contact</span>
                 </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h1 className={`text-5xl font-extrabold leading-[1.1] mb-5 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {currentDomain.heroTitle.split(',')[0]}<br/>
                    <span style={{ color: activeColor.text }}>{currentDomain.heroTitle.split(',')[1] || currentDomain.heroTitle}</span>
                  </h1>
                  <p className={`text-lg mb-8 leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>{currentDomain.heroDesc}</p>
                  <div className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-bold transition-all duration-500 shadow-md cursor-pointer hover:opacity-90" style={{ backgroundColor: activeColor.bg }}>
                    {currentDomain.buttonText}
                  </div>
                </div>
                <div className={`flex-1 w-full max-w-sm aspect-square rounded-2xl border flex items-center justify-center overflow-hidden relative ${darkMode ? 'border-slate-800' : 'border-slate-100'}`} style={{ backgroundColor: darkMode ? `${activeColor.text}20` : activeColor.lightBg }}>
                   <div className="font-medium text-sm flex flex-col items-center gap-2" style={{ color: activeColor.text }}>
                     <ActiveIcon size={48} className="opacity-70 animate-pulse" />
                     {displayName} Image
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 flex items-center justify-between border-t border-slate-200 shrink-0 pb-1">
        <button 
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 font-semibold hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft size={20} /> Previous
        </button>
        
        <button 
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 rounded-full font-bold bg-primary text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all"
        >
          Accessibility Check <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
