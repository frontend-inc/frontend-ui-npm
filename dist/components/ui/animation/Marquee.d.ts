import React from 'react';
interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    speed?: number;
    [key: string]: any;
}
export default function Marquee({ className, reverse, children, vertical, repeat, speed, // Default speed in seconds
...props }: MarqueeProps): React.JSX.Element;
export {};
