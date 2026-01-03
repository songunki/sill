
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920" 
          alt="Stage Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            Premium Stage Lighting Solutions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1]">
            빛으로 완성하는 <br />
            <span className="gradient-text">경이로운 무대</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            20년 이상의 노하우로 공연장, 상업 시설, 야외 특수 조명의 <br className="hidden md:block" />
            최상의 솔루션을 제공합니다. 당신의 공간을 특별하게 만드세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#products" className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all text-center">
              주요 제품 살펴보기
            </a>
            <a href="#contact" className="px-8 py-4 glass-morphism text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center">
              전문가 상담 예약
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};
