import React, { useState } from 'react';
import { HOUSE_INFO, ASSETS } from '../data';

interface BookingOverlayProps {
  onClose: () => void;
}

export const BookingOverlay: React.FC<BookingOverlayProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedTime, setSelectedTime] = useState<string>('10:00');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple calendar generation for visual
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ['10:00', '14:00', '16:00', '18:00', '19:00'];

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
         <div className="bg-white p-8 rounded-2xl shadow-2xl relative z-10 flex flex-col items-center animate-bounce-in mx-4 w-full max-w-xs">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-primary">
              <span className="material-icons text-4xl">check_circle</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">예약 신청 완료!</h2>
            <p className="text-gray-500 text-center text-sm">
              매니저가 확인 후 연락드릴 예정입니다.<br/>
              잠시만 기다려주세요.
            </p>
         </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full max-w-md h-[90vh] sm:h-auto sm:max-h-[90vh] sm:rounded-2xl rounded-t-3xl shadow-2xl relative flex flex-col pointer-events-auto overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-center p-4 border-b border-gray-100 relative">
            <h2 className="text-lg font-bold">투어 예약</h2>
            <button onClick={onClose} className="absolute left-4 p-1 rounded-full hover:bg-gray-100">
                <span className="material-icons">close</span>
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-5 no-scrollbar">
            {/* House Info Summary */}
            <div className="flex gap-3 bg-gray-50 p-3 rounded-xl mb-6">
                <img src={ASSETS.thumb} className="w-16 h-16 rounded-lg object-cover" alt="thumb" />
                <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-sm">{HOUSE_INFO.name}</h3>
                    <p className="text-xs text-gray-500">{HOUSE_INFO.address}</p>
                </div>
            </div>

            {/* Calendar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <button className="p-1"><span className="material-icons text-gray-400">chevron_left</span></button>
                    <span className="font-bold text-gray-800">2024년 1월</span>
                    <button className="p-1"><span className="material-icons text-gray-400">chevron_right</span></button>
                </div>
                <div className="grid grid-cols-7 gap-y-4 text-center text-sm mb-2">
                    <span className="text-gray-400 text-xs">일</span>
                    <span className="text-gray-400 text-xs">월</span>
                    <span className="text-gray-400 text-xs">화</span>
                    <span className="text-gray-400 text-xs">수</span>
                    <span className="text-gray-400 text-xs">목</span>
                    <span className="text-gray-400 text-xs">금</span>
                    <span className="text-gray-400 text-xs">토</span>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
                    {/* Empty slots for start of month */}
                    <span className="p-2"></span><span className="p-2"></span><span className="p-2"></span>
                    
                    {days.map(d => (
                        <div key={d} className="flex justify-center">
                            <button 
                                onClick={() => setSelectedDate(d)}
                                className={`w-9 h-9 rounded-full flex items-center justify-center transition ${
                                    selectedDate === d 
                                    ? 'bg-primary text-white font-bold shadow-md' 
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {d}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">방문 시간 선택</h3>
                <div className="grid grid-cols-3 gap-3">
                    {times.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedTime(t)}
                            className={`py-2 rounded-lg text-sm border transition ${
                                selectedTime === t
                                ? 'border-primary bg-green-50 text-primary font-bold'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-sm">개인 정보</h3>
                <input type="text" placeholder="이름" className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-1 focus:ring-primary outline-none" />
                <input type="tel" placeholder="전화번호" className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-1 focus:ring-primary outline-none" />
                
                <h3 className="font-bold text-gray-900 text-sm pt-2">매니저에게 전달할 메시지</h3>
                <textarea placeholder="궁금한 점이나 요청사항을 적어주세요." className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-1 focus:ring-primary outline-none h-24 resize-none"></textarea>
            </div>
            
            <div className="h-10"></div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-100 bg-white">
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark shadow-green-200'
              }`}
            >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  '예약 확정'
                )}
            </button>
        </div>
      </div>
    </div>
  );
};