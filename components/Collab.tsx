import React from 'react';
import { Mail, Instagram, ArrowUpRight, MapPin } from 'lucide-react';

export const Collab: React.FC = () => {
  return (
    <section id="collab" className="bg-stone-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-stone-100 flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">Work With Me</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Let's Create Something Delicious Together
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Open for brand collaborations, menu consulting, and sponsored content. Let's bring authentic flavors to your audience.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@biharibawarchi.com" className="flex items-center gap-3 text-gray-800 hover:text-brand-600 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">Send me an email</span>
              </a>
              <a href="https://www.instagram.com/bihari_bawarchi__/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-brand-600 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  <Instagram size={20} />
                </div>
                <span className="font-medium text-lg">DM on Instagram</span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-brand-600 text-white p-8 rounded-2xl relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
             
             <h4 className="text-2xl font-serif font-bold mb-6">Page Stats</h4>
             
             <div className="space-y-6">
               <div>
                 <p className="text-white/70 text-sm">Instagram Followers</p>
                 <p className="text-3xl font-bold">150K+</p>
               </div>
               <div>
                 <p className="text-white/70 text-sm">Monthly Reach</p>
                 <p className="text-3xl font-bold">2.5M+</p>
               </div>
               <div>
                 <p className="text-white/70 text-sm">Location</p>
                 <div className="flex items-center gap-2 mt-1">
                   <MapPin size={16} />
                   <p className="font-medium">Bihar, India</p>
                 </div>
               </div>
             </div>

             <a 
               href="https://www.instagram.com/bihari_bawarchi__/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="mt-8 w-full bg-white text-brand-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors"
             >
               Visit Profile <ArrowUpRight size={18} />
             </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bihari Bawarchi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Use</a>
          </div>
        </div>
      </div>
    </section>
  );
};