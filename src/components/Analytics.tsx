import React from 'react';
import { LineChart } from 'lucide-react';

export const Analytics = () => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <LineChart className="w-6 h-6 text-green-600" />
      <h3 className="text-xl font-bold">Real-Time Analytics</h3>
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Average Yield/Plant</span>
        <span className="font-semibold">0.5 - 2.0 lbs</span>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Yield/Square Foot</span>
        <span className="font-semibold">1.0 - 2.5 oz</span>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Yield/Watt</span>
        <span className="font-semibold">0.5 - 1.0 g</span>
      </div>
    </div>
  </div>
);