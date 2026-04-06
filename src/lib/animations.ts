import { Variants } from "framer-motion";

// ─── Reusable Animation Variants ───────────────────────────────────────────

/**
 * Fade in with upward movement
 * Use for revealing content on scroll
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier (fast in, slow out)
    },
  },
};

/**
 * Fade in without movement
 * Use for subtle reveals
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Scale fade in
 * Use for cards and interactive elements
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Slide in from left
 * Use for sequential reveals
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Slide in from right
 * Use for sequential reveals
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ─── Container Variants ────────────────────────────────────────────────────

/**
 * Stagger children animation container
 * Use to create sequential reveals of child elements
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Stagger with custom delay
 */
export const staggerContainerWithDelay = (delay: number = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: delay,
    },
  },
});

/**
 * Stagger for fast reveals
 */
export const staggerContainerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

// ─── Viewport Configuration ────────────────────────────────────────────────

/**
 * Standard viewport trigger configuration
 * Animates once when element enters viewport with 100px margin
 */
export const viewportConfig = {
  once: true,
  amount: 0.2 as const,
  margin: "-100px",
};

/**
 * Early viewport trigger
 * Animates sooner as element approaches viewport
 */
export const viewportEarly = {
  once: true,
  amount: 0.1 as const,
  margin: "-150px",
};

/**
 * Late viewport trigger
 * Animates only when element is fully in viewport
 */
export const viewportLate = {
  once: true,
  amount: 0.3 as const,
  margin: "-50px",
};

// ─── Hover Interactions ────────────────────────────────────────────────────

/**
 * Premium hover scale effect
 * Subtle lift and scale for interactive elements
 */
export const hoverScale = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
};

/**
 * Hover glow effect
 * Use for buttons and cards
 */
export const hoverGlow = {
  boxShadow: "0 0 0 1px rgba(255,255,255,0.2), 0 8px 32px rgba(255,255,255,0.15)",
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const hoverBorderGlow = {
  borderColor: "rgba(255,255,255,0.2)",
  transition: {
    duration: 0.25,
    ease: [0.22, 1, 0.36, 1],
  },
};

// ─── Special Effects ───────────────────────────────────────────────────────

/**
 * Floating animation for ambient elements
 * Subtle vertical movement for decorative elements
 */
export const float = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Gentle pulse for glow effects
 */
export const gentlePulse = {
  opacity: [0.4, 0.7, 0.4],
  scale: [1, 1.05, 1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Rotation for decorative elements
 */
export const slowRotate = {
  rotate: [0, 360],
  transition: {
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  },
};

/**
 * Counter-rotation
 */
export const slowCounterRotate = {
  rotate: [0, -360],
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  },
};

// ─── Easing Presets ────────────────────────────────────────────────────────

/**
 * Premium smooth easing (fast in, slow out)
 * Use for most animations
 */
export const smoothEase = [0.22, 1, 0.36, 1];

/**
 * Sharp easing for quick interactions
 */
export const sharpEase = [0.4, 0, 0.2, 1];

/**
 * Gentle easing for ambient motion
 */
export const gentleEase = "easeInOut";

// ─── Animation Durations ───────────────────────────────────────────────────

export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  ambient: 4,
  glacial: 8,
};

// ─── Transition Configuration ───────────────────────────────────────────────

/**
 * Standard transition config
 */
export const transitionConfig = {
  duration: duration.normal,
  ease: smoothEase,
};

/**
 * Quick interaction transition
 */
export const transitionFast = {
  duration: duration.fast,
  ease: smoothEase,
};

/**
 * Ambient/background transition
 */
export const transitionAmbient = {
  duration: duration.ambient,
  ease: gentleEase,
  repeat: Infinity,
};

// ─── Export All ────────────────────────────────────────────────────────────

export default {
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerContainerWithDelay,
  staggerContainerFast,
  viewportConfig,
  viewportEarly,
  viewportLate,
  hoverScale,
  hoverGlow,
  hoverBorderGlow,
  float,
  gentlePulse,
  slowRotate,
  slowCounterRotate,
  smoothEase,
  sharpEase,
  gentleEase,
  duration,
  transitionConfig,
  transitionFast,
  transitionAmbient,
};