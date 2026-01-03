
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">상담 및 견적 문의</h2>
          <p className="text-gray-400 text-lg">프로젝트의 규모와 목적에 맞는 최적의 조명 솔루션을 제안해 드립니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-morphism p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">성함/업체명</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">이메일 주소</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">문의 내용</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-95"
              >
                견적 문의하기
              </button>
            </form>
          </div>

          {/* Contact Info & Map Placeholder */}
          <div className="flex flex-col h-full">
            <div className="glass-morphism p-8 rounded-3xl border border-white/10 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">오시는 길</h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/5 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4388748460596!2d126.9912!3d37.5684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e99b448507%3A0x7d013f9c6c21e3f8!2z7LKt6rOE7LKc66Gc!5e0!3m2!1sko!2skr!4v1700000000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-xl">📍</span>
                  <div>
                    <h4 className="text-white font-semibold">신일특수조명 본사</h4>
                    <p className="text-gray-400 text-sm">서울특별시 중구 청계천로 156 (장사동)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-xl">📞</span>
                  <div>
                    <h4 className="text-white font-semibold">상담 전화</h4>
                    <p className="text-gray-400 text-sm">02-1234-5678 (평일 09:00 - 18:00)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto p-8 rounded-3xl border border-blue-500/20 bg-blue-500/5">
              <h4 className="text-blue-400 font-bold mb-2">대량 주문 및 특판 문의</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                공연장 전체 조명 설계 및 대형 프로젝트 조명 납품은 별도의 특판 가격이 적용됩니다. 사업자 등록증과 함께 문의 내용을 보내주시면 전담 매니저가 연락드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
