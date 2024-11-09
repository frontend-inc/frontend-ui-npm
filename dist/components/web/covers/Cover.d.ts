import React from 'react';
export type CoverProps = {
    label?: string;
    title: string;
    subtitle?: string;
    buttonText?: string;
    image: string;
    height?: number;
    width?: number;
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    path?: string;
    actions?: React.ReactNode;
};
declare const Cover: React.FC<CoverProps>;
export default Cover;
