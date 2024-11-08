import React from 'react';
import { Leaf, Zap, TrendingUp } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: 'Advanced Growing Techniques',
      description: 'Learn professional cultivation methods to maximize your yield'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: 'Real-Time Monitoring',
      description: 'Track your grow progress with detailed analytics'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: 'Yield Optimization',
      description: 'Get data-driven insights to improve your harvest'
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};