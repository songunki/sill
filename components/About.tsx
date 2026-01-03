
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-morphism p-4 border-2 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
                alt="Company History" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-morphism p-8 rounded-2xl hidden md:block border border-white/20">
              <span className="block text-5xl font-black text-blue-500 mb-2">20+</span>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs">Years of Experience</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              청계천 20년의 전통, <br />
              <span className="text-blue-500 italic">신일특수조명</span>의 약속
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                신일특수조명은 서울의 심장부인 청계천에서 지난 20여 년간 특수조명 한 길만을 걸어왔습니다. 
                단순히 조명을 파는 것이 아니라, 빛을 통해 고객의 비즈니스 가치를 높이는 경험을 제공합니다.
              </p>
              <p>
                국내 유수의 공연장, 대규모 이벤트 회사, 그리고 글로벌 상업 브랜드 매장까지 
                수많은 현장에서 증명된 기술력과 최신 LED 기술을 결합하여 
                고객이 상상하는 그 이상의 화려함을 현실로 만들어 드립니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                <h4 className="text-white font-bold mb-2">맞춤형 컨설팅</h4>
                <p className="text-sm text-gray-500">현장 상황에 맞는 최적의 배치와 조명 연출을 제안합니다.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                <h4 className="text-white font-bold mb-2">신속한 A/S</h4>
                <p className="text-sm text-gray-500">20년 신뢰의 바탕인 철저한 사후 관리 시스템을 운영합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
