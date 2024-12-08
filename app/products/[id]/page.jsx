"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaYoutube, FaAmazon, FaSpotify  } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { HiQuestionMarkCircle } from "react-icons/hi";
import SearchBar from "../contacts/search";

// Product Interface
interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  icon: JSX.Element;
  description: string;
  prices: {
    PK: { amount: number; currency: string };
    UK: { amount: number; currency: string };
    US: { amount: number; currency: string };
  };
}

// Modal Props Interface
interface ModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

// PurchaseModal Component
const PurchaseModal: React.FC<ModalProps> = ({ isOpen, product, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handlePurchase = () => {
    if (product && selectedCountry) {
      const priceDetails = product.prices[selectedCountry as keyof typeof product.prices];
      const whatsappUrl = `https://wa.me/923017164110?text=Hi! I want to purchase ${product.name} for ${priceDetails.currency}${priceDetails.amount} in ${selectedCountry}.`;
      window.open(whatsappUrl, "_blank");
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg shadow-lg p-6 max-w-md w-full text-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <FiX className="text-lg text-slate-400" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select Country:</h3>
          {Object.entries(product.prices).map(([region]) => (
            <label key={region} className="block mb-2">
              <input
                type="radio"
                name="country"
                value={region}
                onChange={handleCountryChange}
                className="mr-2"
              />
              {region}
            </label>
          ))}
        </div>
        {selectedCountry && (
          <div className="mb-4">
            <p className="text-lg">
              Price:{" "}
              {product.prices[selectedCountry as keyof typeof product.prices].currency}{" "}
              {product.prices[selectedCountry as keyof typeof product.prices].amount}
            </p>
          </div>
        )}
        <button
          onClick={handlePurchase}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
            text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          disabled={!selectedCountry}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

// HomePage Component
const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "YouTube Premium",
      originalPrice: 14,
      discountedPrice: 4,
      icon: <FaYoutube className="text-5xl text-red-600" />,
      description: "Ad-free streaming, background play, and downloads",
      prices: {
        PK: { amount: 1200, currency: "PKR" },
        UK: { amount: 4, currency: "£" },
        US: { amount: 5.5, currency: "$" },
      },
    },
    {
      id: 2,
      name: "Amazon Prime",
      originalPrice: 8,
      discountedPrice: 3,
      icon: <FaAmazon className="text-5xl text-blue-500" />,
      description: "Stream your favorite shows and movies",
      prices: {
        PK: { amount: 800, currency: "PKR" },
        UK: { amount: 3, currency: "£" },
        US: { amount: 4, currency: "$" },
      },
    },
    {
      id: 2,
      name: "Netflix",
      originalPrice: 14,
      discountedPrice: 3,
      icon: <SiNetflix className="text-5xl text-red-700" />,
      description: "Stream your favorite shows and movies",
      prices: {
        PK: { amount: 600, currency: "PKR" },
        UK: { amount: 3, currency: "£" },
        US: { amount: 4, currency: "$" },
      },
    },
    {
      id: 1,
      name: "YouTube Premium",
      originalPrice: 14,
      discountedPrice: 4,
      icon: <FaYoutube className="text-5xl text-red-600" />,
      description: "Ad-free streaming, background play, and downloads",
      prices: {
        PK: { amount: 1200, currency: "PKR" },
        UK: { amount: 4, currency: "£" },
        US: { amount: 5.5, currency: "$" },
      },
    },
    {
      id: 2,
      name: "Amazon Prime",
      originalPrice: 8,
      discountedPrice: 3,
      icon: <FaAmazon className="text-5xl text-blue-500" />,
      description: "Stream your favorite shows and movies",
      prices: {
        PK: { amount: 800, currency: "PKR" },
        UK: { amount: 3, currency: "£" },
        US: { amount: 4, currency: "$" },
      },
    },
    {
      id: 2,
      name: "Spotify Gold",
      originalPrice: 14,
      discountedPrice: 3,
      icon: <FaSpotify className="text-5xl text-green-600" />,
      description: "Stream your favorite shows and movies",
      prices: {
        PK: { amount: 600, currency: "PKR" },
        UK: { amount: 3, currency: "£" },
        US: { amount: 4, currency: "$" },
      },
    },
  ];

  useEffect(() => {
    gsap.from(".product-card", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  const handlePurchaseClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 mt-4">
      <div className="pt-10 pb-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Premium Subscriptions
          <span className="block mt-2">Unbeatable Prices</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto">
          Access premium streaming services at a fraction of the cost
        </p>

      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card h-full flex flex-col bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-center items-center h-16 mb-4">
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">{product.name}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-grow">{product.description}</p>
                <button
                  onClick={() => handlePurchaseClick(product)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                    text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Purchase Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-slate-800 p-3 rounded-lg shadow-lg">
        <HiQuestionMarkCircle className="text-2xl text-blue-500" />
        <a
          href="/how-to-order"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:underline"
        >
          How to Order?
        </a>
      </div>
    </div>
  );
};

export default HomePage;
