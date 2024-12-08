"use client";
import { useState, useEffect, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiNetflix } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";


const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  ///////
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [selectedMonths, setSelectedMonths] = useState(1);
  
  const [price, setPrice] = useState(0);
///////////////////////
/////////////////
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [showPopup]);
////////////
//////////\
///////////
  const products = [
    {
      id: 1,
      name: "Netflix Premium",
      icon: <TbBrandDisney className="text-5xl text-purple-500" />,
      description: "Watch unlimited movies and TV shows in Ultra HD",
      basePrice: 1000,
    },
    {
      id: 2,
      name: "Spotify Premium",
      icon: <FaGoogleWallet className="text-5xl text-green-500" />,
      description: "Ad-free music streaming with offline downloads",
      basePrice: 500,
    },
  ];
/////////////
////////////
///////////
  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },  // Removed extra parenthesis
    exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };
  

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return products.length - 1;
      if (nextIndex >= products.length) return 0;
      return nextIndex;
    });
  };
  
/////////////////////////////////
////////////////////////////////
////////////
  const subscriptionOptions = [1, 3, 6, 12];

  const getCurrencySymbol = (country: string) => {
    switch (country) {
      case "United States":
        return "$";
      case "United Kingdom":
        return "£";
      default:
        return "PKR";
    }
  };

  const calculatePrice = () => {
    const basePrice = products[currentIndex].basePrice;
    const countryMultiplier =
      selectedCountry === "United Kingdom"
        ? 1.5
        : selectedCountry === "United States"
        ? 2
        : 1;

    const monthlyDiscount =
      selectedMonths >= 12
        ? 0.8
        : selectedMonths >= 6
        ? 0.85
        : selectedMonths >= 3
        ? 0.9
        : 1;

    setPrice(basePrice * selectedMonths * countryMultiplier * monthlyDiscount);
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedCountry, selectedMonths, currentIndex]);

  const handlePurchase = () => {
    const product = products[currentIndex];
    const currency = getCurrencySymbol(selectedCountry);
    const message = `
*Product Details*%0A
-------------------------%0A
Product: *${product.name}*%0A
Duration: *${selectedMonths} month(s)*%0A
Country: *${selectedCountry}*%0A
Price: *${currency} ${price}*%0A
-------------------------%0A
    `;
    window.open(`https://wa.me/+923179393471?text=${message}`, "_blank");
  };
///////////
//////////
/////////
////////
///////
  return (
    <div className="bg-slate-900 h-auto py-16 px-4">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-white mb-8">
          Premium Subscriptions
        </h2>

        <div className="relative h-[350px] md:h-[350px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_event, info) => {
                if (info.offset.x > 50) {
                  paginate(-1);
                } else if (info.offset.x < -50) {
                  paginate(1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-slate-800 rounded-xl shadow-xl p-6 mx-auto max-w-3xl max-h-96 border border-slate-700 flex flex-col items-center justify-center">
                {products[currentIndex].icon}
                <h3 className="font-bold text-xl text-slate-100 mt-4">
                  {products[currentIndex].name}
                </h3>
                <p className="text-gray-400 text-center mt-2">
                  {products[currentIndex].description}
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  onClick={() => setShowPopup(true)}
                >
                  Subscribe Now
                </button>
                <div className="block md:hidden">
  <br />
  <br />
</div>
<div className="block md:hidden">
  <br />
  <br />
</div>


              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 text-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">
                {products[currentIndex].name}
              </h3>

              <div className="mb-4">
                <label className="block font-medium mb-2">Select Country</label>
                <div className="space-y-2">
                  {["Pakistan", "United Kingdom", "United States"].map(
                    (country) => (
                      <label key={country} className="flex items-center">
                        <input
                          type="radio"
                          name="country"
                          value={country}
                          checked={selectedCountry === country}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="mr-2 bg-gray-800"
                        />
                        {country}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Subscription Duration
                </label>
                <select
                  value={selectedMonths}
                  onChange={(e) => setSelectedMonths(Number(e.target.value))}
                  className="w-full p-2 rounded bg-slate-500"
                >
                  {subscriptionOptions.map((months) => (
                    <option key={months} value={months}>
                      {months} month{months > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-xl font-bold mb-4">
                Total: {getCurrencySymbol(selectedCountry)} {price}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePurchase}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Confirm Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
