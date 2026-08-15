import React from 'react'
import {ekata,prescripto, restro, starter } from '../../assets/images'

// --- TYPES & INTERFACES ---
export type Category = 'All' | 'Frontend' | 'Backend' | 'Java';

export interface Feature {
  id: number;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  id: number;
  category: Category;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  description: string;
  image: string;
  tags: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ContactDetail {
  id: number;
  text: string;
  icon: React.ReactNode;
}

// --- CONSTANTS ---
export const CATEGORIES: Category[] = ['All', 'Frontend', 'Backend', 'Java'];

// --- HELPER FUNCTIONS ---
export const filterSkillsByCategory = (skills: Skill[], category: Category): Skill[] => {
  if (category === 'All') return skills;
  return skills.filter((skill) => skill.category === category);
};

// --- DATA ARRAYS ---
export const FEATURES_DATA: Feature[] = [
  {
    id: 1,
    description: "Modern, responsive user interfaces built using React.js, TypeScript, and Tailwind CSS. Focused on modular component architecture, clean styling, and smooth user experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-10" viewBox="0 0 640 512">
        <path fill="rgb(30, 230, 21)" d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    description: "Secure and structured server-side systems developed with PHP and Laravel. Focused on building RESTful API endpoints, application logic, and secure authentication workflows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-7" viewBox="0 0 448 512">
        <path fill="rgb(30, 230, 21)" d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    description: "Tailored administrative dashboards and content management solutions built with Filament CMS. Streamlining data management, custom resources, and client workflows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 text-green-500">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 4,
    description: "Relational database design and optimization using MySQL and phpMyAdmin. Focused on clean schema design, secure CRUD operations, and efficient data relations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 448 512">
        <path fill="rgb(30, 230, 21)" d="M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z" />
      </svg>
    ),
  },
  {
    id: 5,
    description: "Seamlessly bridging React frontend components with Laravel backends. Building dynamic web modules like image galleries, content sliders, and data-driven client portals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 576 512">
        <path fill="rgb(30, 230, 21)" d="M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    description: "Version control and environment setup using Git, GitHub, and XAMPP. Deploying responsive frontend applications using modern hosting platforms like Vercel and Render.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 512 512">
        <path fill="rgb(30, 230, 21)" d="M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z" />
      </svg>
    ),
  },
];

