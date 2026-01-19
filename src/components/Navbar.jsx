import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClass = "text-gray-700 hover:text-black font-medium transition-colors";

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/new" className={linkClass}>New</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Search Icon - Hidden on mobile */}
          <Search className="cursor-pointer hidden sm:block" />
          
          {/* User Icon - Hidden on mobile */}
          <User className="cursor-pointer hidden sm:block" />
          
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <NavLink 
              to="/" 
              className="block py-2 text-gray-700 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className="block py-2 text-gray-700 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/new" 
              className="block py-2 text-gray-700 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              New
            </NavLink>
            <NavLink 
              to="/about" 
              className="block py-2 text-gray-400 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            
            {/* Mobile-only icons */}
            <div className="flex items-center space-x-4 pt-3 border-t">
              <div className="flex items-center space-x-2 text-gray-700">
                <Search size={20} />
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <User size={20} />
                <span>Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}