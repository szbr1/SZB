// pages/terms.tsx
"use client";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mt-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 rounded-lg shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          {/* Satisfaction Guarantee Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Customer Satisfaction Guarantee
            </h2>
            <div className="text-slate-300 space-y-3">
              <p>• 100% Money-Back Guarantee within 24 hours of purchase if service is not working</p>
              <p>• Instant account replacement for any technical issues within first 7 days</p>
              <p>• 24/7 Customer support via WhatsApp</p>
              <p>• Free guidance and setup support</p>
            </div>
          </section>

          {/* Service Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Service Terms
            </h2>
            <div className="text-slate-300 space-y-3">
              <p>• All subscriptions are provided on an as-is basis</p>
              <p>• Account sharing is not permitted unless specified</p>
              <p>• Subscription duration starts from the day of account delivery</p>
              <p>• We reserve the right to modify service terms with prior notice</p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Privacy Policy
            </h2>
            <div className="text-slate-300 space-y-3">
              <p>• We collect only essential information needed for order processing</p>
              <p>• Your contact information is used solely for order communication</p>
              <p>• We never share your personal information with third parties</p>
              <p>• Payment information is processed through secure channels</p>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Refund Policy
            </h2>
            <div className="text-slate-300 space-y-3">
              <p>• Full refund available within 24 hours if service is non-functional</p>
              <p>• Refund requests must be submitted via WhatsApp support</p>
              <p>• Refund processing time: 2-3 business days</p>
              <p>• Refunds are processed through original payment method</p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
              Contact Us
            </h2>
            <div className="text-slate-300 space-y-3">
              <p>For any queries or support:</p>
              <p>• WhatsApp: +92 301 7164110</p>
              <p>• Support Hours: 24/7</p>
              <p>• Response Time: Within 1 hour</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
