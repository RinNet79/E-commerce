// src/components/PopularProducts.jsx
import React from 'react';

const PopularProducts = () => {
  // Product data - 8 products (2 rows x 4)
  const products = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: "$129.99",
      originalPrice: "$159.99",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      tag: "BEST SELLER"
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 89,
      tag: "TRENDING"
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: "$249.99",
      originalPrice: "$299.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 256,
      tag: "NEW"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 187,
      tag: "HOT"
    },
    {
      id: 5,
      name: "Gaming Laptop",
      price: "$1,299.99",
      originalPrice: "$1,499.99",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 56,
      tag: "LIMITED"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 312,
      tag: "BEST SELLER"
    },
    {
      id: 7,
      name: "Camera DSLR",
      price: "$899.99",
      originalPrice: "$999.99",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 78,
      tag: "PREMIUM"
    },
    {
      id: 8,
      name: "Tablet Pro",
      price: "$499.99",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 143,
      tag: "POPULAR"
    }
  ];

  return (
    <section className="p-2 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">POPULAR PRODUCTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved items by customers worldwide
          </p>
        </div>

        {/* Products Grid - 4 cards per row */}
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* Product Image with Tag */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Product Tag */}
                  <div className="absolute top-3 left-3 transform transition-transform duration-500 group-hover:scale-110">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg transform transition-transform duration-500 group-hover:translate-x-1">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm transform transition-transform duration-300 group-hover:scale-110">
                          {i < Math.floor(product.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 transform transition-transform duration-500 group-hover:translate-x-1">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-xl transform transition-transform duration-500 group-hover:scale-105">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm transform transition-transform duration-500 group-hover:translate-x-1">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <button className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.03] active:scale-95">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03]"
              >
                {/* Product Image with Tag */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Product Tag */}
                  <div className="absolute top-3 left-3 transform transition-transform duration-500 group-hover:scale-110">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg transform transition-transform duration-500 group-hover:translate-x-1">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm transform transition-transform duration-300 group-hover:scale-110">
                          {i < Math.floor(product.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 transform transition-transform duration-500 group-hover:translate-x-1">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-xl transform transition-transform duration-500 group-hover:scale-105">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm transform transition-transform duration-500 group-hover:translate-x-1">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <button className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.03] active:scale-95">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
            View All Popular Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;