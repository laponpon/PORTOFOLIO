export type ProjectId = 'personal-web' | 'game-dev' | 'informatics-lab';

export interface ProjectItem {
  id: ProjectId;
  index: string;
  title: string;
  category: string;
  status: string;
  statusTone: 'crimson' | 'emerald' | 'neutral';
  description: string;
  highlights: string[];
  architectureNote: string;
  previewHeaderLeft: string;
  previewHeaderRight: string;
  previewFooterLeft: string;
  previewFooterRight?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
  targetId: string;
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCKnRjDYx1EpjQMCWdFZ5aRHCwfCXjuOc-L8GEpd8M8RtZ1ea7PXnA8elZf9JW2JtksCxrie7-RPOatL16IjUkVJrr6awmGGJUexbUmYQntgMNHDVKKnMjhxpn_LmKbx_ujEMs80PMcVt3e_Zc6VC1iMm-NxBM3rOWbYf8v5fqSoxvBDK_8V5PLDfqmGjuLz3rybuDIgpR_SP0Gt5KTkM1HUVNL3sBsNioZM2MaJ_GT';

export const HERO_STATS: HeroStat[] = [
  {
    value: 'ITPLN',
    label: 'INFORMATICS ENGINEERING',
    targetId: 'education-skills',
  },
  {
    value: '3+',
    label: 'CORE TECH TRACKS',
    targetId: 'projects',
  },
  {
    value: 'EX PMR',
    label: 'LEADERSHIP & TEAMWORK',
    targetId: 'experience',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'personal-web',
    index: '01',
    title: 'PERSONAL WEB PORTFOLIO',
    category: 'WEBSITE CREATION · HTML / CSS / JS',
    status: 'ACTIVE BUILD',
    statusTone: 'crimson',
    description:
      'A bespoke, dark-mode obsidian and crimson portfolio website engineered with semantic markup, utility-first CSS styling, and responsive modular components. Built to showcase technical pursuits and informatics background.',
    highlights: [
      'HTML5 Semantic',
      'Tailwind CSS',
      'Responsive Grid',
      'Typography Pairing',
    ],
    architectureNote:
      'Structured around a 12-column editorial bento grid with Anton display typography, Plus Jakarta Sans body copy, and interactive modal inspection.',
    previewHeaderLeft: '',
    previewHeaderRight: 'portfolio.html',
    previewFooterLeft: 'CSS GRID & TAILWIND',
    previewFooterRight: 'READY',
  },
  {
    id: 'game-dev',
    index: '02',
    title: 'GAME DEV EXPLORATION',
    category: 'GAME DEVELOPMENT · LOGIC & MECHANICS',
    status: 'LEARNING TRACK',
    statusTone: 'emerald',
    description:
      'Hands-on exploration into fundamental 2D/3D gameplay mechanics, game loop lifecycles, player input handling, and collision detection systems. Focuses on transforming mathematical algorithms into engaging real-time experiences.',
    highlights: [
      'Logic Programming',
      'Game Loop Architecture',
      'Mechanics Prototyping',
      'Physics Basics',
    ],
    architectureNote:
      'Built around deterministic 60 FPS update-render cycles, AABB collision matrices, and state-driven entity behaviors.',
    previewHeaderLeft: 'GAME_LOOP_MAIN.CPP',
    previewHeaderRight: '60 FPS',
    previewFooterLeft: 'COLLISION MATRIX & MECHANICS',
  },
  {
    id: 'informatics-lab',
    index: '03',
    title: 'INFORMATICS CODE LAB',
    category: 'BASIC PROGRAMMING · ALGORITHMS',
    status: 'IN PROGRESS',
    statusTone: 'neutral',
    description:
      'Academic and independent programming laboratory addressing foundational algorithms, data structure implementations, sorting efficiency, recursion, and object-oriented paradigms taught at Institut Teknologi PLN.',
    highlights: [
      'C / C++',
      'Data Structures',
      'Algorithmic Thinking',
      'Problem Solving',
    ],
    architectureNote:
      'Covers binary trees, divide-and-conquer sorting benchmarks, and memory-aware iterative implementations.',
    previewHeaderLeft: 'DATA_STRUCTURES.ALG',
    previewHeaderRight: 'O(n log n)',
    previewFooterLeft: 'ITPLN CURRICULUM FOUNDATIONS',
  },
];

export const SKILLS: string[] = [
  'PUBLIC SPEAKING',
  'TEAMWORK',
  'LEADERSHIP',
  'BASIC PROGRAMMING',
  'CREATIVE THINKING',
  'WEBSITE CREATION',
  'GAME DEVELOPMENT',
  'HTML & CSS',
  'ORGANIZATIONAL MANAGEMENT',
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER & LEARN',
    description:
      'Explore problem statements, understand user needs, and absorb core technical concepts.',
  },
  {
    number: '02',
    title: 'PLAN & ARCHITECT',
    description:
      'Structure logical flows, game rules, wireframes, and project milestones.',
  },
  {
    number: '03',
    title: 'DESIGN INTERFACES',
    description:
      'Shape bold visual hierarchies, high-contrast typography, and intuitive user experiences.',
  },
  {
    number: '04',
    title: 'DEVELOP & CODE',
    description:
      'Translate structures into clean semantic HTML/CSS, robust scripts, and game prototypes.',
  },
  {
    number: '05',
    title: 'ITERATE & REFINE',
    description:
      'Gather feedback, optimize performance, and continuously elevate quality.',
  },
];

export const CONTACT_INFO = {
  email: 'naufalnadhifarkaan1@gmail.com',
  instagramHandle: '@nnarkaan',
  instagramUrl: 'https://instagram.com/nnarkaan',
  campus: 'Institut Teknologi PLN',
  location: 'Jakarta, Indonesia',
};
