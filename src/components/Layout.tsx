import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* Main Content */}
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
