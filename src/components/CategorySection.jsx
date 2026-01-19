// src/components/CategoriesSection.jsx
import React from 'react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
      title: "LIFESTYLE",
      subtitle: "Comfort & Style"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
      title: "SPORTLIFE",
      subtitle: "Active & Dynamic"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=80",
      title: "SMART CASUAL",
      subtitle: "Elegant & Modern"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Title - Simple and Clean */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-2 tracking-wide">
            EXPLORE COLLECTIONS
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto "></div>
        </div>

        {/* Categories Grid - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative overflow-hidden rounded-none bg-white"
            >
              {/* Image Container - Full Height */}
              <div className="relative h-[450px] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              </div>

              {/* Text Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="mb-2">
                  <span className="text-sm font-medium tracking-widest opacity-90">
                    COLLECTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-1">
                  {cat.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {cat.subtitle}
                </p>
              </div>

              {/* Hover Indicator Line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Shop Now Button - Appear on Hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="​ bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Centered */}
        <div className="text-center mt-10">
          <button className="border border-black text-black px-10 py-3 font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            VIEW ALL CATEGORIES
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;