import React from 'react';
type AvatarProps = {
    src?: string;
    variant?: 'circular' | 'rounded';
    label?: string;
    size?: number;
    color?: string;
    className?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
export default function Avatar({ src, label, variant, size, className, }: AvatarProps): React.JSX.Element;
export {};
