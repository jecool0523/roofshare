import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { InfoSection, InfoSummary, InfoDetails } from './components/InfoSection';
import { RoomSection } from './components/RoomSection';
import { ReviewSection } from './components/ReviewSection';
import { LocationSection } from './components/LocationSection';
import { BookingOverlay } from './components/BookingOverlay';
import { InquiryOverlay } from './components/InquiryOverlay';
import { ModalType } from './types';
import { ManagerOverlay } from './components/ManagerOverlay';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(ModalType.NONE);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky headers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = () => setActiveModal(ModalType.BOOKING);
  const openInquiry = () => setActiveModal(ModalType.INQUIRY);
  const openManager = () => setActiveModal(ModalType.MANAGER);
  const closeModal = () => setActiveModal(ModalType.NONE);

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-black text-xl cursor-pointer">
                  <span className="material-icons">home</span>
                  Anne House
              </div>
              <div className="flex gap-6 text-sm font-medium text-gray-600">
                  <button className="hover:text-primary transition">하우스 검색</button>
                  <button className="hover:text-primary transition">회원가입</button>
                  <button className="hover:text-primary transition">로그인</button>
              </div>
          </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="flex justify-center md:py-8">
        <div className="w-full max-w-md md:max-w-7xl md:px-6 bg-white shadow-xl md:shadow-none min-h-screen relative pb-24 md:pb-0 md:bg-transparent">
          
          {/* Mobile Navigation */}
          <nav className={`md:hidden fixed top-0 max-w-md w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="px-4 flex justify-between items-center">
              <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'}`}>
                <span className="material-icons">arrow_back</span>
              </button>
              <div className="flex gap-2">
                <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'}`}>
                  <span className="material-icons-outlined">favorite_border</span>
                </button>
                <button className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white bg-black/20 backdrop-blur-sm'}`}>
                  <span className="material-icons-outlined">ios_share</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Responsive Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
            
            {/* Left Content Column (Main Info) */}
            <div className="md:col-span-8">
                {/* Hero */}
                <HeroSection />
                
                {/* Mobile Info Wrapper */}
                <div className="md:hidden relative z-10 bg-white rounded-t-3xl -mt-6 px-5 pt-8 pb-4 shadow-sm">
                  <InfoSection onManagerClick={openManager} />
                </div>

                {/* Mobile Sections */}
                <div className="md:hidden">
                    <div className="h-2 bg-gray-50 border-t border-b border-gray-100" />
                    <div className="px-5 py-8 bg-white"><RoomSection /></div>
                    <div className="h-2 bg-gray-50 border-t border-b border-gray-100" />
                    <div className="px-5 py-8 bg-white"><LocationSection /></div>
                    <div className="h-2 bg-gray-50 border-t border-b border-gray-100" />
                    <div className="px-5 py-8 bg-white mb-8"><ReviewSection /></div>
                </div>

                {/* Desktop Content Sections (Hidden on Mobile) */}
                <div className="hidden md:flex flex-col gap-8 mt-8">
                    {/* Desktop House Details */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <InfoDetails onManagerClick={openManager} />
                    </div>
                    
                    {/* Desktop Rooms */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <RoomSection />
                    </div>

                    {/* Desktop Location */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <LocationSection />
                    </div>

                    {/* Desktop Reviews */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <ReviewSection />
                    </div>
                </div>
            </div>

            {/* Right Sidebar Column (Sticky Booking Info) - Desktop Only */}
            <div className="hidden md:block md:col-span-4 relative">
                <div className="sticky top-24 flex flex-col gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <InfoSummary />
                        <div className="mt-6 flex flex-col gap-3">
                            <button 
                                onClick={openBooking}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 active:scale-[0.98] transition-transform"
                            >
                                투어 신청하기
                            </button>
                            <button 
                                onClick={openInquiry}
                                className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold h-12 rounded-xl flex items-center justify-center transition"
                            >
                                <span className="material-icons-outlined text-lg mr-1">chat_bubble_outline</span>
                                문의하기
                            </button>
                            <div className="flex gap-2 mt-2">
                                <button className="flex-1 py-2 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1">
                                    <span className="material-icons text-sm">favorite_border</span> 찜하기
                                </button>
                                <button className="flex-1 py-2 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1">
                                    <span className="material-icons text-sm">ios_share</span> 공유하기
                                </button>
                                <button className="flex-1 py-2 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 flex items-center justify-center gap-1">
                                    <span className="material-icons text-sm">compare_arrows</span> 비교함
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                        <h3 className="font-bold text-gray-900 mb-2">안심 계약 보장</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            저희 쉐어하우스는 입주자의 안전한 계약을 위해 보증금 보호 정책을 운영하고 있습니다. 허위 매물 신고 시 100% 보상해 드립니다.
                        </p>
                    </div>
                </div>
            </div>

          </div>

          {/* Mobile Sticky Bottom Action Bar */}
          <div className="md:hidden fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 p-4 pb-6 flex items-center gap-3 z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            <button 
              onClick={openInquiry}
              className="flex flex-col items-center justify-center min-w-[70px] text-gray-500 hover:text-gray-800 transition"
            >
              <span className="material-icons-outlined text-2xl mb-0.5">chat_bubble_outline</span>
              <span className="text-[10px] font-medium">문의하기</span>
            </button>
            <button 
              onClick={openBooking}
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 active:scale-[0.98] transition-transform"
            >
              투어 신청하기
            </button>
          </div>

          {/* Overlays / Modals */}
          {activeModal === ModalType.BOOKING && <BookingOverlay onClose={closeModal} />}
          {activeModal === ModalType.INQUIRY && <InquiryOverlay onClose={closeModal} />}
          {activeModal === ModalType.MANAGER && <ManagerOverlay onClose={closeModal} onChatClick={openInquiry} />}

        </div>
      </div>
    </div>
  );
};

export default App;