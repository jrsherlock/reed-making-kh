import React from 'react';
import { Menu, Music2, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-stone-100/95 backdrop-blur-sm z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-amber-700" />
            <span className="ml-2 text-xl font-semibold text-amber-900">ReedCraft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-stone-600 hover:text-amber-700">Products</a>
            <a href="#process" className="text-stone-600 hover:text-amber-700">Our Process</a>
            <a href="#about" className="text-stone-600 hover:text-amber-700">About</a>
            <a href="#contact" className="text-stone-600 hover:text-amber-700">Contact</a>
            <button className="flex items-center bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-stone-600 hover:bg-amber-50">Products</a>
            <a href="#process" className="block px-3 py-2 text-stone-600 hover:bg-amber-50">Our Process</a>
            <a href="#about" className="block px-3 py-2 text-stone-600 hover:bg-amber-50">About</a>
            <a href="#contact" className="block px-3 py-2 text-stone-600 hover:bg-amber-50">Contact</a>
            <button className="flex items-center w-full bg-amber-700 text-white px-3 py-2 rounded-md hover:bg-amber-800">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}