'use client';

import { Conference, getDaysUntil, formatDateRange } from '@/data/conferences';

interface ConferenceCardProps {
  conference: Conference;
  index: number;
}

export default function ConferenceCard({ conference, index }: ConferenceCardProps) {
  const daysUntil = getDaysUntil(conference.startDate);
  const deadlineDays = conference.deadlines?.paper 
    ? getDaysUntil(conference.deadlines.paper) 
    : null;

  const getDdayStyle = (days: number): string => {
    if (days < 0) return 'dday-passed';
    if (days <= 7) return 'dday-urgent';
    if (days <= 30) return 'dday-soon';
    if (days <= 90) return 'dday-normal';
    return 'dday-far';
  };

  const getDdayText = (days: number): string => {
    if (days < 0) return '종료';
    if (days === 0) return 'D-Day';
    return `D-${days}`;
  };

  const isPassed = daysUntil < 0;

  return (
    <a
      href={conference.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block bg-white rounded-3xl p-6 card-hover cursor-pointer
        border border-[var(--toss-gray-100)]
        animate-fadeInUp
        ${isPassed ? 'opacity-60' : ''}
      `}
      style={{
        animationDelay: `${index * 80}ms`,
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* 상단: 카테고리 뱃지 & D-Day */}
      <div className="flex items-center justify-between mb-4">
        <span 
          className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${conference.category === '최우수' 
              ? 'bg-[var(--toss-purple)]/10 text-[var(--toss-purple)]' 
              : 'bg-[var(--toss-blue)]/10 text-[var(--toss-blue)]'
            }
          `}
        >
          {conference.category} 학술대회
        </span>
        <span 
          className={`
            px-4 py-1.5 rounded-full text-sm font-bold text-white
            ${getDdayStyle(daysUntil)}
          `}
        >
          {getDdayText(daysUntil)}
        </span>
      </div>

      {/* 학회 약칭 */}
      <h2 className="text-2xl font-bold text-[var(--toss-gray-900)] mb-1">
        {conference.shortName}
      </h2>

      {/* 학회 전체 이름 */}
      <p className="text-sm text-[var(--toss-gray-500)] mb-4 line-clamp-1">
        {conference.fullName}
      </p>

      {/* 날짜 및 장소 */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-[var(--toss-gray-700)]">
          <svg className="w-4 h-4 text-[var(--toss-gray-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">
            {formatDateRange(conference.startDate, conference.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[var(--toss-gray-700)]">
          <svg className="w-4 h-4 text-[var(--toss-gray-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm font-medium">
            {conference.location}, {conference.country}
          </span>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-sm text-[var(--toss-gray-600)] mb-4 line-clamp-2">
        {conference.description}
      </p>

      {/* 논문 마감일 */}
      {deadlineDays !== null && deadlineDays >= 0 && (
        <div 
          className={`
            flex items-center justify-between 
            px-4 py-3 rounded-2xl
            ${deadlineDays <= 14 
              ? 'bg-[var(--toss-red)]/5 border border-[var(--toss-red)]/20' 
              : 'bg-[var(--toss-gray-50)] border border-[var(--toss-gray-100)]'
            }
          `}
        >
          <div className="flex items-center gap-2">
            <svg 
              className={`w-4 h-4 ${deadlineDays <= 14 ? 'text-[var(--toss-red)]' : 'text-[var(--toss-gray-500)]'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-sm font-medium ${deadlineDays <= 14 ? 'text-[var(--toss-red)]' : 'text-[var(--toss-gray-600)]'}`}>
              논문 마감
            </span>
          </div>
          <span 
            className={`
              text-sm font-bold
              ${deadlineDays <= 14 ? 'text-[var(--toss-red)]' : 'text-[var(--toss-gray-700)]'}
            `}
          >
            {deadlineDays === 0 ? '오늘 마감!' : `D-${deadlineDays}`}
          </span>
        </div>
      )}

      {/* 화살표 아이콘 */}
      <div className="flex justify-end mt-4">
        <svg 
          className="w-5 h-5 text-[var(--toss-gray-400)] transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
