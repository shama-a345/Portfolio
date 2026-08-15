import React from 'react';
// 1. Fixed import path to point to contactData instead of self-importing ./Contact
import { contactDetails, type ContactItem } from './contactpage';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submit logic here
  };

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic ease-out curve
      }}
      className="w-full max-w-6xl mx-auto md:mx-35 px-4 sm:px-6 lg:px-8 py-10"
    >
      
      {/* Main Title */}
      <p className='text-4xl text-center font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent mb-8'>
        Contact
      </p>

      {/* Grid Layout - Stacks on mobile, splits into 2 columns on medium/large screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-items-center md:justify-items-start'>

        {/* Contact Form Container */}
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-md bg-gradient-to-r from-emerald-700 via-green-500 to-green-600 rounded-xl flex flex-col p-6 sm:p-8 shadow-xl text-white'
        >
          <label htmlFor="name" className='text-lg font-bold mb-1'>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder='Enter your name...'
            className='hover:border-white border border-green-800 placeholder:text-gray-200 text-white bg-green-900/30 outline-none focus:ring-2 focus:ring-white p-2 rounded-lg h-10 mb-4 transition-all'
          />

          <label htmlFor="email" className='text-lg font-bold mb-1'>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter your email...'
            className='hover:border-white border border-green-800 placeholder:text-gray-200 text-white bg-green-900/30 outline-none focus:ring-2 focus:ring-white p-2 rounded-lg h-10 mb-4 transition-all'
          />

          <label htmlFor="msg" className='text-lg font-bold mb-1'>Message</label>
          <textarea
            name="msg"
            id="msg"
            placeholder='Enter details here...'
            className='hover:border-white border border-green-800 placeholder:text-gray-200 text-white bg-green-900/30 p-2 outline-none focus:ring-2 focus:ring-white rounded-lg h-40 mb-2 transition-all resize-none'
          ></textarea>

          <button
            type="submit"
            className='bg-black rounded-3xl px-6 py-3 mt-4 hover:bg-gray-800 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 text-white font-semibold text-center'
          >
            Send Message
          </button>
        </form>

        {/* Info Column */}
        <div className='flex flex-col gap-8 w-full max-w-md md:max-w-none pt-2 md:pt-6'>
          <p className='text-3xl text-emerald-400 font-bold'>
            Get in Touch
          </p>

          <div className='flex flex-col gap-6'>
            {contactDetails.map((item: ContactItem) => (
              <div key={item.id} className='flex flex-row gap-4 items-center group'>
                <div className='p-3 bg-emerald-950/60 rounded-lg border border-emerald-500/30 group-hover:border-emerald-400 transition-colors'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={item.viewBox}
                    className='w-5 h-5 shrink-0 fill-white'
                  >
                    <path d={item.svgPath} />
                  </svg>
                </div>

                {item.isLink && item.href ? (
                  <a href={item.href} className='text-lg text-white break-all hover:text-emerald-400 transition-colors'>
                    {item.text}
                  </a>
                ) : (
                  <p className='text-lg text-white'>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;