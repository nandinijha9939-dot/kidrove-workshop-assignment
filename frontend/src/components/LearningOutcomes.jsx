import React from 'react';
import { CheckCircle, Rocket, Code, Brain, Eye, Lightbulb } from 'lucide-react';

const LearningOutcomes = () => {
  const outcomes = [
    {
      icon: Rocket,
      title: 'Build AI Robots',
      description: 'Build and program your own AI-powered robot from scratch'
    },
    {
      icon: Code,
      title: 'Master Python',
      description: 'Master Python programming for AI applications and automation'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Understand machine learning fundamentals and neural networks'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Create computer vision projects with OpenCV and image recognition'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Develop problem-solving and critical thinking skills'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What your child will learn and achieve in this workshop
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <outcome.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{outcome.title}</h3>
              <p className="text-gray-600 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;