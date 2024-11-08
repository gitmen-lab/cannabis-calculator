import React, { useState, useEffect } from 'react';
import { X, GraduationCap } from 'lucide-react';

export const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-green-600" />
          <h3 className="text-2xl font-bold">Level Up Your Growing Skills!</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          Learn from industry experts! Get professional cannabis growing training with Jorge Cervantes.
        </p>
        
        <a
          href="https://thcuniversity.org/ref/usmariano/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          <GraduationCap className="w-5 h-5" />
          <span>Start Learning Today</span>
        </a>
      </div>
    </div>
  );
};