"use client";

import React from "react";
import { IconBrandGithub, IconBrandAws } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function GlowingStarsBackgroundCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 items-center justify-center antialiased">
      {/* Card 1: Git Commands */}
      <motion.div
        className="w-full h-24 p-3 rounded-lg relative shadow-md flex flex-col items-center justify-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
          transition: { duration: 0.3 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xs text-center text-gray-600 dark:text-gray-300">
          <code className="block">git init</code>
          <code className="block">git add .</code>
        </div>
      </motion.div>

      {/* Card 2: GitHub */}
      <motion.div
        className="w-full h-24 p-3 rounded-lg relative shadow-md flex flex-col items-center justify-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
          transition: { duration: 0.3 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
          <IconBrandGithub className="h-4 w-4 text-white" />
        </div>
      </motion.div>

      {/* Card 3: AWS */}
      <motion.div
        className="w-full h-24 p-3 rounded-lg relative shadow-md flex flex-col items-center justify-center bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-700"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.7)",
          transition: { duration: 0.3 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
          <IconBrandAws className="h-4 w-4 text-white" />
        </div>
      </motion.div>
    </div>
  );
}


