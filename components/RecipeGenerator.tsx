import React, { useState } from 'react';
import { Sparkles, Loader2, ChefHat, Send } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import { LoadingState } from '../types';

export const RecipeGenerator: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;

    setStatus(LoadingState.LOADING);
    setResponse('');
    
    try {
      const result = await generateRecipe(ingredients);
      setResponse(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-chef" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-600 rounded-2xl mb-4 shadow-lg shadow-brand-600/20">
            <Sparkles className="text-white" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Ask the Bawarchi AI
          </h2>
          <p className="text-gray-300 text-lg">
            Have some leftover ingredients? Or craving something specific? <br className="hidden md:block"/>
            Let my AI assistant suggest a Bihari-style quick fix for you!
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col md:flex-row gap-3">
              <input 
                type="text" 
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., Potatoes, Mustard Oil, Green Chillies..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={status === LoadingState.LOADING || !ingredients.trim()}
                className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                {status === LoadingState.LOADING ? (
                  <><Loader2 className="animate-spin" size={20} /> Cooking...</>
                ) : (
                  <><ChefHat size={20} /> Suggest Recipe</>
                )}
              </button>
            </div>
          </form>

          {/* Response Area */}
          {(status === LoadingState.SUCCESS || status === LoadingState.ERROR) && (
            <div className={`mt-8 p-6 rounded-xl border animate-fade-in ${
              status === LoadingState.ERROR ? 'bg-red-500/10 border-red-500/30' : 'bg-brand-900/40 border-brand-500/30'
            }`}>
              {status === LoadingState.ERROR ? (
                <p className="text-red-200 text-center">Oops! The kitchen is a bit busy. Please try again later.</p>
              ) : (
                <div className="prose prose-invert max-w-none">
                  <div className="flex items-start gap-4">
                     <div className="mt-1 min-w-[32px] w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                       <span className="font-serif font-bold text-xs">BB</span>
                     </div>
                     <div className="whitespace-pre-wrap text-gray-200 leading-relaxed font-light">
                        {response}
                     </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};