export const SKILLS_DATA: Skill[] = [
  {
    id: 1,
    category: 'Frontend',
    title: 'React & Typescript',
    description: 'Building modern, interactive single-page web applications using React.js and TypeScript. Focus on modular component architecture, clean code maintenance, seamless API consumption, and delivering responsive, user-friendly UI/UX with Tailwind CSS.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10">
        <path fill="rgb(30, 230, 21)" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z" />
      </svg>
    ),
  },
  {
    id: 2,
    category: 'Backend',
    title: 'Laravel & Filament',
    description: 'Architecting clean and secure server-side solutions using Laravel and PHP. Building custom administrative workflows with Filament CMS, structuring relational databases in MySQL, and creating RESTful APIs that connect robust backend logic to modern frontend interfaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8">
        <path fill="rgb(30, 230, 21)" d="M504.6 115.8c-.1-.2-.2-.5-.3-.7-.1-.4-.3-.8-.5-1.2-.2-.2-.3-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L404.6 55.5c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L300.3 111c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .2-.4 .4-.5 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 105.2-80.2 46.2 0-205.9c0-.7-.1-1.4-.3-2.1-.1-.2-.2-.4-.3-.7-.1-.4-.3-.8-.5-1.2-.1-.3-.4-.5-.5-.7-.2-.3-.5-.6-.7-.9-.2-.2-.5-.4-.8-.6-.3-.2-.6-.5-.9-.7L115.8 1.1c-1.2-.7-2.6-1.1-4-1.1s-2.8 .4-4 1.1L11.5 56.5c-.3 .2-.6 .4-.9 .7-.3 .2-.5 .4-.8 .6-.3 .3-.5 .6-.7 .9-.2 .3-.4 .5-.6 .7-.2 .4-.4 .8-.5 1.2-.1 .2-.2 .4-.3 .7-.2 .7-.3 1.4-.3 2.1l0 329.7c0 1.4 .4 2.8 1.1 4s1.7 2.2 2.9 2.9L204 510.9c.4 .2 .9 .4 1.3 .5 .2 .1 .4 .2 .6 .3 1.3 .4 2.8 .4 4.1 0 .2-.1 .4-.2 .6-.2 .5-.2 1-.3 1.4-.6L404.6 400.1c1.2-.7 2.2-1.7 2.9-2.9s1.1-2.6 1.1-4l0-105.3 92.2-53.1c1.2-.7 2.2-1.7 2.9-3s1.1-2.6 1.1-4l0-109.8c0-.7-.1-1.4-.2-2.1zM111.8 17.3l80.2 46.1-80.2 46.2-80.2-46.2 80.2-46.2zm88.2 60l0 201.3c-33.2 19.1-59.9 34.5-80.2 46.2l0-201.3C153 104.4 179.7 89 200 77.3zm0 412.8L23.5 388.5 23.5 77.3c20.3 11.7 47.1 27.1 80.2 46.2l0 215.2c0 .3 .1 .6 .1 .9 0 .4 .1 .8 .2 1.2 .1 .3 .2 .6 .4 .9 .1 .3 .3 .7 .4 1 .2 .3 .4 .5 .6 .8 .2 .3 .4 .6 .7 .8 .2 .2 .5 .4 .8 .6 .3 .2 .6 .5 .9 .7l92.2 52.2 .1 92.4zm8-106.2L128 338.6c54.7-31.5 113.5-65.3 176.3-101.5l80.1 46.1C355 300 296.2 333.5 208 383.9zm184.5 4.6l-176.5 101.6 0-92.3C317.4 340 376.2 306.4 392.5 297l0 91.4zm0-119.1c-20.3-11.6-47.1-27-80.2-46.1l0-91.4c20.3 11.7 47.1 27.1 80.2 46.2l0 91.3zm8-105.3l-80.2-46.2 80.2-46.2 80.2 46.1-80.2 46.2zm8 105.3l0-91.3c33.2-19.1 60-34.5 80.3-46.2l0 91.4-80.3 46.2z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: 'Java',
    title: 'Java',
    description: 'OOP, Encapsulation, Polymorphism, Inheritance. Java Collections Framework, Exception Handling, File I/O, Multithreading. Class Architecture, Algorithm Logic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-10">
        <path fill="rgb(30, 230, 21)" d="M277.8 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8 103.7-81.8 50.5-135 50.5-135 21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zM307 104.6c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9C216 188.1 195.4 169.3 307 104.6zm-6.1 270.5c-.5 1-1.2 1.8-2 2.6 128.3-33.7 81.1-118.9 19.8-97.3-3.3 1.2-6.2 3.4-8.2 6.3 3.6-1.3 7.3-2.3 11-3 31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2 204.2 33.2 372.4-14.9 319.4-38.8zM124.5 396c-78.7 22 47.9 67.4 148.1 24.5-9.8-3.8-19.2-8.4-28.2-13.8-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.7 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9-7.8-2.8-15-7.1-21.1-12.8z" />
      </svg>
    ),
  },
  {
    id: 4,
    category: 'Backend',
    title: 'C-Programming',
    description: 'Procedural Syntax, Functions, Control Structures. Basic Pointers, Memory Address Concepts, Arrays & Strings. Data Types, Scoping, Algorithmic Logic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8">
        <path fill="rgb(30, 230, 21)" d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3 155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8 221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
      </svg>
    ),
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    description: "An platform where waiter, chef and admin can order, manages and access the order items and see total sales of the day. Also get the status of the ordered items by all the three actors. This system help the resturant in faster order management. Also save data in the database (MSQL), can be managed from filament dashboard.",
    image: restro,
    tags: ['React', 'Typescript', 'Laravel', 'Filament', 'MySQL'],
  },
  {
    id: 2,
    description: "Website where patient can book an appointment doctors online , can see which doctor are avaliable in related category.This system help customer to easily take appoinments.",
    image: prescripto,
    tags: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 3,
    description: "This is the demo project of starter landing page",
    image: starter,
    tags: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 4,
    description: "This is consultancy project which was made dynamic using filament and laravel.",
    image: ekata,
    tags: ['Filament', 'Laravel'],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "Cloud Nepal Web",
    location: "On-site",
    period: "Nov 2026 – August 2026",
    responsibilities: [
      "Building demo frontend projects.",
      "Work with TailwindCSS/Typescript"
    ],
    techStack: ["Tailwind CSS", "React", "Typescript"]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Professional Website Nepal",
    location: "On-site",
    period: "Nov 2025 – April 2026",
    responsibilities: [
      "Developing dynamic web applications and interactive CMS dashboard modules.",
      "Building dynamic frontend components with filament/laravel and managing state workflows.",
      "Designing database schemas and constructing RESTful API endpoints in Laravel.",
      "Managing client queries in the code in frontend"
    ],
    techStack: ["Laravel", "Filament", "GitHub"]
  }
];

export const CONTACT_DATA: ContactDetail[] = [
  {
    id: 1,
    text: "shreya.stha098@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5">
        <path fill="rgb(255, 255, 255)" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/>
      </svg>
    )
  },
  {
    id: 2,
    text: "9848688464",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5">
        <path fill="rgb(255, 255, 255)" d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
      </svg>
    )
  },
  {
    id: 3,
    text: "Taukhel, Godawari",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5">
        <path fill="rgb(255, 255, 255)" d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
      </svg>
    )
  }
];