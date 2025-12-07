import React from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop" 
          alt="Indian Spices and Food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="mb-6 flex justify-center">
            <div className="bg-brand-600/90 p-4 rounded-full shadow-lg backdrop-blur-sm border-2 border-brand-400">
                <ChefHat size={40} className="text-white" />
            </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Bihari Bawarchi
        </h1>
        
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 mb-8">
            <h2 className="text-brand-400 font-bold uppercase tracking-wider text-sm mb-3">About Me</h2>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light">
              Namaste! I am the creator behind <span className="text-brand-400 font-semibold">Bihari Bawarchi</span>. 
              My journey started with a simple love for the rustic, smoky flavors of Bihar and authentic Indian cuisine. 
              Today, I share my viral recipes and culinary adventures with thousands of food lovers on Instagram.
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#viral" 
            className="px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-600/30 flex items-center gap-2"
          >
            See My Viral Posts <ArrowRight size={18} />
          </a>
          <a 
            href="#collab" 
            className="px-8 py-3.5 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold transition-all"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-500 md:text-white/70">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full"></div>
        </div>
      </div>
    </section>
  );
};