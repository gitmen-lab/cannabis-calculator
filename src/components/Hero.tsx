import React from 'react';
import { Sprout, Calculator, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Professional Cannabis Yield Calculator
          </h1>
          <p className="text-xl mb-8 text-green-50">
            Get accurate harvest estimates based on your grow space, experience level, and cultivation methods. Our advanced calculator helps you optimize your cannabis growing operation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Sprout className="w-6 h-6" />,
                title: 'Precise Estimates',
                desc: 'Calculate yields based on multiple factors'
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: 'Advanced Metrics',
                desc: 'Track efficiency and production costs'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Growth Analysis',
                desc: 'Compare results with industry standards'
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-green-50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};