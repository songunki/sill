
import React from 'react';
import { PRODUCTS } from '../constants';

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">주요 제품 라인업</h2>
            <p className="text-gray-400 text-lg">성능과 내구성을 모두 갖춘 신일특수조명의 대표 제품들을 만나보세요.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full border border-gray-700 hover:border-blue-500 transition-colors text-sm font-medium">전체보기</button>
            <button className="px-6 py-2 rounded-full border border-gray-700 hover:border-blue-500 transition-colors text-sm font-medium">무대조명</button>
            <button className="px-6 py-2 rounded-full border border-gray-700 hover:border-blue-500 transition-colors text-sm font-medium">특수조명</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col glass-morphism rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-[11px] text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                        #{feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 rounded-lg border border-gray-700 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all">
                    상세 사양 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
