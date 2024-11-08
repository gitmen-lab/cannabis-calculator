import React from 'react';
import { DollarSign } from 'lucide-react';

export const MarketInsights = () => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <DollarSign className="w-6 h-6 text-green-600" />
      <h3 className="text-xl font-bold">Market Insights</h3>
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Current Market Price</span>
        <span className="font-semibold">$1,500 - $3,000/lb</span>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Energy Cost/Cycle</span>
        <span className="font-semibold">$200 - $600</span>
      </div>
    </div>
  </div>
);