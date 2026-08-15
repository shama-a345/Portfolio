// Import both the data and the type from the same file
import { experienceData, type ExperienceItem } from './experiencespage';
import { motion } from 'framer-motion';

const Experiences: React.FC = () => {
    return (
         <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out curve
      }}
       className='flex flex-col gap-10 max-w-4xl mx-auto px-4 pb-20'
       >

            {/* Header Title */}
            <p className='text-center mt-20 font-extrabold text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent'>
                Experience
            </p>

            {/* Timeline Container */}
            <div className='relative border-l-2 border-emerald-500/30 pl-6 sm:pl-8 space-y-12 ml-4 sm:ml-8'>
                {experienceData.map((exp: ExperienceItem) => (
                    <div key={exp.id} className='relative group'>

                        {/* Timeline Dot Indicator */}
                        <div className='absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] ring-4 ring-slate-950 group-hover:scale-125 transition-transform duration-300' />

                        {/* Experience Card */}
                        <div className='bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm'>

                            {/* Role & Date Badge */}
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3'>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-100'>{exp.role}</h3>
                                    <p className='text-emerald-400 font-medium text-sm'>{exp.company}</p>
                                </div>
                                <span className='px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit'>
                                    {exp.period}
                                </span>
                            </div>

                            {/* Bullets List */}
                            <ul className='list-disc list-inside text-slate-300 text-sm space-y-2 mb-4 marker:text-emerald-400'>
                                {exp.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            {/* Tech Tags */}
                            <div className='flex flex-wrap gap-2 pt-3 border-t border-slate-800/80'>
                                {exp.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    );
};

export default Experiences;