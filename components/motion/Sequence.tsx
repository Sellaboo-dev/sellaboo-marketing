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

type SequenceProps = {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    "aria-label"?: string;
};

type SequenceStyle = CSSProperties & {
    "--sequence-delay": string;
    "--sequence-duration": string;
};

export function Sequence({
    children,
    as: Component = "div",
    className = "",
    delay = 110,
    duration = 650,
    threshold = 0.15,
    once = true,
    "aria-label": ariaLabel,
}: SequenceProps) {
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

    const sequenceStyle: SequenceStyle = {
        "--sequence-delay": `${delay}ms`,
        "--sequence-duration": `${duration}ms`,
    };

    return (
        <Component
            ref={elementRef}
            aria-label={ariaLabel}
            className={[
                styles.sequence,
                isVisible ? styles.sequenceVisible : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={sequenceStyle}
        >
            {children}
        </Component>
    );
}
