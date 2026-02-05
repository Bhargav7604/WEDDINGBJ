import React from "react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919155536665"; 
   const message = "Congratulations to Bhargav & Jagadeeswari on your we Wishing you both eternal love and happiness.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
      >
        <SiWhatsapp className="w-6 h-6" />
      </motion.button>
    </>
  );
};

export default FloatingActions;