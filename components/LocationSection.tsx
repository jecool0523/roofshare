import React from 'react';
import { LOCATION_INFO, HOUSE_INFO, ASSETS } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-lg font-bold mb-3">위치</h2>
      <div className="relative w-full h-48 md:h-80 bg-gray-200 rounded-xl overflow-hidden mb-3 group">
        <img 
            src={ASSETS.mapBg} 
            alt="Map Background" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Map Pin UI */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 mb-1 animate-bounce">
                    <span className="material-icons text-primary text-sm">location_on</span>
                    <span className="text-xs font-bold text-gray-800">{HOUSE_INFO.name}</span>
                </div>
                <div className="w-1.5 h-1.5 bg-black/20 rounded-full blur-[1px]"></div>
            </div>
        </div>
        <button 
            onClick={() => window.open(LOCATION_INFO.mapLink, '_blank')}
            className="absolute bottom-3 right-3 bg-white text-xs font-bold px-3 py-1.5 rounded shadow text-gray-700 hover:bg-gray-50 transition"
        >
            지도 자세히 보기
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {LOCATION_INFO.tags.map((item, i) => (
            <span key={i} className="flex items-center gap-1 text-xs whitespace-nowrap bg-gray-100 px-2.5 py-1.5 rounded-lg text-gray-600">
                <span className="material-icons text-[14px] text-gray-500">{item.icon}</span> 
                {item.text}
            </span>
        ))}
      </div>
    </div>
  );
};