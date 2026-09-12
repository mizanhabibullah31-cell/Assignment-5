import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#technologies"
              className="brand-gradient text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-95 transition-all text-sm"
            >
              Explore Technologies
            </a>
            <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all text-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src="https://img.freepik.com/free-vector/isometric-devops-illustration_23-2149387472.jpg"
              alt="Development Stack Illustration"
              className="w-full h-auto object-contain rounded-2xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;