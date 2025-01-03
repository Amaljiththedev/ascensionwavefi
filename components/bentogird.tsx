"use client";

import { motion } from "framer-motion"; // Updated import for Framer Motion
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconBrandDocker,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { WorldMapDemo } from "./Forbento";
import { GlowingStarsBackgroundCards } from "./card";
import {Globe} from "./g"

// Skeleton Component
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

// BentoGrid Items
const items = [
  {
    title: "Application Deployment and Scalability",
    description: "Optimize and scale applications for seamless performance and growth.",
    header: (
      <div className="flex justify-center items-center h-full">
        <GlowingStarsBackgroundCards />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dockerized Solutions",
    description: "Leverage containerization for scalable, efficient, and portable applications.",
    header: (
      <div className="flex justify-center items-center h-full">
        <IconBrandDocker className="text-blue-500 w-12 h-12" />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconBrandDocker className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hosting over the edge",
    description: "With our edge network, we host your website by going into each city by ourselves.",
    header: (
      <div className="flex-col relative bg-transparent flex justify-center items-center">
  <Globe className="absolute -right-10 md:-right-10 -top-80 md:-top-80 max-w-full aspect-square" />
</div>


    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our intuitive workflow",
    description:
      "With our intuitive workflow, you can easily track your development journey with your team, streamlining collaboration and progress without complex steps.",
    header: (
      <div className="flex justify-center items-center">
        <img
          src="/assets/5.png"
          alt="Intuitive Workflow"
          className="object-cover w-full h-48 rounded-xl"
        />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

// Animation Variants
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

// BentoGridSecondDemo Component with Animations
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className={`rounded-xl border border-neutral-200 shadow-lg overflow-hidden ${item.className}`}
        >
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className="h-full"
            icon={item.icon}
          />
        </motion.div>
      ))}
    </BentoGrid>
  );
}
