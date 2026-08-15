// 1. Export the interface
export interface ExperienceItem {
  id: number | string;
  role: string;
  company: string;
  period: string;
  points: string[];
  technologies: string[];
}

// 2. Export the data array
export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Cloud Nepal Web • On-site',
    period: 'Nov 2025 – August 2026',
    points: [
      'Building demo frontend projects.',
      'Work with TailwindCSS/Typescript',
    ],
    technologies: ['Tailwind CSS', 'React', 'Typescript'],
  },
  {
    id: 2,
    role: 'Web Developer Intern',
    company: 'Professional Website Nepal • On-site',
    period: 'Nov 2025 – April 2026',
    points: [
      'Developing dynamic web applications and interactive CMS dashboard modules.',
      'Building dynamic frontend components with filament/laravel and managing state workflows.',
      'Designing database schemas and constructing RESTful API endpoints in Laravel.',
      'Managing client queries in the code in frontend',
    ],
    technologies: ['Laravel', 'Filament', 'GitHub'],
  },
];