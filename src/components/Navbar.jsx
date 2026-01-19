import { NavLink } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const linkClass = "text-gray-700 hover:text-black font-medium";

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">MyLogo</div>

        <ul className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/new" className={linkClass}>New</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>

        <div className="flex items-center space-x-5">
          <Search className="cursor-pointer" />
          <User className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">2</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
