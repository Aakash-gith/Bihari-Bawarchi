import React from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';
import { Post } from '../types';

const posts: Post[] = [
  {
    id: '1',
    title: 'छठ महापर्व - Kharna',
    image: '/Kharna.png',
    likes: '125K',
    description: 'Chhath Mahaparv Day 2 - The sacred Kharna ritual with authentic Bihari traditions.',
    videoUrl: 'https://www.instagram.com/bihari_bawarchi__/reel/DQMfdhfE-ou/'
  },
  {
    id: '2',
    title: 'जाडा - Thari Ki Chatni',
    image: '/Jada.png',
    likes: '98K',
    description: 'Winter special recipes of Bihar - Roasted seeds and traditional flavors.',
    videoUrl: 'https://www.instagram.com/bihari_bawarchi__/reel/DQvvPJKk4H5/'
  },
  {
    id: '3',
    title: '🌸 खीड़छ्छा - Khoichcha 🌸',
    image: '/khoichcha.png',
    likes: '85K',
    description: 'Traditional Khoichha recipe for Navratri celebrations - A divine offering.',
    videoUrl: 'https://www.instagram.com/bihari_bawarchi__/reel/DPIRF1BE_AE/'
  },
];

export const ViralPosts: React.FC = () => {
  return (
    <section id="viral" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wider text-sm mb-3">Trending Now</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            Viral Posts
          </h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            These recipes captured the hearts (and stomachs) of thousands on Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 block"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold font-serif mb-2">{post.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1">
                    <Heart size={18} className="fill-current text-red-500" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={18} />
                    <span>Comments</span>
                  </div>
                </div>
              </div>

              {/* Reel Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <Play size={14} fill="currentColor" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/bihari_bawarchi__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b-2 border-brand-600 text-brand-600 font-bold hover:text-brand-800 transition-colors pb-1"
          >
            See More on Instagram <Play size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};