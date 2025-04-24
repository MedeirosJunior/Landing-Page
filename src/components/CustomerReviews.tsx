"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: "Mia C.",
    image: "/images/review-1.jpg",
    rating: 4,
    text: "It's such a game changer, and if you wear prescription glasses, I'd say life-changing."
  },
  {
    name: "James R.",
    image: "/images/review-2.jpg",
    rating: 5,
    text: "The quality and attention to detail is outstanding. Best glasses I've ever owned."
  },
  {
    name: "Sarah L.",
    image: "/images/review-3.jpg",
    rating: 5,
    text: "Perfect fit from day one. The virtual try-on feature made selection so easy."
  }
];

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12">VERIFIED CUSTOMER REVIEWS</h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="flex items-center">
            <button 
              onClick={prevReview}
              className="absolute left-0 z-10 text-4xl text-yellow-400 hover:text-yellow-500"
            >
              ←
            </button>
            <div className="flex items-center bg-gray-900 p-8 rounded-lg">
              <div className="w-24 h-24 relative rounded-full overflow-hidden mr-8">
                <Image
                  src={reviews[currentReview].image}
                  alt={reviews[currentReview].name}
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < reviews[currentReview].rating ? "text-yellow-400" : "text-gray-600"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{reviews[currentReview].text}"</p>
                <p className="font-medium">{reviews[currentReview].name}</p>
              </div>
            </div>
            <button 
              onClick={nextReview}
              className="absolute right-0 z-10 text-4xl text-yellow-400 hover:text-yellow-500"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 