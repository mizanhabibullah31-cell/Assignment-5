// import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          
          <div className="text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Build Your Ideal{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block mt-1">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed">
              Explore frontend, backend, database, and tooling options,<br />
              compare them side by side, and put together the stack that fits your <br />
              next project.
            </p>

            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="px-6 py-3.5 rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all"
              >
                Explore Technologies
              </a>
              <a
                href="#learn-more"
                className="px-8 py-3.5 rounded-xl border border-gray-200 text-slate-600 hover:text-slate-900 hover:border-gray-300 font-semibold text-sm transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          
          <div className="flex justify-center lg:justify-end">
            <img
              src="/bannerstack.png"
              alt="Development Stack Illustration"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}