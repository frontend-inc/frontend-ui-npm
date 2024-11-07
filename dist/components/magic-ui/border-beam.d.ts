import React from "react";
interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}
export declare const BorderBeam: ({ className, size, duration, anchor, borderWidth, colorFrom, colorTo, delay, }: BorderBeamProps) => React.JSX.Element;
export {};
