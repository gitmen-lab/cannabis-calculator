import React, { useState } from 'react';
import { Calculator, Plant, HelpCircle } from 'lucide-react';

export default function YieldCalculator() {
  const [plants, setPlants] = useState(1);
  const [height, setHeight] = useState(24);
  const [width, setWidth] = useState(24);
  const [experience, setExperience] = useState('intermediate');

  const calculateYield = () => {
    const baseYield = (height * width * plants) / 144;
    const multipliers = {
      beginner: 0.7,
      intermediate: 1,
      expert: 1.3
    };
    return (baseYield * multipliers[experience as keyof typeof multipliers]).toFixed(2);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-bold text-gray-800">Cannabis Yield Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Plants</label>
          <input
            type="number"
            min="1"
            value={plants}
            onChange={(e) => setPlants(Math.max(1, parseInt(e.target.value)))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Plant Height (inches)</label>
          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value)))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Plant Width (inches)</label>
          <input
            type="number"
            min="1"
            value={width}
            onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value)))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Growing Experience</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h4 className="text-lg font-semibold text-green-800">Estimated Yield</h4>
          <p className="text-3xl font-bold text-green-600">{calculateYield()} oz</p>
        </div>
      </div>
    </div>
  );
}