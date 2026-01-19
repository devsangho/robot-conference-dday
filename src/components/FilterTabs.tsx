'use client';

interface FilterTabsProps {
  activeFilter: 'all' | 'upcoming' | 'deadline';
  onFilterChange: (filter: 'all' | 'upcoming' | 'deadline') => void;
}

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  const filters: { key: 'all' | 'upcoming' | 'deadline'; label: string }[] = [
    { key: 'all', label: '전체' },
    { key: 'upcoming', label: '예정' },
    { key: 'deadline', label: '마감임박' },
  ];

  return (
    <div className="flex gap-2 mb-6 p-1 bg-[var(--toss-gray-100)] rounded-2xl">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`
            flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200
            ${activeFilter === filter.key
              ? 'bg-white text-[var(--toss-gray-900)] shadow-sm'
              : 'text-[var(--toss-gray-500)] hover:text-[var(--toss-gray-700)]'
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
