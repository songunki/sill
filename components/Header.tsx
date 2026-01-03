
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mockup of the Prism Logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
             <span className="text-white font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl tracking-tighter leading-none">신일특수조명</h1>
            <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">Special Lighting</span>
          </div>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
            카탈로그 요청
          </button>
        </div>
      </div>
    </header>
  );
};
