import React from 'react';
import kidsRobot from "../assets/kids-robotics.jpg";
import {
  Calendar,
  Users,
  Clock,
  Globe,
  ArrowRight,
  Star,
  Sparkles,
} from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById('registration')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              SUMMER 2026 ADMISSIONS OPEN
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              AI & Robotics
              <span className="block text-blue-600">
                Summer Workshop
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Give your child a head start in the future of technology.
              Learn Robotics, Artificial Intelligence, Coding, Machine
              Learning, and Problem Solving through exciting real-world
              projects and live interactive classes.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-8 ">
              <button
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition">
                Learn More
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                ⭐ <span>4.9/5 Rating</span>
              </div>

              <div className="flex items-center gap-2">
                🎓 <span>Certificate Included</span>
              </div>

              <div className="flex items-center gap-2">
                🚀 <span>Hands-On Projects</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="bg-white p-4 rounded-3xl shadow-2xl">
              <img
                src={kidsRobot}
                alt="Kids Learning Robotics"
                className="rounded-2xl w-full h-[380px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-5">
              <p className="text-sm text-gray-500">
                Starting From
              </p>
              <p className="text-3xl font-bold text-blue-600">
                ₹2,999
              </p>
            </div>
          </div>
        </div>

        {/* WORKSHOP INFO CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Age Group</p>
            <h3 className="font-bold text-lg">8–14 Years</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Duration</p>
            <h3 className="font-bold text-lg">4 Weeks</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Mode</p>
            <h3 className="font-bold text-lg">Online</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Start Date</p>
            <h3 className="font-bold text-lg">15 July 2026</h3>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold">5000+</h2>
              <p>Students</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100+</h2>
              <p>Workshops</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">4.9★</h2>
              <p>Average Rating</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">50+</h2>
              <p>Cities Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;