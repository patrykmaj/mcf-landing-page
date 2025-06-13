'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedElementOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // Whether the animation should only run once
  yOffset?: number; // Vertical offset for the "move up" animation
}

const AnimatedElementOnScroll: React.FC<AnimatedElementOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  yOffset = 20,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden'); // Reset if not triggerOnce
    }
  }, [controls, inView, once]);

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElementOnScroll;
