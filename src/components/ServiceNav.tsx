'use client';

import { FaBullhorn, FaChartLine } from 'react-icons/fa';
import { MdOutlineSocialDistance, MdOutlineInsertEmoticon } from 'react-icons/md';

export default function ServiceNav() {
  const services = [
    {
      title: 'Personalized Campaign',
      icon: <FaBullhorn size={40} />,
      text: 'Create unique and engaging campaigns tailored to your brand and audience.',
      dark: true,
    },
    {
      title: 'Social Media Visibility',
      icon: <MdOutlineSocialDistance size={40} />,
      text: 'Boost your social media presence with strategic content and engagement.',
      dark: false,
    },
    {
      title: 'Meme Marketing',
      icon: <MdOutlineInsertEmoticon size={40} />,
      text: 'Leverage the power of memes to create viral content and brand awareness.',
      dark: true,
    },
    {
      title: 'Brand Presence',
      icon: <FaChartLine size={40} />,
      text: 'Establish and maintain a strong brand presence across all platforms.',
      dark: false,
    },
  ];

  return (
    <div className="bg-[#fff7f5] text-center px-4 py-10 font-sans">
      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug mb-12">
        Our Mission is To Make Your{' '} <br />
        <span className="bg-main px-2 py-1 rounded-xl inline-block">Business</span>{' '}
        Better Through <br className="hidden md:block" /> Technology
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-72 p-6 rounded-xl transition-all duration-300 
              ${service.dark ? 'bg-black text-[#f0ff42] shadow-[6px_6px_0px_0px_#f0ff42]' : 'bg-main text-black shadow-[6px_6px_0px_0px_black]'}
            `}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-transparent text-black dark:text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 