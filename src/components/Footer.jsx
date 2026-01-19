// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for all your shopping needs. Quality products, fast delivery, and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men's Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women's Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kids & Baby</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">CUSTOMER SERVICE</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Payment Methods - Single Row with Real Images */}
          <div>
            <h4 className="text-lg font-semibold mb-6">PAYMENT </h4>
            <p className="text-gray-400 mb-4">
              We accept all major payment methods for secure transactions.
            </p>
            
            {/* Payment Logos in Single Row with Real Images */}
            <div className="flex gap-3">
              {/* Visa */}
              <div className="flex-1 bg-white rounded-md p-2 flex items-center justify-center h-12">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png" 
                  alt="Visa" 
                  className="h-6 object-contain"
                />
              </div>
              
              {/* MasterCard */}
              <div className="flex-1 bg-white rounded-md p-2 flex items-center justify-center h-12">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" 
                  alt="MasterCard" 
                  className="h-7 object-contain"
                />
              </div>
              
              {/* PayPal */}
              <div className="flex-1 bg-white rounded-md p-2 flex items-center justify-center h-12">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" 
                  alt="PayPal" 
                  className="h-5 object-contain"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 SHOP.CO. All rights reserved. | Designed with shoppers worldwide
          </p>
          <div className="mt-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors mx-2">Privacy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors mx-2">Terms</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors mx-2">Sitemap</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors mx-2">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;