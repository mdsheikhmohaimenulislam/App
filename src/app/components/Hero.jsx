"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
  img: "https://i.ibb.co.com/5h4DgmJX/beautiful-plant-illustration-1.jpg",
  title: "Step Into Nature",
  promo: "Discover the beauty of indoor plants and bring a touch of greenery into your home with our curated collection of fresh and vibrant plants.",
},
{
  img: "https://i.ibb.co.com/Z6RHtDHF/beautiful-plant-illustration.jpg",
  title: "Grow With Care",
  promo: "Experience the joy of nurturing your own plants. Our premium selection combines natural beauty with easy care for your everyday lifestyle.",
},
{
  img: "https://i.ibb.co.com/KjMHXJpF/front-view-potted-plant-wooden-surface.jpg",
  title: "Green Vibes",
  promo: "Transform your space with plants that radiate freshness. Shop the latest additions and let nature inspire your style.",
}

  ];

  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay with blur */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 
                              bg-black/40">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base text-white mb-6 max-w-3xl drop-shadow-md">
                  {slide.promo}
                </p>
                <button className="btn btn-outline btn-lg rounded-2xl text-white border-white hover:bg-white hover:text-black transition-all">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}