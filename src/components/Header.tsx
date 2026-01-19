'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--toss-gray-100)]">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 & 타이틀 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--toss-blue)] to-[var(--toss-blue-light)] flex items-center justify-center shadow-lg shadow-[var(--toss-blue)]/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[var(--toss-gray-900)]">
                Robot Conference
              </h1>
              <p className="text-xs text-[var(--toss-gray-500)]">
                D-Day Tracker
              </p>
            </div>
          </div>

          {/* 현재 시간 */}
          {currentTime && (
            <div className="text-right">
              <p className="text-sm font-semibold text-[var(--toss-gray-800)]">
                {currentTime.toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-xs text-[var(--toss-gray-500)]">
                {currentTime.toLocaleDateString('ko-KR', { weekday: 'long' })}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
