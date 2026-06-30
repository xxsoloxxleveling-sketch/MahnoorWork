"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Lock } from "lucide-react";

export default function CustomizeChat({ onNext, onPrev, themeColor }: { onNext: () => void, onPrev: () => void, themeColor: string }) {

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
          
          <div className="w-full h-full max-w-4xl bg-white rounded-xl shadow-xl border border-slate-200/60 overflow-hidden flex flex-col">
            <div className="bg-slate-50 p-2 border-b border-slate-200 flex items-center gap-2 shrink-0">
              <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 flex justify-center mr-8">
                <div className="bg-white border border-slate-200 rounded-md py-1 px-8 text-xs font-medium text-slate-400 flex items-center gap-1.5 shadow-sm">
                   <Lock size={10} /> preview.domaincraft.ai
                </div>
              </div>
            </div>
            
            {/* Website Content */}
            <div className="flex-1 overflow-y-auto p-10">
              <div className="flex items-center justify-between mb-16">
                 <div className={`text-2xl font-extrabold tracking-tight transition-colors duration-500 ${themeColor === 'blue' ? 'text-blue-600' : 'text-teal-600'}`}>BrightCare</div>
                 <div className="flex gap-6 text-slate-500 text-sm font-medium">
                   <span>Services</span>
                   <span>About</span>
                   <span>Contact</span>
                 </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h1 className="text-5xl font-extrabold text-slate-900 leading-[1.1] mb-5 tracking-tight">Modern Healthcare <br/>for Your Family</h1>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">Experience compassionate, expert medical care tailored to your unique needs.</p>
                  <div className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-bold transition-all duration-500 shadow-md ${themeColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-teal-600 hover:bg-teal-700'}`}>
                    Book Appointment
                  </div>
                </div>
                <div className="flex-1 w-full max-w-sm aspect-square bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center overflow-hidden relative">
                   <div className="text-slate-400 font-medium text-sm flex flex-col items-center gap-2">
                     Image Placeholder
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
