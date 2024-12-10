"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaAward, 
  FaShieldAlt, 
  FaCrown,
  FaUserTie 
} from 'react-icons/fa';
import { SiNetflix, SiOpenai } from 'react-icons/si';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

interface ReviewData {
  id: number;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
}

interface CertificationData {
  id: number;
  name: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
}

const Certifications: React.FC = () => {
  const certifications: CertificationData[] = [
    {
      id: 1,
      name: "Best Streaming Platform",
      issuer: "Digital Innovation Awards",
      year: "2023",
      icon: <FaCrown className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 2,
      name: "Security Excellence",
      issuer: "Cyber Security Standards",
      year: "2023",
      icon: <FaShieldAlt className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 3,
      name: "AI Innovation Award",
      issuer: "Tech Excellence Awards",
      year: "2023",
      icon: <FaAward className="w-8 h-8 text-amber-500" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-32 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Our Achievements & Recognition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center">
                {cert.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">
              {cert.name}
            </h3>
            <p className="text-slate-400 text-center mb-2">{cert.issuer}</p>
            <p className="text-amber-500 text-sm text-center">
              Awarded {cert.year}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Reviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const reviews: ReviewData[] = [
    {
      id: 1,
      name: "Habib ",
      role: "CEO",
      company: "Streaming Giant",
      review: "I’ve been looking for affordable subscriptions, and this is by far the cheapest I’ve found! I got YouTube and Netflix Premium at an unbeatable price. Highly recommend for anyone on a budget!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jolson US",
      role: "Content Creator",
      company: "Digital Studios",
      review: "Great value for the price. I’ve been using this for a few months now, and I haven't faced any issues. The only downside is that sometimes the app lags on my older device.",
      rating: 5,
    },
    {
      id: 3,
      name: "Hamza Rohail",
      role: "Tech Director",
      company: "AI Solutions",
      review: "These subscriptions are hands down the cheapest out there. I signed up for Netflix and YouTube Premium, and the prices are amazing for the value you get. Definitely the best deal!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(
      '.review-card',
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          What Our Users Say
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-20 p-8 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl border border-amber-500/20 backdrop-blur-sm"
      >
        <BiSolidQuoteAltLeft className="text-6xl text-amber-500 mb-6" />
        <p className="text-2xl md:text-3xl text-amber-500 font-light italic mb-8">
        "This is by far the best subscription I’ve signed up for. I purchased YouTube and Netflix Premium through this service, and the variety of content is awesome. The streaming quality is amazing, and I can access it anywhere. The customer service is top-notch. Highly recommend it!"
        </p>
        <div className="flex items-center justify-end">
          <div className="text-right">
            <h3 className="text-white text-xl font-bold">Sam Anderson</h3>
            <p className="text-slate-400">CEO, Tech Innovators</p>
          </div>
          <div className="ml-4 p-2 bg10 rounded-full">
            <FaUserTie className="w-12 h-12 text-amber-500" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="review-card bg-slate-800 p-6 rounded-xl hover:shadow-xl hover:shadow-slate-700/20 transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="flex justify-between items-start mb-4">
              <FaQuoteLeft className="text-2xl text-slate-600" />
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500" />
                ))}
              </div>
            </div>
            <p className="text-slate-300 mb-6">{review.review}</p>
            <div className="flex items-center">
              <div className="p-2 bg-slate-700 rounded-full">
                <FaUserTie className="w-8 h-8 text-amber-500" />
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold">{review.name}</h3>
                <p className="text-slate-400 text-sm">
                
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Certifications />
    </div>
  );
};

export default Reviews;
