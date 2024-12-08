"use client"
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BsShieldFillCheck } from 'react-icons/bs';

const AboutPage = () => {
  const stats = [
    { icon: BiSolidUser, count: '5000+', label: 'Satisfied Customers' },
    { icon: AiFillStar, count: '4.9', label: 'Average Rating' },
    { icon: BsShieldFillCheck, count: '100%', label: 'Secure & Trusted' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
         <Link href="./">  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-blue-500">Us</span>
          </h1></Link>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Your trusted partner in premium digital subscriptions and services
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <FaWhatsapp className="text-6xl text-green-500" />
                <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Connect With Us
            </h3>
            <a 
              href="https://wa.me/923179393471" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transition-colors duration-300"
            >
              <span>+92 317 9393471</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative flex justify-center mb-4">
                <stat.icon className="text-4xl text-blue-500" />
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">{stat.count}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Choose Us?
          </h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We pride ourselves on delivering premium digital services to our valued customers worldwide. With years of experience in the industry, we ensure 100% satisfaction.
            </p>
            <p>
              Our commitment to excellence and customer satisfaction has made us a trusted name in the digital subscription industry. We offer 24/7 support and guaranteed service quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
