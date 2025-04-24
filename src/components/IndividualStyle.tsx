import React from 'react';
import Image from 'next/image';

const IndividualStyle = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="h-64 relative overflow-hidden rounded-lg">
              <Image
                src="/images/style-1.jpg"
                alt="Person wearing glasses"
                fill
                className="object-cover"
              />
            </div>
            <div className="h-64 relative overflow-hidden rounded-lg mt-8">
              <Image
                src="/images/style-2.jpg"
                alt="Person wearing glasses"
                fill
                className="object-cover"
              />
            </div>
            <div className="h-64 relative overflow-hidden rounded-lg">
              <Image
                src="/images/style-3.jpg"
                alt="Person wearing glasses"
                fill
                className="object-cover"
              />
            </div>
            <div className="h-64 relative overflow-hidden rounded-lg mt-8">
              <Image
                src="/images/style-4.jpg"
                alt="Person wearing glasses"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Individual style</h2>
            <p className="text-gray-600 mb-6">
              Like a lifestyle suit or tailored dress, exceptional eyewear starts with your unique style and preferences. 
              Our expert stylists work with you to design glasses that fit your face shape and personal style perfectly, 
              giving you the confidence to express yourself.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-md hover:bg-yellow-500">
              Design Your Glasses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualStyle; 