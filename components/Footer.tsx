
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">신일특수조명</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              조명의 모든 것, 신일특수조명이 책임집니다. 무대, 실내외 광고, 전시 등 빛이 필요한 모든 순간에 함께하겠습니다.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'YT', 'KT'].map(icon => (
                <div key={icon} className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-[10px] font-bold text-gray-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex flex-col">
                <span className="text-gray-300 font-medium">전화번호</span>
                <span>02-1234-5678</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 font-medium">이메일</span>
                <span>info@sisl.co.kr</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-300 font-medium">오시는 길</span>
                <span>서울특별시 중구 청계천로 156 (장사동)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Useful Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">제품 카탈로그 다운로드</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">프로젝트 포트폴리오</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium">
            &copy; 2026 SHINIL SPECIAL LIGHTING. All rights reserved.
          </p>
          <div className="flex gap-8">
             <span className="text-gray-700 text-xs">Made with Precision by Lighting Experts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
