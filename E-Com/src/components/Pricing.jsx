import React from 'react';

const Pricing = () => (
  <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Pricing</h2>
      <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
        <p className="text-xl sm:text-2xl font-semibold mb-2">$99.99</p>
        <p className="text-gray-600 text-sm sm:text-base mb-4">Limited-time offer available now!</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Buy Now
        </button>
      </div>
    </div>
  </section>
);

export default Pricing;
