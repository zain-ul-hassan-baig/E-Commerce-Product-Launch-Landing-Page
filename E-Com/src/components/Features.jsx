import React from 'react';

const features = [
  { icon: '💡', title: 'Innovative Design', description: 'Experience groundbreaking innovation.' },
  { icon: '⚡', title: 'Fast Performance', description: 'Optimized for speed and efficiency.' },
  { icon: '🔒', title: 'Secure', description: 'Top-notch security features to protect you.' },
];

const Features = () => (
  <section className="py-16 bg-gray-50 px-4 sm:px-6 md:px-8">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Product Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
