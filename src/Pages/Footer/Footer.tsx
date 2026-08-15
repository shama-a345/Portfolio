import React from 'react';
import { logonew } from '../../assets/images';
import { navLinks, socialLinks, type NavLink, type SocialLink } from './footerpage';

const Footer: React.FC = () => {
    return (
        /* Full-width background container */
        <div className='mt-10 w-full bg-gradient-to-r from-[#0b0f17] via-gray-600 to-[#0b0f17] text-white'>

            {/* Centered container with max-width to bring everything closer on wide screens */}
            <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 min-h-48 p-6 md:px-6 items-center justify-items-center'>

                {/* Left: Logo & Copyright */}
                <div className='flex flex-col items-center md:items-start text-center md:text-left justify-self-center md:justify-self-start'>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={logonew} className='w-24 sm:w-28' alt="logo" />
                        <span className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 bg-clip-text text-transparent'>
                            Shama Shrestha
                        </span>
                    </div>
                    <p className='mt-2 md:pl-8 text-sm opacity-80'>© 2026 All rights reserved.</p>
                </div>

                {/* Middle: Navigation Links */}
                <div className='flex justify-center items-center w-full px-4'>
                    <ul className='flex flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 text-base sm:text-lg whitespace-nowrap'>
                        {navLinks.map((link: NavLink) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className='hover:text-green-400 cursor-pointer transition-colors py-1 px-1'
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Social Icons */}
                <div className='flex justify-center md:justify-end items-center justify-self-center md:justify-self-end'>
                    <ul className='flex flex-row gap-4'>
                        {socialLinks.map((social: SocialLink) => (
                            <li key={social.id} className={`transition-all duration-700 ease-in-out ${social.hoverClass}`}>
                                <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={social.viewBox} className='w-7 sm:w-8'>
                                        <path fill={social.svgFill} d={social.svgPath} />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;