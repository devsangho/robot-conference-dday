export interface Conference {
  id: string;
  shortName: string;
  fullName: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  category: '최우수' | '인정';
  url: string;
  deadlines?: {
    paper?: string;
    workshop?: string;
    registration?: string;
  };
  description: string;
}

export const roboticsConferences: Conference[] = [
  {
    id: 'icra-2026',
    shortName: 'ICRA 2026',
    fullName: 'IEEE International Conference on Robotics and Automation',
    startDate: '2026-06-01',
    endDate: '2026-06-05',
    location: '비엔나',
    country: '오스트리아',
    category: '인정',
    url: 'https://2026.ieee-icra.org/',
    deadlines: {
      paper: '2026-01-31',
      workshop: '2025-12-15',
    },
    description: '세계 최대 규모의 로봇공학 및 자동화 학회. 로봇 설계, 제어, 인지, 조작 등 다양한 분야를 다룹니다.',
  },
  {
    id: 'iros-2026',
    shortName: 'IROS 2026',
    fullName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems',
    startDate: '2026-09-27',
    endDate: '2026-10-01',
    location: '피츠버그',
    country: '미국',
    category: '인정',
    url: 'https://iros2026.org/',
    deadlines: {
      paper: '2026-03-01',
    },
    description: '지능형 로봇 시스템 분야의 최고 권위 학회. 로봇 지능, 센싱, 학습 등을 다룹니다.',
  },
  {
    id: 'rss-2026',
    shortName: 'RSS 2026',
    fullName: 'Robotics: Science and Systems Conference',
    startDate: '2026-07-13',
    endDate: '2026-07-17',
    location: 'TBD',
    country: 'TBD',
    category: '인정',
    url: 'https://roboticsconference.org/',
    deadlines: {
      paper: '2026-02-01',
    },
    description: '로봇공학 과학 및 시스템 분야의 프리미엄 학회. 이론과 실제 응용 모두를 다룹니다.',
  },
  {
    id: 'icra-2025',
    shortName: 'ICRA 2025',
    fullName: 'IEEE International Conference on Robotics and Automation',
    startDate: '2025-05-19',
    endDate: '2025-05-23',
    location: '애틀랜타',
    country: '미국',
    category: '인정',
    url: 'https://2025.ieee-icra.org/',
    description: '로봇공학 및 자동화 분야 최대 학회. 2025년 애틀랜타에서 개최됩니다.',
  },
  {
    id: 'iros-2025',
    shortName: 'IROS 2025',
    fullName: 'IEEE/RSJ International Conference on Intelligent Robots and Systems',
    startDate: '2025-10-19',
    endDate: '2025-10-23',
    location: '항저우',
    country: '중국',
    category: '인정',
    url: 'https://iros2025.org/',
    description: '지능형 로봇 시스템 분야 학회. 2025년 중국 항저우에서 개최됩니다.',
  },
  {
    id: 'humanoids-2026',
    shortName: 'Humanoids 2026',
    fullName: 'IEEE-RAS International Conference on Humanoid Robots',
    startDate: '2026-11-15',
    endDate: '2026-11-18',
    location: 'TBD',
    country: 'TBD',
    category: '인정',
    url: 'https://humanoids2026.org/',
    description: '휴머노이드 로봇 분야의 세계 최고 권위 학회입니다.',
  },
  {
    id: 'corl-2026',
    shortName: 'CoRL 2026',
    fullName: 'Conference on Robot Learning',
    startDate: '2026-11-04',
    endDate: '2026-11-07',
    location: 'TBD',
    country: 'TBD',
    category: '인정',
    url: 'https://corl2026.org/',
    description: '로봇 학습 분야의 새로운 최고 권위 학회. 딥러닝과 로봇의 결합을 다룹니다.',
  },
];

export function getDaysUntil(dateString: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateString);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const startStr = start.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
  
  const endStr = end.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
  
  const year = start.getFullYear();
  
  return `${year}년 ${startStr} - ${endStr}`;
}
