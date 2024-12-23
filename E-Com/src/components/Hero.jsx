import React from 'react';

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
    <div className="container mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Introducing Our Latest Product
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6">
        Revolutionize your experience with our cutting-edge technology.
      </p>
      <img 
        src="/Hero.webp" 
        alt="Product" 
        className="w-full max-w-xs sm:max-w-sm md:max-w-lg rounded-lg shadow-lg"
      />
    </div>
  </section>
);

export default Hero;
