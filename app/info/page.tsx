"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const InfoPage = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".animate-card",
      { y: 50, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, stagger: 0.2, ease: "power3.out" }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="min-h-max bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-card">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Payment Information
          </h1>
          <p className="text-lg text-slate-400">
            Multiple payment options available for your convenience
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* International Payments Card */}
          <div className="animate-card bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">International Payments</h2>
            <div className="flex space-x-4 mb-4">
              <FaCcVisa className="text-5xl text-blue-400" />
              <FaCcMastercard className="text-5xl text-orange-400" />
            </div>
            <p className="text-slate-400">
              Secure international transactions supported through major credit cards
            </p>
          </div>

          {/* Local Payments Card */}
          <div className="animate-card bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Local Payment Methods</h2>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                EasyPaisa
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                JazzCash
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                NayaPay
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-slate-800 rounded-2xl shadow-lg p-8 animate-card border border-slate-700">
          <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-200">Select Service</h3>
              <p className="text-slate-400 text-sm">Choose your desired subscription service</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-200">Make Payment</h3>
              <p className="text-slate-400 text-sm">Use your preferred payment method</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-400">3</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-200">Get Access</h3>
              <p className="text-slate-400 text-sm">Receive instant access to your subscription</p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="text-center mt-12 animate-card">
          <p className="text-sm text-slate-500">
            All transactions are secured and encrypted. We never store your payment details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
