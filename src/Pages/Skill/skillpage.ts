export type Category = 'All' | 'Frontend' | 'Backend' | 'Java';

export interface SkillItem {
  id: number | string;
  title: string;
  category: Category;
  description: string;
  svgIcon: React.ReactNode;
}

export const categories: Category[] = ['All', 'Frontend', 'Backend', 'Java'];

export const skillsData = [
  {
    id: 1,
    title: 'React & Typescript',
    category: 'Frontend' as Category,
    description:
      'Building modern, interactive single-page web applications using React.js and TypeScript. Focus on modular component architecture, clean code maintenance, seamless API consumption, and delivering responsive, user-friendly UI/UX with Tailwind CSS.',
    iconType: 'react',
  },
  {
    id: 2,
    title: 'Laravel & Filament',
    category: 'Backend' as Category,
    description:
      'Architecting clean and secure server-side solutions using Laravel and PHP. Building custom administrative workflows with Filament CMS, structuring relational databases in MySQL, and creating RESTful APIs that connect robust backend logic to modern frontend interfaces.',
    iconType: 'laravel',
  },
  {
    id: 3,
    title: 'Java',
    category: 'Java' as Category,
    description:
      'OOP, Encapsulation, Polymorphism, Inheritance. Java Collections Framework, Exception Handling, File I/O, Multithreading. Class Architecture, Algorithm Logic.',
    iconType: 'java',
  },
  {
    id: 4,
    title: 'C-Programming',
    category: 'Backend' as Category,
    description:
      'Procedural Syntax, Functions, Control Structures. Basic Pointers, Memory Address Concepts, Arrays & Strings. Data Types, Scoping, Algorithmic Logic.',
    iconType: 'c',
  },
];