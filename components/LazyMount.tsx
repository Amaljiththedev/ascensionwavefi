"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  delay: number;
}

export function ScrollRevealSection({ children, delay }: ScrollRevealSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Trigger animation when section is in view
      },
      {
        rootMargin: '0px 0px -50px 0px',  // Allow section to animate slightly before fully entering the viewport
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    const element = document.querySelector(`#scroll-reveal-section-${delay}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element); // Clean up observer on unmount
    };
  }, [delay]);

  return (
    <motion.section
      id={`scroll-reveal-section-${delay}`} // Use delay to create a unique ID for each section
      className="bg-transparent flex flex-col justify-center items-center mt-16"
      initial={{ opacity: 0, scale: 0.8 }}  // Initial state with smaller size and invisible
      animate={{
        opacity: isVisible ? 1 : 0,  // Fade in when visible
        scale: isVisible ? 1 : 0.8,   // Scale to normal size
      }}
      transition={{
        duration: 0.6, // Longer duration for a smooth transition
        delay: 0.05 * delay, // Sequential delay for staggered animation
        ease: "easeOut",  // Smooth easing effect
      }}
    >
      {children}
    </motion.section>
  );
}
