'use client';

import Image from 'next/image';
import React from 'react';
import type { FC } from 'react';

interface Service {
  title: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Digital Marketing',
    image: '/images/services/digital-marketing.jpg',
    description: 'Strategic online marketing solutions'
  },
  // Add more services here
];

const OfferSection: FC = () => {
  return (
    <section className="relative py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-black/50 rounded-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#f0ff60] rounded-xl flex justify-center flex-col shadow min-w-[180px] text-center">
            <p className="text-m font-semibold">Successful Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;