import React from 'react';
import { ChefHat, Heart, Utensils } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-stone-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=800&fit=crop" 
              alt="Cooking" 
              className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=800&fit=crop" 
              alt="Plating" 
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-100/50 rounded-full blur-3xl"></div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">About The Page</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Bihari Bawarchi
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Welcome to my digital kitchen! I am the creator behind <strong>Bihari Bawarchi</strong>, a page dedicated to preserving and popularizing the rich, authentic culinary heritage of Bihar and beyond.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            What started as a simple hobby of documenting my grandmother's recipes has turned into a viral sensation. My mission is simple: to show the world that traditional food is not just about sustenance, it's about stories, culture, and love.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
              <ChefHat className="text-brand-600 mb-2" size={28} />
              <span className="font-bold text-gray-900">Authentic</span>
              <span className="text-xs text-gray-500">Traditional Recipes</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
              <Heart className="text-brand-600 mb-2" size={28} />
              <span className="font-bold text-gray-900">Passionate</span>
              <span className="text-xs text-gray-500">Made with Love</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
              <Utensils className="text-brand-600 mb-2" size={28} />
              <span className="font-bold text-gray-900">Creative</span>
              <span className="text-xs text-gray-500">Modern Twist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};