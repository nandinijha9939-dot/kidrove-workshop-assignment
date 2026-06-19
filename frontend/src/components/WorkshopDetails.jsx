import React from 'react';
import { Calendar, Users, Clock, Globe, DollarSign, CheckCircle, Award, BookOpen, Cpu, Zap } from 'lucide-react';

const WorkshopDetails = () => {
  const features = [
    {
      icon: Users,
      title: 'Age Group',
      description: '8–14 Years',
      detail: 'Perfect for young innovators'
    },
    {
      icon: Clock,
      title: 'Duration',
      description: '4 Weeks',
      detail: '2 sessions per week'
    },
    {
      icon: Globe,
      title: 'Mode',
      description: 'Online',
      detail: 'Live interactive sessions'
    },
    {
      icon: DollarSign,
      title: 'Fee',
      description: '₹2,999',
      detail: 'Includes all materials'
    },
    {
      icon: Calendar,
      title: 'Start Date',
      description: '15 July 2026',
      detail: 'Limited seats available'
    },
  ];

  const highlights = [
    { icon: Award, text: 'Certificate of Completion' },
    { icon: BookOpen, text: 'Interactive Learning Materials' },
    { icon: Cpu, text: 'Hands-on Projects' },
    { icon: Zap, text: 'Expert Instructors' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Workshop Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI & Robotics Summer Workshop
          </p>
        </div>

        {/* Details Grid - Kidrove Style Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-7 h-7 text-blue-600" />
              </div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">{item.title}</p>
              <p className="font-bold text-gray-900 text-lg">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
              <item.icon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;