import React from 'react';

const features = [
  {
    icon: "👤",
    title: "Measured for you",
    description: "Use our VR app to take your face and specs measurements"
  },
  {
    icon: "✏️",
    title: "Designed by you",
    description: "Select your style, choose your shape and customize your glasses"
  },
  {
    icon: "👓",
    title: "Made from scratch",
    description: "Each pair is crafted for one person at a time from the highest quality materials"
  },
  {
    icon: "⭐",
    title: "Perfect, guaranteed",
    description: "We guarantee your Sunny Lenses glasses will fit perfectly"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          This is the future of premium eyewear
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 