import React from 'react';
type AvatarProps = {
    alt?: string;
    src?: string;
    variant?: 'circular' | 'rounded';
    label?: string;
    size?: number;
    color?: string;
    className?: string;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
export default function Avatar(props: AvatarProps): React.JSX.Element;
export {};
