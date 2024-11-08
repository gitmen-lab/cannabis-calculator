import React, { useState } from 'react';
import { Calculator, Leaf, Settings } from 'lucide-react';

interface CalculationResults {
  dryYield: number;
  wetYield: number;
  gramsPerSqFt: number;
  gramsPerWatt: number;
  energyEfficiency: number;
}

export const YieldCalculator = () => {
  const [growSpace, setGrowSpace] = useState({
    length: 10,
    width: 10,
    height: 8
  });
  
  const [cultivation, setCultivation] = useState({
    numPlants: 4,
    experience: 'intermediate',
    method: 'soil',
    vegDuration: 4,
    flowerDuration: 8
  });

  const [environment, setEnvironment] = useState({
    co2Enrichment: false,
    automationLevel: 'basic',
    temperature: 75,
    humidity: 55
  });

  const [lighting, setLighting] = useState({
    type: 'LED',
    wattage: 1000,
    ppfd: 900
  });

  const [strain, setStrain] = useState({
    name: '',
    yieldPotential: 'medium'
  });

  const calculateResults = (): CalculationResults => {
    const squareFootage = growSpace.length * growSpace.width;
    const cubicFootage = squareFootage * growSpace.height;
    
    // Base yield calculation
    let baseYield = cultivation.numPlants * 2; // 2 oz per plant base
    
    // Experience multiplier
    const expMultipliers = {
      beginner: 0.7,
      intermediate: 1.0,
      advanced: 1.3,
      expert: 1.5
    };
    baseYield *= expMultipliers[cultivation.experience as keyof typeof expMultipliers];
    
    // Environment multiplier
    if (environment.co2Enrichment) baseYield *= 1.2;
    if (environment.automationLevel === 'advanced') baseYield *= 1.15;
    
    // Method multiplier
    const methodMultipliers = {
      soil: 1.0,
      hydroponic: 1.2,
      aeroponic: 1.3
    };
    baseYield *= methodMultipliers[cultivation.method as keyof typeof methodMultipliers];
    
    // Convert to grams
    const dryYieldGrams = baseYield * 28.35; // Convert oz to grams
    
    return {
      dryYield: baseYield,
      wetYield: baseYield * 4, // Wet weight is roughly 4x dry weight
      gramsPerSqFt: dryYieldGrams / squareFootage,
      gramsPerWatt: dryYieldGrams / lighting.wattage,
      energyEfficiency: (dryYieldGrams / lighting.wattage) * (lighting.ppfd / 1000)
    };
  };

  const results = calculateResults();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-bold">Advanced Yield Calculator</h2>
      </div>

      <div className="space-y-6">
        {/* Grow Space Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Grow Space Dimensions</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Length (ft)</label>
              <input
                type="number"
                value={growSpace.length}
                onChange={(e) => setGrowSpace({...growSpace, length: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Width (ft)</label>
              <input
                type="number"
                value={growSpace.width}
                onChange={(e) => setGrowSpace({...growSpace, width: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Height (ft)</label>
              <input
                type="number"
                value={growSpace.height}
                onChange={(e) => setGrowSpace({...growSpace, height: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Cultivation Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Cultivation Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Plants</label>
              <input
                type="number"
                value={cultivation.numPlants}
                onChange={(e) => setCultivation({...cultivation, numPlants: Number(e.target.value)})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience Level</label>
              <select
                value={cultivation.experience}
                onChange={(e) => setCultivation({...cultivation, experience: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Growing Method</label>
              <select
                value={cultivation.method}
                onChange={(e) => setCultivation({...cultivation, method: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="soil">Soil</option>
                <option value="hydroponic">Hydroponic</option>
                <option value="aeroponic">Aeroponic</option>
              </select>
            </div>
          </div>
        </div>

        {/* Environmental Controls */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Environmental Factors</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={environment.co2Enrichment}
                onChange={(e) => setEnvironment({...environment, co2Enrichment: e.target.checked})}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-700">CO2 Enrichment</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Automation Level</label>
              <select
                value={environment.automationLevel}
                onChange={(e) => setEnvironment({...environment, automationLevel: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="basic">Basic</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Estimated Yield Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-md">
              <p className="text-sm text-gray-600">Dry Yield</p>
              <p className="text-xl font-bold text-green-600">{results.dryYield.toFixed(2)} oz</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="text-sm text-gray-600">Wet Yield</p>
              <p className="text-xl font-bold text-green-600">{results.wetYield.toFixed(2)} oz</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="text-sm text-gray-600">Grams/sq.ft</p>
              <p className="text-xl font-bold text-green-600">{results.gramsPerSqFt.toFixed(2)} g</p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <p className="text-sm text-gray-600">Grams/watt</p>
              <p className="text-xl font-bold text-green-600">{results.gramsPerWatt.toFixed(2)} g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};