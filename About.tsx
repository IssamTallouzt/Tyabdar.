import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl text-center mb-8">Our Story</h1>
        
        <div className="mb-12">
          <div 
            className="w-full h-64 rounded-lg mb-8 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://resize.elle.fr/article/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/recettes-faciles-cuisine-marocaine-4173785/100676152-1-fre-FR/Cuisine-marocaine-5-recettes-pour-s-y-mettre.jpg')"
            }}
          />
          <p className="font-poppins text-lg mb-6">
            TyabDar was born from a passion for authentic Moroccan cuisine and a desire to connect 
            people with traditional home-cooked meals. Our name, which means "good house" in Moroccan 
            dialect, reflects our commitment to providing the warmth and comfort of home cooking.
          </p>
          <p className="font-poppins text-lg mb-6">
            We work with talented home cooks who prepare meals with love and care, using traditional 
            recipes passed down through generations. Each dish is crafted with authentic spices and 
            ingredients, bringing the rich flavors of Morocco to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#2C1810] p-6 rounded-lg">
            <h2 className="font-cinzel text-2xl mb-4">Our Mission</h2>
            <p className="font-poppins">
              To preserve and share authentic Moroccan culinary traditions while supporting local 
              home cooks and creating meaningful connections through food.
            </p>
          </div>
          <div className="bg-[#2C1810] p-6 rounded-lg">
            <h2 className="font-cinzel text-2xl mb-4">Our Values</h2>
            <p className="font-poppins">
              Authenticity, community, sustainability, and the celebration of traditional 
              Moroccan cooking methods and recipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}