import React, { useState } from 'react';
import { MediaItem } from '../types';

interface MixedMediaCarouselProps {
  items: MediaItem[];
}

export const MixedMediaCarousel: React.FC<MixedMediaCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
        No media available
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full h-full bg-black group overflow-hidden">
      {/* Media Display Area */}
      <div className="w-full h-full flex items-center justify-center bg-gray-900">
        {currentItem.type === 'video' ? (
          <video
            key={`video-${currentItem.id}`}
            src={currentItem.src}
            poster={currentItem.poster}
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            muted
            loop
            controlsList="nodownload"
          />
        ) : (
          <img
            key={`img-${currentItem.id}`}
            src={currentItem.src}
            alt={currentItem.alt || `Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-2 flex items-center z-10">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all active:scale-90"
          aria-label="Previous Slide"
        >
          <span className="material-icons">chevron_left</span>
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 flex items-center z-10">
        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all active:scale-90"
          aria-label="Next Slide"
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 z-10 pointer-events-none">
        <span className="material-icons text-[14px] text-gray-300">
          {currentItem.type === 'video' ? 'videocam' : 'photo_library'}
        </span>
        <span className="font-medium tracking-wide">
          {currentIndex + 1} / {items.length}
        </span>
      </div>
      
      {/* Gradient Overlay for text readability if needed */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};