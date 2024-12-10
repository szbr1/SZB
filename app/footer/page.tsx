"use client";

import { FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
             <Link href="/">  Develop<span className="text-emerald-400 text-sm" >.ts</span></Link>
            </motion.h2>
            <p className="text-slate-400 mb-4">
              Premium subscriptions at unbeatable prices. Quality service guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold mb-4 text-slate-200"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-blue-400 transition-colors"
              >
                <a href="/Terms&Policies">Terms & Policies</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-blue-400 transition-colors"
              >
                <a href="/about">About us</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="hover:text-blue-400 transition-colors"
              >
                <a href="/reviews">Reviews</a>
              </motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold mb-4 text-slate-200"
            >
              Connect With Us
            </motion.h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="https://youtube.com"
                whileHover={{ y: -5 }}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ y: -5 }}
                className="text-slate-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://wa.me/923179393471"
                whileHover={{ y: -5 }}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ y: -5 }}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} Develop.ts. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

