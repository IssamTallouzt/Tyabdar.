import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="relative h-[80vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center hero-overlay"
          style={{
            backgroundImage: "url('https://i0.wp.com/aswakassalam.com/wp-content/uploads/2021/11/iStock-1161748748-1152x768-1.jpg?w=1152&ssl=1')"
          }}
        >
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-cinzel text-5xl md:text-7xl mb-4">
            WELCOME TO<br />TYABDAR
          </h1>
          <p className="font-poppins text-xl md:text-2xl mb-8">
            A social project connecting you with healthy home-cooked meals
          </p>
          <Link 
            to="/menu"
            className="bg-[#E8C5A7] text-[#2C1810] font-poppins font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#D4B094] transition-colors"
          >
            ORDER NOW
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="font-cinzel text-4xl text-center mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#2C1810] rounded-lg p-6 text-center">
            <h3 className="font-cinzel text-2xl mb-4">Tajine</h3>
            <p className="font-poppins">Traditional Moroccan slow-cooked savory stews</p>
          </div>
          <div className="bg-[#2C1810] rounded-lg p-6 text-center">
            <h3 className="font-cinzel text-2xl mb-4">Couscous</h3>
            <p className="font-poppins">Steamed semolina with vegetables and meat</p>
          </div>
          <div className="bg-[#2C1810] rounded-lg p-6 text-center">
            <h3 className="font-cinzel text-2xl mb-4">Harira</h3>
            <p className="font-poppins">Traditional Moroccan soup with legumes</p>
          </div>
        </div>
      </section>
    </div>
  );
}