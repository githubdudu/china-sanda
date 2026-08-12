"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { type HomePage } from "@/sanity/sanity.types";

import { Instagram, Youtube } from "./SocialIcons";

function Hero({ heroData }: { heroData: HomePage }) {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570456717698-41ac2f7157bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTk4NDgxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-white mb-4 tracking-wider"
          style={{ 
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: '1.1'
          }}
        >
          SOUTH CENTRAL BOXING CLUB
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="text-[#FFD600] mb-8"
          style={{ 
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            letterSpacing: '2px'
          }}
        >
          Where Champions Are Made, One Round at a Time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <RippleButton onClick={() => scrollToSection('join')} variant="primary">
            Join the Club
          </RippleButton>
          <RippleButton onClick={() => scrollToSection('contact')} variant="secondary">
            Book a Free Trial
          </RippleButton>
        </motion.div>

        <div className="flex gap-6 justify-center items-center">
          <a href="#" className="text-white hover:text-[#FFD600] transition-colors">
            <Instagram />
          </a>
          <a href="#" className="text-white hover:text-[#FFD600] transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L13 9V15L9 12Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-[#FFD600] transition-colors">
            <Youtube />
          </a>
        </div>

        <p className="text-white/80 mt-8">
          Located in the heart of South Central LA
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function RippleButton({ 
  children, 
  onClick, 
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  variant?: "primary" | "secondary";
}) {
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 250);
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden px-8 py-4 ${
        variant === "primary"
          ? "bg-[#C62828] text-white hover:bg-gradient-to-b hover:from-[#C62828] hover:to-[#a01f1f]"
          : "bg-white text-[#111111] hover:bg-[#FFD600]"
      } transition-all shadow-lg`}
      whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.98 }}
      style={{ 
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '1.125rem',
        letterSpacing: '2px'
      }}
    >
      {children}
      {ripple && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: 40 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
      )}
    </motion.button>
  );
}

export default Hero;