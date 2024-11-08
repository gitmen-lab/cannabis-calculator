import React from 'react';
import { Sprout } from 'lucide-react';
import { YieldCalculator } from './components/YieldCalculator';
import { PromoPopup } from './components/PromoPopup';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { CTAButton } from './components/CTAButton';
import { Analytics } from './components/Analytics';
import { MarketInsights } from './components/MarketInsights';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sprout className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Cannabis Yield Calculator</h1>
                <p className="text-sm text-gray-600">Professional Harvest Estimator</p>
              </div>
            </div>
            <CTAButton />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <YieldCalculator />
            </div>
            <div className="space-y-6">
              <Analytics />
              <MarketInsights />
            </div>
          </div>

          <Features />
          <FAQ />

          <div className="text-center mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Maximize Your Growing Potential?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join THC University today and learn advanced cultivation techniques from industry experts. Transform your growing skills and increase your yields!
            </p>
            <CTAButton />
          </div>
        </div>
      </main>

      <PromoPopup />
    </div>
  );
}