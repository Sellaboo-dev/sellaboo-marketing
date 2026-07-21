"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMotionPreference } from "./MotionProvider";
import styles from "./motion.module.css";

type StaggerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
};

type StaggerStyle = CSSProperties & {
  "--stagger-delay": string;
  "--stagger-duration": string;
  "--stagger-distance": string;
};

type StaggerChildStyle = CSSProperties & {
  "--stagger-index": number;
};

type StaggerChildProps = {
  style?: CSSProperties;
};

export function Stagger({
  children,
  as: Component = "div",
  className = "",
  delay = 85,
  duration = 700,
  distance = 20,
  threshold = 0.12,
  once = true,
}: StaggerProps) {
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

  const staggerStyle: StaggerStyle = {
    "--stagger-delay": `${delay}ms`,
    "--stagger-duration": `${duration}ms`,
    "--stagger-distance": `${distance}px`,
  };

  const indexedChildren = Children.map(children, (child, index) => {
    if (!isValidElement<StaggerChildProps>(child)) {
      return child;
    }

    const childElement =
      child as ReactElement<StaggerChildProps>;

    const childStyle: StaggerChildStyle = {
      ...childElement.props.style,
      "--stagger-index": index,
    };

    return cloneElement(childElement, {
      style: childStyle,
    });
  });

  return (
    <Component
      ref={elementRef}
      className={[
        styles.stagger,
        isVisible ? styles.staggerVisible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={staggerStyle}
    >
      {indexedChildren}
    </Component>
  );
}
