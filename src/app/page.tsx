'use client';

import { useState, useMemo } from 'react';
import { roboticsConferences, getDaysUntil } from '@/data/conferences';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import FilterTabs from '@/components/FilterTabs';
import ConferenceCard from '@/components/ConferenceCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'deadline'>('upcoming');

  const filteredConferences = useMemo(() => {
    let filtered = [...roboticsConferences];

    switch (activeFilter) {
      case 'upcoming':
        filtered = filtered.filter(c => getDaysUntil(c.startDate) >= 0);
        filtered.sort((a, b) => getDaysUntil(a.startDate) - getDaysUntil(b.startDate));
        break;
      case 'deadline':
        filtered = filtered.filter(c => c.deadlines?.paper && getDaysUntil(c.deadlines.paper) >= 0);
        filtered.sort((a, b) => getDaysUntil(a.deadlines!.paper!) - getDaysUntil(b.deadlines!.paper!));
        break;
      case 'all':
      default:
        filtered.sort((a, b) => getDaysUntil(a.startDate) - getDaysUntil(b.startDate));
        break;
    }

    return filtered;
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* 히어로 섹션 */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[var(--toss-gray-900)] mb-2">
            🤖 로봇 학회 일정
          </h2>
          <p className="text-[var(--toss-gray-600)]">
            인공지능학과 인정 로봇공학 학술대회 일정을 확인하세요
          </p>
        </div>

        {/* 통계 카드 */}
        <StatsCard conferences={roboticsConferences} />

        {/* 필터 탭 */}
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* 학회 리스트 */}
        <div className="space-y-4">
          {filteredConferences.length > 0 ? (
            filteredConferences.map((conference, index) => (
              <ConferenceCard 
                key={conference.id} 
                conference={conference}
                index={index}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--toss-gray-100)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--toss-gray-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[var(--toss-gray-500)]">
                표시할 학회가 없습니다
              </p>
            </div>
          )}
        </div>

        {/* 푸터 */}
        <footer className="mt-16 pt-8 border-t border-[var(--toss-gray-200)]">
          <div className="text-center">
            <p className="text-sm text-[var(--toss-gray-500)] mb-2">
              인공지능학과 최우수·인정 국제학술대회 목록 기반
            </p>
            <p className="text-xs text-[var(--toss-gray-400)]">
              ICRA, IROS, RSS 등 로봇공학 관련 학회 정보를 제공합니다
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
