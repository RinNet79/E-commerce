// src/components/ProductsSection.jsx
import React from 'react';

const StockProduct = () => {
  // Product data - 10 products (2 rows x 5)
  const products = [
    {
      id: 1,
      name: "Classic White Tee",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
      category: "T-Shirts",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: "$59.99",
      originalPrice: "$79.99",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop",
      category: "Jeans",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
      category: "Jackets",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
      category: "Shoes",
    },
    {
      id: 5,
      name: "Wool Sweater",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop",
      category: "Sweaters",
    },
    {
      id: 6,
      name: "Baseball Cap",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Cargo Pants",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
      category: "Pants",
    },
    {
      id: 8,
      name: "Hoodie",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop",
      category: "Hoodies",
    },
    {
      id: 9,
      name: "Formal Shirt",
      price: "$54.99",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop",
      category: "Shirts",
    },
    {
      id: 10,
      name: "Backpack",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",
      category: "Bags",
    }
  ];

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header - ORDER NOW */}
        <div className="text-center mb-10 mt-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">STOCK PRODUCT</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* Products Grid - 5 cards per row */}
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {products.slice(0, 5).map((product) => (
              <div 
                key={product.id} 
                className="group border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button - ALWAYS VISIBLE */}
                  <button className="w-full py-2 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {products.slice(5, 10).map((product) => (
              <div 
                key={product.id} 
                className="group border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button - ALWAYS VISIBLE */}
                  <button className="w-full py-2 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button - Centered */}
        <div className="text-center mt-10">
          <button className="border border-black text-black px-10 py-3 font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Load More Data
          </button>
        </div>

      </div>
    </section>
  );
};

export default StockProduct;