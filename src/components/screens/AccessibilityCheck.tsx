"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowLeft, Wand2, ShieldCheck, AlertCircle, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function AccessibilityCheck({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
  const [isFixed, setIsFixed] = useState(false);
  const [animatedScore, setAnimatedScore] = useState(0);
  const targetScore = isFixed ? 100 : 85;

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const from = 0;
    
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setAnimatedScore(Math.round(from + (targetScore - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetScore]);

  const handleFix = () => {
    setAnimatedScore(85); // reset to animate from current
    setIsFixed(true);
  };

  const scoreColor = isFixed ? '#10b981' : '#f59e0b';
  const scoreBg = isFixed ? 'bg-emerald-50' : 'bg-amber-50';

  return (
    <div className="flex flex-col flex-1 min-h-[500px] max-w-4xl mx-auto py-4">
      
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-extrabold text-slate-800 flex items-center gap-3">
          <ShieldCheck className="text-primary" size={30} /> Accessibility Results
        </h2>
        <p className="text-slate-500 mt-2">WCAG 2.2 compliance check for your generated website.</p>
      </motion.div>

      <motion.div 
        className="flex-1 overflow-y-auto pr-4 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Top Summary Row */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={itemVariants}>
          {/* Animated Score Gauge */}
          <div className={`glass-card rounded-2xl p-6 flex flex-col items-center justify-center ${scoreBg}/30 border-slate-200/60`}>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Score</h3>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background arc */}
                <path
                  className="text-slate-100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Animated score arc */}
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="100"
                  animate={{ strokeDashoffset: 100 - animatedScore }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <motion.span 
                  className="text-4xl font-black"
                  style={{ color: scoreColor }}
                  key={animatedScore}
                >
                  {animatedScore}
                </motion.span>
                <span className="text-[10px] text-slate-400 font-bold">/ 100</span>
              </div>
            </div>
            <motion.div 
              className={`mt-3 px-4 py-1 rounded-full text-xs font-bold ${isFixed ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}
              layout
            >
              {isFixed ? '✨ Excellent' : '⚡ Good'}
            </motion.div>
          </div>

          {/* Summary Stats */}
          <div className="glass-card rounded-2xl p-6 md:col-span-2 flex flex-col justify-center border-slate-200/60">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Summary</h3>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-emerald-500">3</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Passed</span>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className={`text-4xl font-black ${isFixed ? 'text-emerald-500' : 'text-red-500'}`}
                  key={isFixed ? 'fixed' : 'error'}
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                >
                  {isFixed ? '0' : '1'}
                </motion.span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Errors</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-slate-200">0</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">N/A</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-5 leading-relaxed">
              We check your website against WCAG 2.2 guidelines to ensure it is usable by all users, including those with disabilities.
            </p>
          </div>
        </motion.div>

        {/* Detailed Results */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold text-slate-800 mb-4">Detailed Results</h3>
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            
            {/* Error Item */}
            <motion.div 
              className={`p-5 border-b border-slate-100 transition-all duration-500 ${isFixed ? 'bg-emerald-50/40' : 'bg-red-50/30'}`}
              layout
            >
              <div className="flex items-start gap-4">
                <motion.div className="mt-0.5" layout>
                  <AnimatePresence mode="wait">
                    {isFixed ? (
                      <motion.div key="fixed" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 500 }}>
                        <CheckCircle2 className="text-emerald-500" size={22} />
                      </motion.div>
                    ) : (
                      <motion.div key="error">
                        <AlertCircle className="text-red-500" size={22} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-800">Low Color Contrast</h4>
                    <motion.span 
                      className={`text-[10px] font-bold px-3 py-1 rounded-full ${isFixed ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}
                      layout
                    >
                      {isFixed ? '✓ Fixed' : 'Needs Fix'}
                    </motion.span>
                  </div>
                  <p className="text-slate-500 mt-1 text-sm leading-relaxed">
                    {isFixed 
                      ? "The contrast ratio has been automatically increased for better readability."
                      : "Text elements may have insufficient contrast with their background."
                    }
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Passed Items */}
            {[
              { title: "Alt Text Added", desc: "All images have descriptive alternative text." },
              { title: "Keyboard Navigation", desc: "All interactive elements are keyboard accessible." },
              { title: "Heading Structure", desc: "Headings follow a logical hierarchy." },
            ].map((item, i) => (
              <div key={item.title} className={`p-5 ${i < 2 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 mt-0.5" size={22} />
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 mt-0.5 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/60 shrink-0 gap-4">
        <button 
          onClick={onPrev}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 font-semibold hover:bg-white/80 transition-colors w-full sm:w-auto justify-center"
        >
          <ArrowLeft size={20} /> Previous
        </button>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isFixed ? (
            <motion.button 
              onClick={handleFix}
              className="flex-1 sm:flex-none items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-white relative overflow-hidden cta-glow flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
              <Wand2 size={18} className="relative" />
              <span className="relative">Fix Automatically</span>
            </motion.button>
          ) : (
            <motion.button 
              onClick={onNext}
              className="flex-1 sm:flex-none items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:-translate-y-1 transition-all flex"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Continue to Export <ChevronRight size={18} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
