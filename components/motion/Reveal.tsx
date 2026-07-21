"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMotionPreference } from "./MotionProvider";
import styles from "./motion.module.css";

type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
};

type MotionStyle = CSSProperties & {
  "--motion-delay": string;
  "--motion-duration": string;
  "--motion-distance": string;
};

const variantClasses: Record<RevealVariant, string> = {
  "fade-up": styles.fadeUp,
  "fade-down": styles.fadeDown,
  "fade-left": styles.fadeLeft,
  "fade-right": styles.fadeRight,
  fade: styles.fade,
  scale: styles.scale,
};

export function Reveal({
  children,
  as: Component = "div",
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 700,
  distance = 20,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { prefersReducedMotion } = useMotionPreference();

  useEffect(() => {
    const element = elementRef.current;

    if (!element || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, prefersReducedMotion, threshold]);

  const motionStyle: MotionStyle = {
    "--motion-delay": `${delay}ms`,
    "--motion-duration": `${duration}ms`,
    "--motion-distance": `${distance}px`,
  };

  return (
    <Component
      ref={elementRef}
      className={[
        styles.reveal,
        variantClasses[variant],
        isVisible ? styles.revealVisible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={motionStyle}
    >
      {children}
    </Component>
  );
}
