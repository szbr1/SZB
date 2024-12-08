// app/components/SearchBar.jsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation'; // Add this import

const products = [
  { id: 1, name: 'Netflix Premium', price: '$14.99', description: 'Unlimited streaming', slug: 'netflix-premium' },
  { id: 2, name: 'Disney Plus', price: '$9.99', description: 'Family entertainment', slug: 'disney-plus' },
  { id: 3, name: 'HBO Max', price: '$12.99', description: 'Premium content', slug: 'hbo-max' },
];

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(products, {
    keys: ['name'],
    threshold: 0.4,
    includeScore: true
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const results = fuse.search(value);
      setSearchResults(results.map(result => result.item));
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (product) => {
    setSearchTerm('');
    setSearchResults([]);
    router.push(`/products/${product.slug}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mt-8">
      <div className="relative">
        <motion.input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products (e.g., Netflix, Disney+)..."
          className="w-full px-6 py-4 text-lg rounded-xl bg-gradient-to-r from-slate-800/50 to-blue-900/50 
                     border-2 border-blue-500/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                     text-slate-200 placeholder-slate-400 transition-all duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute w-full mt-2 py-2 bg-gradient-to-br from-slate-800/95 to-blue-900/95 
                         rounded-xl backdrop-blur-sm shadow-xl z-50 border border-blue-500/20"
            >
              {searchResults.map((product) => (
                <motion.div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  className="px-6 py-3 cursor-pointer hover:bg-blue-500/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-200">{product.name}</h3>
                  <p className="text-sm text-slate-400">{product.price} - {product.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
