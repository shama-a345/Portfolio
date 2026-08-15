import { useState } from 'react'
import { motion } from 'framer-motion'
import { bgimage,photo } from '../../assets/images'
import { 
  type Category, 
  CATEGORIES, 
  FEATURES_DATA, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  EXPERIENCE_DATA, 
  CONTACT_DATA,
  filterSkillsByCategory 
} from './homepage'

// --- MAIN HOME COMPONENT ---
const Home = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  {/*const filteredSkills = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);*/}
    const filteredSkills = filterSkillsByCategory(SKILLS_DATA, activeCategory);
  return (
     <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out curve
      }}
    className="w-full text-slate-100 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <div className="relative max-w-7xl mx-auto md:mx-35 px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="relative rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
          <img className="absolute inset-0 w-full h-full object-cover" src={bgimage} alt="Background" />
          <div className="absolute inset-0" />
          
          <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-10 p-6 sm:p-10 lg:p-16">
            <div className="flex flex-col items-start max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Shama Shrestha</h1>
              <p className="text-green-300 text-lg sm:text-xl font-medium mt-1">Junior Developer</p>
              
              <p className="mt-4 text-slate-200 text-base sm:text-lg text-justify leading-relaxed">
                "Turning complex workflows into simple, elegant digital tools. As a Junior full-stack developer, I combine scalable server-side logic with crisp, interactive frontend components to build apps that are fast, secure, and effortless to navigate. I’m dedicated to writing modular code and building resilient, future-proof applications."
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/cv.pdf" download="SHAMA SHRESTHA (1).pdf">
                  <button className="px-5 py-3 inline-flex items-center gap-2 transition-all duration-500 hover:scale-105 transform hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] bg-green-400 font-medium text-slate-900 rounded-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-slate-900">
                      <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                    <span>Download CV</span>
                  </button>
                </a>
                <button className="rounded-lg bg-white px-5 py-3 text-black font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="shrink-0">
              <img src={photo} alt="Shama Shrestha" className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-green-400/40 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME SECTION */}
      <div className="mt-10 flex flex-col justify-center items-center px-4 max-w-4xl mx-auto md:mx-50 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-400">About Me</h2>
        <p className="pt-4 text-base sm:text-lg">Adaptable Full Stack Developer specializing in responsive web applications and custom management systems.</p>
        <p className="text-base sm:text-lg">Transform complex business logic into high-performance, user-friendly digital products.</p>
        <p className="pt-4 text-base sm:text-lg text-justify leading-relaxed">
          I design and build end-to-end web applications that deliver seamless user experiences. From interactive React and TypeScript frontends to secure Laravel backends and Filament CMS administrative tools, my work spans the complete web development lifecycle.
        </p>
        <p className="pt-4 text-base sm:text-lg text-justify leading-relaxed">
          I write clean, maintainable code with a strong focus on structured database design, RESTful API integration, and modern UI best practices. My goal is to build reliable, future-ready applications that combine smooth user interactions with robust backend performance.
        </p>
      </div>

      {/* ABOUT FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto md:mx-35 px-4 sm:px-6 pb-4">
        {FEATURES_DATA.map((item) => (
          <div key={item.id} className="flex flex-col border border-green-400 rounded-lg transition-all duration-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(30,230,21,0.8)] ease-in-out p-5 sm:p-6 bg-slate-900/40">
            {item.icon}
            <p className="pt-4 text-base sm:text-lg text-left leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-24 sm:mt-30 flex flex-col justify-center items-center px-4 max-w-6xl mx-auto md:mx-35 pb-2">
        <h2 className="text-4xl sm:text-5xl pb-4 font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent">My Skills</h2>
        <p className="text-base sm:text-lg pb-4 text-center">Technologies and tools I work with</p>
        
        {/* Category Tabs */}
        <div className="pt-2">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer rounded-3xl px-6 py-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(30,230,21,0.8)] ease-in-out hover:border-green-600 hover:bg-green-600 text-sm sm:text-base ${
                    isActive ? 'bg-green-600 border border-green-600 shadow-[0_0_25px_rgba(30,230,21,0.8)]' : 'border border-gray-900 bg-slate-900/50'
                  }`}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 sm:pt-16 w-full">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="flex flex-col p-6 sm:p-8 justify-start border border-gray-800 hover:shadow-[0_0_25px_rgba(30,230,21,0.8)] hover:border-green-600 transition-all hover:scale-105 duration-700 ease-in-out rounded-lg w-full min-h-[220px] bg-slate-900/40">
              <div className="flex flex-row items-center gap-4">
                {skill.icon}
                <p className="text-lg font-semibold">{skill.title}</p>
              </div>
              <p className="text-base pt-3 leading-relaxed text-slate-300">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* PROJECTS SECTION */}
        <div className="flex flex-col mt-28 sm:mt-40 w-full">
          <h2 className="text-4xl sm:text-5xl text-center font-bold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent pb-5">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6 sm:gap-8">
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="flex flex-col justify-between border border-gray-800 w-full rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.8)] ease-in-out duration-700 bg-slate-900/40">
                <div className="overflow-hidden h-52 sm:h-56">
                  <img src={project.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 ease-in-out" alt="Project Thumbnail" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <p className="text-sm sm:text-base text-justify text-slate-300 leading-relaxed">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 justify-start pt-6 text-xs sm:text-sm">
                    {project.tags.map((tag, idx) => (
                      <li key={idx} className="border border-gray-800 rounded-3xl px-3.5 py-1 bg-slate-800/60 text-slate-300">{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="justify-center mt-12">
          <a href="/Projects">
            <button className="text-center hover:scale-110 cursor-pointer transition-all duration-700 ease-in-out bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 rounded-3xl px-6 py-2 text-lg font-semibold text-slate-950">
              View More
            </button>
          </a>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-center mt-20 font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent">Experience</h2>
        <div className="relative border-l-2 border-emerald-500/30 pl-6 sm:pl-8 space-y-12 ml-2 sm:ml-8">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] ring-4 ring-slate-950 group-hover:scale-125 transition-transform duration-300" />
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                    <p className="text-emerald-400 font-medium text-sm">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 mb-4 marker:text-emerald-400">
                  {exp.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="mt-10 max-w-6xl mx-auto md:mx-35 px-4 pb-20">
        <h2 className="text-4xl text-center font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-start">
          
          <form action="" className="bg-gradient-to-r from-emerald-700 via-green-400 to-green-600 rounded-lg w-full flex flex-col p-6 sm:p-10 gap-2">
            <label htmlFor="name" className="text-lg font-bold">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name..." className="hover:border-white border border-green-800 placeholder:text-white outline-none focus:ring-0 p-2 rounded-lg h-10 bg-transparent text-white" />
            
            <label htmlFor="email" className="pt-2 font-semibold">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email..." className="hover:border-white border border-green-800 placeholder:text-white p-2 outline-none rounded-lg h-10 bg-transparent text-white" />
            
            <label htmlFor="msg" className="pt-2 font-semibold">Message</label>
            <textarea name="msg" id="msg" placeholder="Enter details here..." className="hover:border-white border border-green-800 placeholder:text-white p-2 outline-none rounded-lg h-40 bg-transparent text-white resize-none" />
            
            <button className="bg-black text-white rounded-3xl px-8 py-3 mt-5 hover:bg-gray-800 cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 font-medium self-center sm:self-start">Send Message</button>
          </form>

          <div className="flex flex-col gap-6 lg:pl-10">
            <p className="text-2xl font-semibold text-green-500">Get in Touch</p>
            {CONTACT_DATA.map((contact) => (
              <div key={contact.id} className="flex flex-row items-center gap-4">
                {contact.icon}
                <p className="text-base sm:text-lg">{contact.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </motion.div>
  )
}

export default Home