import React from 'react';
import { HOUSE_INFO, AMENITIES, MANAGER_PROFILE, ASSETS } from '../data';

interface InfoDetailsProps {
  onManagerClick: () => void;
}

export const InfoSummary: React.FC = () => {
  return (
    <div>
       {/* Header Info */}
       <div>
        <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 flex-wrap">
                <span className="text-primary bg-green-50 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">{HOUSE_INFO.tags.primary}</span>
                <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">{HOUSE_INFO.tags.secondary}</span>
            </div>
            <span className="text-gray-400 text-xs whitespace-nowrap ml-2">최근 업데이트: {HOUSE_INFO.updateDate}</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{HOUSE_INFO.name}</h1>
        <p className="text-gray-500 text-sm flex items-start gap-1">
            <span className="material-icons text-[16px] mt-0.5 flex-shrink-0">location_on</span>
            <span className="leading-snug">{HOUSE_INFO.address}</span>
        </p>
      </div>

      {/* Price Grid */}
      <div className="flex items-center justify-between border-b border-gray-100 py-6 px-1">
        <div className="flex flex-col items-center flex-1">
          <span className="text-xs text-gray-500 mb-1">월세</span>
          <span className="text-lg sm:text-xl font-bold text-primary">{HOUSE_INFO.price.rent}<span className="text-sm font-normal text-gray-800 ml-0.5">만원</span></span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-xs text-gray-500 mb-1">보증금</span>
          <span className="text-lg sm:text-lg font-bold text-gray-800">{HOUSE_INFO.price.deposit}<span className="text-sm font-normal ml-0.5">만원</span></span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-xs text-gray-500 mb-1">관리비</span>
          <span className="text-lg sm:text-lg font-bold text-gray-800">{HOUSE_INFO.price.maintenance}<span className="text-sm font-normal ml-0.5">만원</span></span>
        </div>
      </div>

      {/* House Stats */}
      <div className="grid grid-cols-3 gap-3">
        {HOUSE_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors">
                <span className="material-icons-outlined text-primary mb-1 text-2xl">{stat.icon}</span>
                <span className="text-xs text-gray-500">{stat.label}</span>
                <span className="text-sm font-bold text-gray-800 mt-0.5">{stat.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export const InfoDetails: React.FC<InfoDetailsProps> = ({ onManagerClick }) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Features */}
      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-1">
            <span className="material-icons text-secondary text-xl">star</span>
            하우스 특징
        </h2>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
            <ul className="space-y-2.5">
                {HOUSE_INFO.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-400 mt-0.5 material-icons text-[16px] flex-shrink-0">check_circle</span>
                        <span className="leading-snug">{feat}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* Manager Preview Card */}
      <div 
        onClick={onManagerClick}
        className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition active:scale-[0.99] group shadow-sm"
      >
        <div className="relative flex-shrink-0">
            <img src={ASSETS.manager.avatar} alt="Manager" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white p-[2px] rounded-full border border-white">
                <span className="material-icons text-[12px] block">check</span>
            </span>
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors truncate mr-2">매니저 {MANAGER_PROFILE.name}</h3>
                <span className="text-xs text-gray-400 flex items-center flex-shrink-0">
                    프로필 <span className="material-icons text-[14px]">chevron_right</span>
                </span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-1 truncate">
                {MANAGER_PROFILE.shortDesc}
            </p>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-lg font-bold mb-4">제공 옵션</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 gap-x-4">
            {AMENITIES.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:bg-green-50 transition-all hover:-translate-y-1">
                        <span className="material-icons-outlined text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium text-center break-keep">{item.label}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Default export for mobile backward compatibility
export const InfoSection: React.FC<InfoDetailsProps> = ({ onManagerClick }) => {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <InfoSummary />
      <InfoDetails onManagerClick={onManagerClick} />
    </div>
  );
};