export interface ProjectItem {
  id: number | string;
  image: string;
  description: string;
  technologies: string[];
}

import { ekata, prescripto, restro, starter } from '../../assets/images';

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    image: restro,
    description:
      'An platform where waiter, chef and admin can order, manages and access the order items and see total sales of the day. Also get the status of the ordered items by all the three actors. This system help the resturant in faster order management. Also save data in the database (MSQL), can be managed from filament dashboard.',
    technologies: ['React', 'Typescript', 'Laravel', 'Filament', 'MySQL'],
  },
  {
    id: 2,
    image: prescripto,
    description:
      'Website where patient can book an appointment doctors online , can see which doctor are avaliable in related category.This system help customer to easily take appoinments.',
    technologies: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 3,
    image: starter,
    description: 'This is the demo project of starter landing page',
    technologies: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 4,
    image: ekata,
    description:
      'This is consultancy project which was made dynamic using filament and laravel.',
    technologies: ['Filament', 'Laravel'],
  },
];