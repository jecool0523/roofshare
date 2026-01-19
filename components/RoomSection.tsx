import React from 'react';
import { ROOMS } from '../data';

export const RoomSection: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">방 정보 미리보기</h2>
        <button className="text-sm text-primary font-medium flex items-center hover:underline">
            전체보기 <span className="material-icons text-sm">chevron_right</span>
        </button>
      </div>
      
      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {ROOMS.map((room, index) => (
            <div 
                key={room.id} 
                className={`flex gap-4 p-3 border rounded-xl bg-white animate-fade-in-up ${room.status === 'full' ? 'opacity-60 grayscale' : 'border-gray-100 shadow-sm hover:shadow-md transition-shadow'}`}
                style={{ animationDelay: `${index * 150}ms` }}
            >
                {/* Room Image */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 group overflow-hidden rounded-lg">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {room.status === 'full' && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                            <span className="text-white text-xs font-bold border border-white px-2 py-1 rounded">계약완료</span>
                        </div>
                    )}
                </div>

                {/* Room Info */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-gray-900 md:text-lg">{room.name}</h3>
                            {room.status === 'available' && <span className="text-[10px] px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-bold h-fit">공실</span>}
                            {room.status === 'full' && <span className="text-[10px] px-1.5 py-0.5 bg-gray-200 text-gray-500 rounded font-bold h-fit">만실</span>}
                            {room.status === 'soon' && <span className="text-[10px] px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded font-bold h-fit">1명 가능</span>}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            보증금 {room.deposit} / <span className="text-gray-900 font-bold">월세 {room.price}</span>
                        </p>
                    </div>

                    <div className="flex gap-1 flex-wrap mt-2">
                        {room.features.map((tag, i) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-gray-50 text-gray-600 rounded border border-gray-100">
                                {tag}
                            </span>
                        ))}
                        {room.dateAvailable && (
                             <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">
                                {room.dateAvailable}
                             </span>
                        )}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};