import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundBeamsWithCollision } from './collision';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Parallax transformations for different elements
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const beamAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: 'easeInOut' },
  };
  const funnyAnimation = {
    hover: {
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop' as 'loop',  // Correcting this to 'loop'
      },
    },
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden mt-36 pointer-events-none inset-0 z-0 grid -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <motion.div {...beamAnimation}>
        <BackgroundBeamsWithCollision children={undefined} />
      </motion.div>

      <motion.div
        className="relative h-full w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ y: parallaxY, scale: parallaxScale }}
      >
        <motion.div
          className="absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-0 animate-gradient"
          style={{
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.4)',
            '--height': '5px',
            '--width': '1px',
            '--fade-stop': '90%',
            '--offset': '150px',
            '--color-dark': 'rgba(255, 255, 255, 0.5)',
          } as React.CSSProperties} // Explicitly cast to `React.CSSProperties`
          whileHover="hover"
          variants={funnyAnimation}
        ></motion.div>
      </motion.div>

      <motion.div
        className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ y: parallaxY }}
      >
        <motion.div
          className="absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] left-0 animate-gradient"
          style={{
            '--background': '#ffffff',
            '--color': 'rgba(0, 0, 0, 0.4)',
            '--height': '5px',
            '--width': '1px',
            '--fade-stop': '90%',
            '--offset': '150px',
            '--color-dark': 'rgba(255, 255, 255, 0.5)',
          } as React.CSSProperties} // Explicitly cast to `React.CSSProperties`
          whileHover="hover"
          variants={funnyAnimation}
        ></motion.div>
      </motion.div>

      <motion.div {...beamAnimation}>
        <BackgroundBeamsWithCollision children={undefined} />
      </motion.div>
    </div>
  );
};

export default Hero;
