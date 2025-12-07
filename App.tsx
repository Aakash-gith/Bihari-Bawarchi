import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ViralPosts } from './components/ViralPosts';
import { Collab } from './components/Collab';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-stone-50 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <ViralPosts />
        <Collab />
      </main>
    </div>
  );
}

export default App;