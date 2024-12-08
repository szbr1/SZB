"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaShieldAlt, FaUserLock } from "react-icons/fa";
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen py-16">
      {/* Hero Section */}
      <motion.div 
        className="max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why Choose Our Service?
        </h1>
        <p className="text-xl text-gray-300">
          We do things differently, and here's why that matters for you.
        </p>
      </motion.div>

      {/* Blog Style Sections */}
      <div className="max-w-3xl mx-auto mt-16 px-4 space-y-16">
        {/* First Blog Section */}
        <motion.article 
          className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaShieldAlt className="text-3xl text-green-400" />
            <h2 className="text-2xl font-bold text-white">Your Security Is Our Priority</h2>
          </div>
          <div className="prose prose-invert">
            <p className="text-gray-300 leading-relaxed">
              In today's digital age, online payment fraud has become increasingly sophisticated. 
              That's why we've chosen a different approach. Instead of traditional online payments, 
              we process transactions through WhatsApp - a platform with end-to-end encryption and 
              direct communication.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This personal touch allows us to verify each transaction individually, ensuring 
              your payment information never gets stored on any database or server. It's not just 
              about business - it's about building trust and ensuring your peace of mind.
            </p>
          </div>
        </motion.article>

        {/* Second Blog Section */}
        <motion.article 
          className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaUserLock className="text-3xl text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Direct, Secure, and Personal</h2>
          </div>
          <div className="prose prose-invert">
            <p className="text-gray-300 leading-relaxed">
              When you choose our service, you're not just getting another automated subscription system. 
              You're getting a dedicated team that personally handles your transactions and ensures 
              everything runs smoothly.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Our WhatsApp-based transaction system means:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2 space-y-2">
              <li>No stored credit card information</li>
              <li>Direct communication with our team</li>
              <li>Instant verification and activation</li>
              <li>24/7 support through a platform you already trust</li>
            </ul>
          </div>
        </motion.article>

        {/* CTA Section */}
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className="group bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center gap-3 mx-auto"
            onClick={() => window.history.back()}
          >
            <FaWhatsapp className="text-2xl" />
            <span>Start Secure Chat</span>
          </button>
          <p className="text-gray-400 mt-4">
            Join thousands of satisfied customers who trust our secure payment process
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
