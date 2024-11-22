import React from 'react';
export interface ResponsiveImageProps {
    src?: string | null;
    alt?: string;
    width?: number;
    height?: number;
    objectFit?: 'cover' | 'contain';
    aspectRatio?: number;
    enableOverlay?: boolean;
    enableGradient?: boolean;
    disableBorderRadius?: boolean;
    disableZoom?: boolean;
    className?: string;
    handleClick?: () => void;
    label?: string;
}
export default function ResponsiveImage(props: ResponsiveImageProps): React.JSX.Element;
