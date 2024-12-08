"use client"
// pages/terms-and-conditions.tsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const TermsAndConditions = () => {
  const [complaint, setComplaint] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      y: -10,
      duration: 0.2,
      onComplete: () => {
        gsap.to(formRef.current, {
          y: 0,
          duration: 0.2
        });
      }
    });
    
    localStorage.setItem('userComplaint', complaint);
    setShowSuccess(true);
    setComplaint('');
  };

  return (
    <div className="min-h-screen bg-[#0a0c1b] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto mt-5 bg-[#161827] rounded-xl shadow-2xl border border-[#2a2d3d]"
      >
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Terms & Conditions - Instant Cashback
          </h1>
          
          <div className="prose prose-invert prose-lg text-gray-300 mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-100">Cashback Terms</h2>
            <p className="leading-relaxed">
              1. Instant cashback is subject to proper transaction verification.
              2. Cashback will be processed within 24-48 hours of eligible purchases.
              3. Maximum cashback amount is limited to $100 per transaction.
            </p>
          </div>

          <motion.div 
            ref={formRef}
            className="bg-[#1c1e2e] p-6 rounded-lg border border-[#2a2d3d]"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-100">Submit Your Complaint</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-[#13141f] border-[#2a2d3d] text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Complaint Details
                </label>
                <textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-[#13141f] border-[#2a2d3d] text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                type="submit"
              >
                Submit Complaint
              </motion.button>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-[#162032] text-emerald-400 rounded-md border border-emerald-500/20"
              >
                Thank you for your feedback! Your complaint has been submitted successfully.
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
