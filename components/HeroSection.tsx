import React from 'react';
import { ASSETS } from '../data';
import { MixedMediaCarousel } from './MixedMediaCarousel';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh] min-h-[350px] md:h-[500px] bg-gray-100 md:rounded-2xl md:overflow-hidden shadow-sm">
      <MixedMediaCarousel items={ASSETS.hero} />
    </div>
  );
};