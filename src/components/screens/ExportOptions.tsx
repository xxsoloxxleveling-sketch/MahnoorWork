"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Globe, 
  Download, 
  Share2, 
  ArrowLeft, 
  Save, 
  LayoutDashboard,
  CheckCircle2,
  PartyPopper,
  Rocket
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 280, damping: 22 } }
};

const exportCards = [
  {
    title: "Publish to Domain",
    desc: "Connect your custom domain and publish your website live instantly with our secure hosting.",
    icon: Globe,
    action: "Connect Domain",
    recommended: true,
    gradient: "from-primary/8 to-primary-dark/8",
    iconBg: "bg-gradient-to-br from-primary to-primary-dark",
    borderColor: "border-primary",
    hoverGlow: "hover:shadow-primary/15",
  },
  {
    title: "Export Website Files",
    desc: "Download the raw HTML, CSS, and JS files to host the website on your own server.",
    icon: Download,
    action: "Download ZIP",
    recommended: false,
    gradient: "from-emerald-500/6 to-teal-500/6",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    borderColor: "border-emerald-300",
    hoverGlow: "hover:shadow-emerald-500/15",
  },
  {
    title: "Publish to WordPress",
    desc: "Export and automatically install your new design as a custom WordPress theme.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1c4.962 0 9 4.038 9 9 0 4.963-4.038 9-9 9-4.963 0-9-4.037-9-9 0-4.962 4.037-9 9-9zm-2.5 4.5L12 14l2.5-6.5L12 10 9.5 7.5z"/>
      </svg>
    ),
    action: "Connect WordPress",
    recommended: false,
    gradient: "from-blue-500/6 to-sky-500/6",
    iconBg: "bg-gradient-to-br from-[#21759b] to-[#1a5f7f]",
    borderColor: "border-blue-300",
    hoverGlow: "hover:shadow-blue-500/15",
  },
  {
    title: "Share Preview Link",
    desc: "Generate a shareable link to show the preview of your website to clients or friends.",
    icon: Share2,
    action: "Get Preview Link",
    recommended: false,
    gradient: "from-violet-500/6 to-purple-500/6",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    borderColor: "border-violet-300",
    hoverGlow: "hover:shadow-violet-500/15",
  }
];

export default function ExportOptions({ onPrev }: { onPrev: () => void }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const confettiParticles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      backgroundColor: ['#8b5cf6', '#2dd4bf', '#f97316', '#ec4899', '#3b82f6', '#eab308'][i % 6],
      width: `${6 + Math.random() * 8}px`,
      height: `${6 + Math.random() * 8}px`,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      animationDuration: `${1.5 + Math.random() * 2}s`,
      animationDelay: `${Math.random() * 0.8}s`,
    }));
  }, []);

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto relative">
      
      {/* Confetti particles */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {confettiParticles.map((particle) => (
            <div
              key={particle.id}
              className="confetti-particle"
              style={{
                left: particle.left,
                top: '-10px',
                backgroundColor: particle.backgroundColor,
                width: particle.width,
                height: particle.height,
                borderRadius: particle.borderRadius,
                animationDuration: particle.animationDuration,
                animationDelay: particle.animationDelay,
              }}
            />
          ))}
        </div>
      )}

      {/* Success Header */}
      <motion.div 
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-bold text-sm mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <PartyPopper size={18} /> Website Created Successfully!
        </motion.div>
        <h2 className="text-3xl font-extrabold text-slate-800 flex items-center justify-center gap-3">
          Publish & Export
        </h2>
        <p className="text-slate-500 mt-2">Choose how you want to publish or export your new website.</p>
      </motion.div>

      <motion.div 
        className="flex-1 overflow-y-auto pb-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {exportCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.button 
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`card-lift p-7 rounded-2xl border-2 transition-all text-left flex flex-col group relative overflow-hidden bg-gradient-to-br ${card.gradient} ${card.hoverGlow} hover:shadow-xl
                  ${card.recommended ? `${card.borderColor}` : `border-slate-200/80 hover:${card.borderColor}`}
                `}
              >
                {card.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary-dark text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                    Recommended
                  </div>
                )}
                <div className={`w-13 h-13 ${card.iconBg} text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 mb-5 flex-1 leading-relaxed">{card.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  {card.action} <Rocket size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Footer Navigation */}
      <div className="mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/60 shrink-0 gap-4">
        <button 
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 font-semibold hover:bg-white/80 transition-colors w-full sm:w-auto justify-center"
        >
          <ArrowLeft size={20} /> Previous
        </button>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            className="flex-1 sm:flex-none items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-slate-600 hover:bg-white/80 transition-colors flex border border-slate-200"
          >
            <Save size={18} /> Save Project
          </button>
          <motion.button 
            className="flex-1 sm:flex-none items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-white relative overflow-hidden cta-glow flex"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <span className="relative flex items-center gap-2">Go to Dashboard <LayoutDashboard size={18} /></span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
