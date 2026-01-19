import React, { useState } from 'react';
import { MANAGER_PROFILE } from '../data';

interface InquiryOverlayProps {
  onClose: () => void;
}

export const InquiryOverlay: React.FC<InquiryOverlayProps> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
         <div className="bg-white p-8 rounded-2xl shadow-2xl relative z-10 flex flex-col items-center animate-bounce-in mx-4 w-full max-w-xs">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-500">
              <span className="material-icons text-4xl">send</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">문의 전송 완료</h2>
            <p className="text-gray-500 text-center text-sm">
              빠른 시일 내에 답변 드리겠습니다.
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
      
      <div className="bg-white w-full max-w-md h-[80vh] sm:h-auto sm:max-h-[85vh] sm:rounded-2xl rounded-t-3xl shadow-2xl relative flex flex-col pointer-events-auto animate-slide-up">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
                <span className="material-icons">chevron_left</span>
            </button>
            <h2 className="text-lg font-bold">문의하기</h2>
            <div className="w-8"></div> {/* Spacer for center alignment */}
        </div>

        <div className="p-5 flex-1 overflow-y-auto no-scrollbar">
            <div className="relative mb-4">
                <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:border-primary text-sm">
                    <option>문의 유형 선택</option>
                    <option>방 정보</option>
                    <option>입주 날짜</option>
                    <option>시설 문의</option>
                    <option>기타</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <span className="material-icons text-sm">expand_more</span>
                </div>
            </div>

            <textarea 
                className="w-full h-32 bg-gray-50 rounded-xl p-4 text-sm border-none focus:ring-1 focus:ring-primary outline-none resize-none mb-4"
                placeholder="자세한 문의 내용을 입력해주세요. (예: 방 사진을 더 볼 수 있을까요?)"
            ></textarea>

            <button className="w-full py-3 bg-gray-50 rounded-xl text-gray-500 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition border border-dashed border-gray-300">
                <span className="material-icons-outlined text-lg">camera_alt</span>
                이미지 첨부
            </button>

            {/* SMS Direct Contact */}
            <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">관리자에게 바로 문자하기</h3>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">빠른답변</span>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                        급한 용무나 간단한 문의는 문자로 남겨주시면<br/>매니저가 확인 후 바로 답변 드립니다.
                    </p>
                    <a 
                        href={`sms:${MANAGER_PROFILE.phoneNumber.replace(/-/g, '')}`} 
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-green-200 text-primary font-bold rounded-lg text-sm hover:bg-green-50 transition shadow-sm"
                    >
                        <span className="material-icons text-sm">sms</span>
                        {MANAGER_PROFILE.phoneNumber} 로 문자 보내기
                    </a>
                </div>
            </div>
            
            <div className="h-4"></div>
        </div>

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
                  '문의 보내기'
                )}
            </button>
        </div>
      </div>
    </div>
  );
};