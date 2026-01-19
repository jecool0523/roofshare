import React from 'react';
import { MANAGER_PROFILE, ASSETS } from '../data';

interface ManagerOverlayProps {
  onClose: () => void;
  onChatClick: () => void;
}

export const ManagerOverlay: React.FC<ManagerOverlayProps> = ({ onClose, onChatClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full max-w-md h-[85vh] sm:h-[800px] sm:rounded-2xl rounded-t-3xl shadow-2xl relative flex flex-col pointer-events-auto animate-slide-up overflow-hidden">
        
        {/* Header Image */}
        <div className="h-40 bg-gray-200 relative">
            <img src={ASSETS.manager.header} className="w-full h-full object-cover opacity-80" alt="header" />
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between">
                <button onClick={onClose} className="p-1 rounded-full bg-black/20 text-white backdrop-blur-md">
                    <span className="material-icons">arrow_back</span>
                </button>
            </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 overflow-y-auto relative bg-white -mt-6 rounded-t-3xl px-6 pt-12 pb-24">
            
            {/* Avatar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md relative">
                    <img src={ASSETS.manager.avatar} className="w-full h-full rounded-full object-cover" alt="Manager" />
                    <span className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                        <span className="material-icons text-sm block">check</span>
                    </span>
                </div>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-900">매니저 {MANAGER_PROFILE.name}</h2>
                <p className="text-gray-500 text-sm">{MANAGER_PROFILE.title}</p>
                <div className="flex justify-center gap-4 mt-4">
                    <span className="px-3 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center gap-1">
                        <span className="material-icons text-[14px] text-gray-400">schedule</span> 응답률: {MANAGER_PROFILE.stats.responseRate}
                    </span>
                    <span className="px-3 py-1 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center gap-1">
                        <span className="material-icons text-[14px] text-green-500">check_circle</span> 평균 응답: {MANAGER_PROFILE.stats.responseTime}
                    </span>
                </div>
            </div>

            <div className="space-y-8">
                <section>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">매니저 소개</h3>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {MANAGER_PROFILE.fullDesc}
                    </p>
                </section>

                <section>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">우리집 문화 및 규칙</h3>
                    <ul className="space-y-3">
                        {MANAGER_PROFILE.rules.map((rule, i) => (
                             <li key={i} className="flex gap-3 items-start">
                                <span className="text-xl">{rule.icon}</span>
                                <span className="text-sm text-gray-700 pt-0.5">{rule.text}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">매니저의 추천 스팟</h3>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {MANAGER_PROFILE.spots.map((spot, i) => (
                             <div key={i} className="w-32 flex-shrink-0">
                                <img src={spot.img} className="w-32 h-32 rounded-lg object-cover mb-2" alt={spot.name} />
                                <p className="text-xs font-bold text-gray-800">{spot.name}</p>
                                <p className="text-[10px] text-gray-500">{spot.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>

        {/* CTA */}
        <div className="p-4 border-t border-gray-100 bg-white absolute bottom-0 w-full">
            <button 
                onClick={onChatClick}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:bg-primary-dark transition"
            >
                매니저와 대화하기
            </button>
        </div>

      </div>
    </div>
  );
};