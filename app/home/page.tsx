"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaAmazon, FaSpotify } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FiX, FiSearch, FiLoader } from "react-icons/fi";

// Product Interface
interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  icon: JSX.Element;
  description: string;
  prices: {
    PK: { [duration: string]: any; currency: string };
    UK: { [duration: string]: any; currency: string };
    US: { [duration: string]: any; currency: string };
  };
}

// Modal Props Interface
interface ModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

const HowToOrderModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            Close
          </button>
          <h2 className="text-2xl font-bold mb-4">How to Order</h2>
          <p className="mb-4">
            To make an order is very simple. Just click on the product you like to buy, select your country and duration, and then click on "Purchase". You will be redirected to WhatsApp with your order details, and our team will guide you further on the best options for you.
          </p>
          <p>Happy shopping!</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PurchaseModal: React.FC<ModalProps> = ({ isOpen, product, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDuration(event.target.value);
  };

  const handlePurchase = () => {
    if (product && selectedCountry && selectedDuration) {
      const price = product.prices[selectedCountry as keyof typeof product.prices][selectedDuration];
      const currency = product.prices[selectedCountry as keyof typeof product.prices].currency;
      const whatsappUrl = `https://wa.me/923017164110?text=Hi! I want to purchase ${product.name} for ${currency}${price} in ${selectedCountry} for ${selectedDuration} duration.`;
      window.open(whatsappUrl, "_blank");
    }
  };
  

  if (!isOpen || !product) return null;

  return (
    ///This page is for //
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg shadow-lg p-6 m-2 max-w-md w-full text-slate-200 relative">
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

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select Duration:</h3>
          {["1 Month", "3 Months", "6 Months", "12 Months"].map((duration) => (
            <label key={duration} className="block mb-2">
              <input
                type="radio"
                name="duration"
                value={duration}
                onChange={handleDurationChange}
                className="mr-2"
              />
              {duration}
            </label>
          ))}
        </div>

        {selectedCountry && selectedDuration && (
  <div className="mb-4">
    <p className="text-lg">
      <div className="flex justify-between">
        <div>Price: </div>
        <div>
          {product.prices[selectedCountry as keyof typeof product.prices].currency}
          {product.prices[selectedCountry as keyof typeof product.prices][selectedDuration]}
        </div>
      </div>
    </p>
  </div>
)}

        <button
          onClick={handlePurchase}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          disabled={!selectedCountry || !selectedDuration}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  // ... other states
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHowToOrderModalOpen, setIsHowToOrderModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);


  const products: Product[] = [
    {
      id: 1,
      name: "YouTube Premium",
      originalPrice: 14,
      discountedPrice: 4,
      icon: <FaYoutube className="text-5xl text-red-600" />,
      description: "Ad-free streaming, background play, and downloads",
      prices: {
        PK: { "1 Month": 1200, "3 Months": 3300, "6 Months": 6000, "12 Months": 12000, currency: "PKR" },
        UK: { "1 Month": 4, "3 Months": 11, "6 Months": 20, "12 Months": 38, currency: "£" },
        US: { "1 Month": 5.5, "3 Months": 15, "6 Months": 27, "12 Months": 52, currency: "$" },
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
        PK: { "1 Month": 800, "3 Months": 2200, "6 Months": 4000, "12 Months": 8000, currency: "PKR" },
        UK: { "1 Month": 3, "3 Months": 8, "6 Months": 15, "12 Months": 30, currency: "£" },
        US: { "1 Month": 4, "3 Months": 11, "6 Months": 20, "12 Months": 38, currency: "$" },
      },
    },
    {
      id: 3,
      name: "Spotify Gold",
      originalPrice: 14,
      discountedPrice: 3,
      icon: <FaSpotify className="text-5xl text-green-600" />,
      description: "Stream your favorite music",
      prices: {
        PK: { "1 Month": 600, "3 Months": 1600, "6 Months": 3000, "12 Months": 6000, currency: "PKR" },
        UK: { "1 Month": 3, "3 Months": 8, "6 Months": 15, "12 Months": 30, currency: "£" },
        US: { "1 Month": 4, "3 Months": 11, "6 Months": 20, "12 Months": 38, currency: "$" },
      },
    },
    {
      id: 4,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 5,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 6,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 7,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 8,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 9,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },
    {
      id: 10,
      name: "Netflix",
      originalPrice: 20,
      discountedPrice: 7,
      icon: <SiNetflix className="text-5xl text-red-600" />,
      description: "Stream your favorite movies and shows",
      prices: {
        PK: { "1 Month": "1000-/ PKR ", "3 Months": "2800-/ PKR", "6 Months": "5200-/ PKR", "12 Months": 10000, currency: "PKR" },
        UK: { "1 Month": "4$", "3 Months": "£10", "6 Months": 30, "12 Months": 55, currency: "£" },
        US: { "1 Month": 8, "3 Months": 22, "6 Months": 40, "12 Months": 80, currency: "$" },
      },
    },

  ];

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
    );
  }, []);

  const handleSearch = () => {
    setLoading(true);
    // Blur/deselect the search input
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase().trim();
    const productName = product.name.toLowerCase();
    if (productName === searchTerm) {
      return true;
    }
    
    // Then partial matches if no exact match
    if (searchTerm.length > 0) {
      return productName.startsWith(searchTerm);
    }
    
    // Show all products if search is empty
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 mt-4">
      <div className="pt-10 pb-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Premium Subscriptions
          <span className="block mt-2">Unbeatable Prices</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto">
          Access premium streaming services at a fraction of the cost
        </p>
        <button
          onClick={() => setIsHowToOrderModalOpen(true)}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          How to Order
        </button>
        
<div className="mt-4 relative">
<input
  type="text"
  className="w-full p-3 pl-12 pr-12 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Search Products..."
  value={searchQuery}
  onChange={(e) => {
    setSearchQuery(e.target.value);
    setVisibleProducts(8);
  }}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>
  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
  {loading && (
    <FiLoader className="absolute right-12 text-gray-400 animate-spin" />
  )}
  {searchQuery && (
    <button
      onClick={() => {
        setSearchQuery("");
        setVisibleProducts(8);
      }}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
    >
      <FiX />
    </button>
  )}
</div>


        
      </div>

   

<div className="max-w-7xl mx-auto px-4 pb-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {filteredProducts.length > 0 ? (
      filteredProducts
        .slice(0, visibleProducts)
        .map((product) => (
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
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true); // Open the purchase modal
                    }}
                    className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600  font-semibold py-2 px-4  transition-all duration-300"
                  >
                    Purchase Now
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-white text-xl">No products found matching your search</p>
          )}
        </div>
         {/* See More Button */}
  {filteredProducts.length > visibleProducts && (
    <div className="text-center mt-8">
      <button
        onClick={() => setVisibleProducts(prev => prev + 8)}
        className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold py-2 px-6 transition-all duration-300"
      >
        See More
      </button>
    </div>
  )}
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
      <HowToOrderModal
        isOpen={isHowToOrderModalOpen}
        onClose={() => setIsHowToOrderModalOpen(false)}
        product={null}
      />
    </div>
  );
};

export default HomePage;
