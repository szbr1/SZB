// app/info/page.jsx
"use client";
import { IoDiamondSharp } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { FaRegSmile } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

const InfoPage = () => {
  const [complaintText, setComplaintText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Format the complaint text for WhatsApp
    const formattedText = encodeURIComponent(`*New Complaint:*\n${complaintText}`);
    const whatsappUrl = `https://wa.me/923109228484?text=${formattedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 pt-24 pb-12 px-4">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Our Services & Benefits
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          We provide exceptional solutions tailored to your needs
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-6 rounded-xl backdrop-blur-sm shadow-xl"
          >
            <div className="text-3xl text-blue-400 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-slate-200 mb-2">{benefit.title}</h3>
            <p className="text-slate-400">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Complaint Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-gradient-to-br from-slate-800/50 to-blue-900/50 p-8 rounded-xl backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">Submit Your Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
              className="w-full h-32 px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-200 placeholder-slate-400 transition-all duration-300"
              placeholder="Please describe your complaint..."
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500  to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            type="submit"
          >
            Submit via WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

// Benefits data
const benefits = [
  {
    icon: <IoDiamondSharp className="text-green-500"/>,
    title: "Fast Service",
    description: "Quick response and efficient problem resolution within 24 hours."
  },
  {
    icon: <MdWorkspacePremium className="text-orange-500"/>,
    title: "Premium Quality",
    description: "Top-notch solutions with attention to detail and excellence."
  },
  {
    icon: <FaHandshakeSimple />,
    title: "24/7 Support",
    description: "Round-the-clock customer service to assist you anytime."
  },
  {
    icon: <CiMobile3 className="text-violet-700 "/>,
    title: "Mobile First",
    description: "Perfectly optimized experience across all devices."
  },
  {
    icon: <GrSecure />,
    title: "Secure Platform",
    description: "Advanced security measures to protect your data."
  },
  {
    icon: <FaRegSmile className="text-blue-600"/>,
    title: "Satisfaction Guaranteed",
    description: "We ensure complete satisfaction with our services."
  }
];

export default InfoPage;
