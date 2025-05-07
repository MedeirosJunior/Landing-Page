'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    src: 'https://raw.githubusercontent.com/MedeirosJunior/Landing-Page/main/public/images/slide1.jpg',
    alt: 'Consultoria Técnica',
    title: 'Consultoria Técnica',
    description: 'Soluções especializadas para obras de vidros e esquadrias'
  },
  {
    src: 'https://raw.githubusercontent.com/MedeirosJunior/Landing-Page/main/public/images/slide2.jpg',
    alt: 'Treinamento de Equipes',
    title: 'Treinamento de Equipes',
    description: 'Capacitação profissional para instalação de vidros e esquadrias'
  },
  {
    src: 'https://raw.githubusercontent.com/MedeirosJunior/Landing-Page/main/public/images/slide3.jpg',
    alt: 'Gestão de Projetos',
    title: 'Gestão de Projetos',
    description: 'Planejamento e execução com foco em eficiência e qualidade'
  },
];

export default function ImageCarousel() {
  return (
    <div className="w-full relative" style={{ marginTop: '80px' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[400px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute z-20 text-center text-white max-w-2xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-lg md:text-xl">{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}