import React from 'react';
import { GraduationCap } from 'lucide-react';

export const CTAButton = () => (
  <a
    href="https://thcuniversity.org/ref/usmariano/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
  >
    <GraduationCap className="w-5 h-5" />
    <span>Learn from Expert Growers</span>
  </a>
);