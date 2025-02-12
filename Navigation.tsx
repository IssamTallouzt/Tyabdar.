import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBasket } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <>
      <nav className="bg-[#2C1810] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-cinzel text-2xl">TyabDar</Link>
          
        </div>
      </nav>
      
      <div className="fixed bottom-0 left-0 right-0 bg-[#2C1810] p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className={`font-poppins px-6 py-2 rounded-full transition-colors ${
              location.pathname === '/' ? 'bg-[#3D251C]' : 'hover:bg-[#3D251C]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className={`font-poppins px-6 py-2 rounded-full transition-colors ${
              location.pathname === '/menu' ? 'bg-[#3D251C]' : 'hover:bg-[#3D251C]'
            }`}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className={`font-poppins px-6 py-2 rounded-full transition-colors ${
              location.pathname === '/about' ? 'bg-[#3D251C]' : 'hover:bg-[#3D251C]'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </>
  );
}