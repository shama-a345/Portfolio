import { motion } from 'framer-motion';
import { SKILLS_DATA } from './aboutpage';

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out curve
      }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Header */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-teal-400 bg-clip-text text-transparent">
        About Me
      </h1>

      {/* Intro Description */}
      <div className="flex flex-col items-center max-w-4xl mx-auto  mt-6 text-center space-y-4">
        <p className="text-base sm:text-lg font-medium text-slate-200">
          Adaptable Web Developer specializing in responsive web applications and custom management systems.
        </p>
        <p className="text-base sm:text-lg text-white">
          Transform complex business logic into high-performance, user-friendly digital products.
        </p>
        <p className="text-base sm:text-lg text-white text-left sm:text-justify leading-relaxed">
          I design and build end-to-end web applications that deliver seamless user experiences. From interactive React and TypeScript frontends to secure Laravel backends and Filament CMS administrative tools, my work spans the complete web development lifecycle.
        </p>
        <p className="text-base sm:text-lg text-white text-left sm:text-justify leading-relaxed">
          I write clean, maintainable code with a strong focus on structured database design, RESTful API integration, and modern UI best practices. My goal is to build reliable, future-ready applications that combine smooth user interactions with robust backend performance.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mx-25">
        {SKILLS_DATA.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-start p-6 border border-green-400/60 rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(30,230,21,0.5)]"
          >
            <div className="flex items-center justify-center h-10">{skill.icon}</div>
            <p className="pt-4 text-base sm:text-lg text-slate-300 text-left leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;