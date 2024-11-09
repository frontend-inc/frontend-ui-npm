import React from 'react';
import { UseInViewOptions } from 'framer-motion';
type MarginType = UseInViewOptions['margin'];
interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: {
            y: number;
        };
        visible: {
            y: number;
        };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inView?: boolean;
    inViewMargin?: MarginType;
    blur?: string;
}
export default function BlurFade({ children, className, variant, duration, delay, yOffset, inView, inViewMargin, blur, }: BlurFadeProps): React.JSX.Element;
export {};
