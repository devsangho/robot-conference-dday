'use client';

import { Conference, getDaysUntil } from '@/data/conferences';

interface StatsCardProps {
  conferences: Conference[];
}

export default function StatsCard({ conferences }: StatsCardProps) {
  const upcomingConferences = conferences.filter(c => getDaysUntil(c.startDate) >= 0);
  const nextConference = upcomingConferences.sort(
    (a, b) => getDaysUntil(a.startDate) - getDaysUntil(b.startDate)
  )[0];

  const upcomingDeadlines = conferences
    .filter(c => c.deadlines?.paper && getDaysUntil(c.deadlines.paper) >= 0)
    .sort((a, b) => getDaysUntil(a.deadlines!.paper!) - getDaysUntil(b.deadlines!.paper!));

  const nearestDeadline = upcomingDeadlines[0];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {/* 다음 학회 */}
      <div 
        className="bg-gradient-to-br from-[var(--toss-blue)] to-[var(--toss-blue-dark)] rounded-3xl p-5 text-white"
        style={{ boxShadow: '0 8px 32px -8px rgba(49, 130, 246, 0.4)' }}
      >
        <p className="text-sm opacity-80 mb-1">다음 학회까지</p>
        {nextConference ? (
          <>
            <p className="text-3xl font-bold mb-2">
              {getDaysUntil(nextConference.startDate)}
              <span className="text-lg font-medium opacity-80">일</span>
            </p>
            <p className="text-sm font-medium truncate">
              {nextConference.shortName}
            </p>
          </>
        ) : (
          <p className="text-lg font-medium">예정된 학회 없음</p>
        )}
      </div>

      {/* 논문 마감 */}
      <div 
        className={`rounded-3xl p-5 text-white ${
          nearestDeadline && getDaysUntil(nearestDeadline.deadlines!.paper!) <= 14
            ? 'bg-gradient-to-br from-[var(--toss-red)] to-[#ff6b6b]'
            : 'bg-gradient-to-br from-[var(--toss-gray-700)] to-[var(--toss-gray-800)]'
        }`}
        style={{ 
          boxShadow: nearestDeadline && getDaysUntil(nearestDeadline.deadlines!.paper!) <= 14
            ? '0 8px 32px -8px rgba(240, 68, 82, 0.4)'
            : '0 8px 32px -8px rgba(78, 89, 104, 0.4)'
        }}
      >
        <p className="text-sm opacity-80 mb-1">논문 마감까지</p>
        {nearestDeadline ? (
          <>
            <p className="text-3xl font-bold mb-2">
              {getDaysUntil(nearestDeadline.deadlines!.paper!)}
              <span className="text-lg font-medium opacity-80">일</span>
            </p>
            <p className="text-sm font-medium truncate">
              {nearestDeadline.shortName}
            </p>
          </>
        ) : (
          <p className="text-lg font-medium">마감 없음</p>
        )}
      </div>
    </div>
  );
}
