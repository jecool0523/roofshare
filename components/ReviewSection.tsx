import React from 'react';
import { REVIEW_DATA } from '../data';

export const ReviewSection: React.FC = () => {
  const { summary, list } = REVIEW_DATA;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">리뷰 <span className="text-gray-400 font-normal text-sm">({summary.count})</span></h2>
      
      {/* Summary Header */}
      <div className="bg-gray-50 rounded-xl p-5 mb-6 flex items-center justify-between animate-fade-in-up">
        <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-900">{summary.score}<span className="text-base text-gray-400 font-normal">/5</span></span>
            <div className="flex text-secondary text-sm mt-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
            </div>
            <span className="text-xs text-gray-400 mt-1">{summary.count}명 평가참여</span>
        </div>
        
        {/* Simple Progress Bars mimicking stats */}
        <div className="flex-1 ml-6 space-y-2">
            {summary.details.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] w-8 text-gray-500">{stat.label}</span>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: stat.val }}></div>
                    </div>
                    <span className="text-[10px] text-gray-400">{summary.score}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50">최신순</button>
        <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50">포토 리뷰만</button>
        <button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50">별점 높은순</button>
      </div>

      {/* Review List */}
      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {list.map((review, index) => (
            <div 
                key={review.id} 
                className="border-b border-gray-100 pb-6 last:border-0 md:border-0 md:bg-white md:p-4 md:rounded-xl md:shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <img src={review.avatar} alt={review.user} className="w-8 h-8 rounded-full bg-gray-200" />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-800">{review.user}</span>
                            <span className="text-[10px] text-gray-400">{review.date}</span>
                        </div>
                    </div>
                    <div className="flex text-secondary text-xs">
                        {'★★★★★'.split('').map((s, i) => <span key={i} className={i < review.rating ? '' : 'text-gray-200'}>{s}</span>)}
                    </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {review.content}
                </p>

                {review.images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {review.images.map((img, i) => (
                            <img key={i} src={img} alt="review" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                        ))}
                    </div>
                )}
            </div>
        ))}
      </div>
      
      <button className="w-full py-3 mt-4 text-sm font-bold text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        리뷰 전체보기
      </button>
    </div>
  );
};