import React, { useState, useEffect } from 'react';
import illustration from '../assets/illustration.png';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Lessons are insights from 8 years',
      description: 'Where to grow your business as a photographer: site or social media.',
      image: illustration,
    },
    {
      title: 'Lets learn and earn money',
      description: 'Description for the second slide.',
      image: illustration,
    },
    // {
    //   title: 'Third Slide Title',
    //   description: 'Description for the third slide.',
    //   image: illustration,
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-neutralSliver" id='home'>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <div className="relative w-full h-full overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12 transition-transform duration-1500 ease-in-out ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transition: 'transform 1.5s, opacity 1.5s' }} // 1.5 seconds transition duration
            >
              <div>
                <img src={slide.image} alt="" />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                  {slide.title} <span className="text-brandPrimary leading-snug">from 4 month</span>
                </h1>
                <p className="text-neutralGray text-base mb-8">{slide.description}</p>
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:translate-y-4">
                  Register
                </button>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brandPrimary text-white px-3 py-2 rounded-full"
          >
            &#60;
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brandPrimary text-white px-3 py-2 rounded-full"
          >
            &#62;
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-brandPrimary' : 'bg-gray-400'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
