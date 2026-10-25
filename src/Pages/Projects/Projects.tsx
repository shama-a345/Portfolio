import { projectsData, type ProjectItem } from './Project';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    return (
        <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out curve
            }}
            className='flex flex-col mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-20'>

            {/* Title */}
            <p className='text-4xl sm:text-5xl text-center font-bold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent pb-5'>
                Projects
            </p>

            {/* Responsive Grid Layout (1 col on mobile, 2 cols on md+) */}
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 lg:gap-8 justify-items-center'>
                {projectsData.map((project: ProjectItem) => (
                    <div
                        key={project.id}
                        className='flex flex-col justify-between border border-gray-800 w-full max-w-md h-full rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.8)] ease-in-out duration-700 bg-transparent'
                    >
                        {/* Image Section */}
                        <div className='overflow-hidden h-52 sm:h-56 w-full shrink-0'>
                            {project.link ? (
                                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                    <img
                                        src={project.image}
                                        className='w-full h-full object-cover transition-transform duration-700 hover:scale-110 ease-in-out'
                                        alt='project screenshot'
                                    />
                                </a>
                            ) : (
                                <img
                                    src={project.image}
                                    className='w-full h-full object-cover transition-transform duration-700 hover:scale-110 ease-in-out'
                                    alt='project screenshot'
                                />
                            )}
                        </div>

                        {/* Description Section */}
                        <p className='text-md p-4 text-justify flex-1'>
                            {project.description}
                        </p>

                        {/* Tech Badges List */}
                        <ul className='flex flex-wrap gap-2 justify-start px-4 pb-4 pt-2 text-sm'>
                            {project.technologies.map((tech: string, index: number) => (
                                <li
                                    key={index}
                                    className='border border-gray-800 rounded-3xl px-4 py-1 text-slate-200'
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </motion.div>
    );
};

export default Projects;