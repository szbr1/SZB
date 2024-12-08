"use client"
import { motion, AnimatePresence } from 'framer-motion';


import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ReviewsPage = () => {
  const titleRef = useRef(null);
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      isGolden: true,
      rating: 5,
      position: "CEO, Tech Innovations",
      comment: "Absolutely life-changing subscription! The best investment I've made this year. The customer service is outstanding and the features are amazing.",
      avatar: "/avatars/sarah.jpg",
      date: "December 2023"
    },
    {
      id: 2,
      name: "Mike Peters",
      rating: 4,
      position: "Senior Developer",
      comment: "Really impressed with the quality. Would definitely recommend to others!",
      avatar: "/avatars/mike.jpg",
      date: "November 2023"
    },
    // Add more reviews here
  ];

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1.5,
      y: -100,
      opacity: 0,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          ref={titleRef}
          className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 mb-16"
        >
          Customer Testimonials
        </motion.h1>

        {/* Golden Review */}
        <AnimatePresence>
          {reviews.filter(review => review.isGolden).map(goldenReview => (
            <motion.div
              key={goldenReview.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-20"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                <FaQuoteLeft className="absolute -top-6 left-8 text-4xl text-yellow-600" />
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-600 shadow-xl">
                    <img src={goldenReview.avatar} alt={goldenReview.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-yellow-900">{goldenReview.name}</h3>
                      <MdVerified className="text-yellow-600 text-xl" />
                    </div>
                    <p className="text-yellow-800">{goldenReview.position}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(goldenReview.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-600" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-yellow-900 italic text-xl leading-relaxed">{goldenReview.comment}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Regular Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.filter(review => !review.isGolden).map((review, index) => (
            <motion.div
              key={review.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-purple-300 text-sm">{review.position}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-sm text-purple-300">{review.date}</span>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
