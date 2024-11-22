import React from 'react';
import { HeadingProps } from '../../../types';
export type CoverProps = HeadingProps & {
    buttonText?: string;
    image: string;
    height?: number;
    width?: number;
    alignItems?: 'items-start' | 'items-center' | 'items-end';
    alt?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
    path?: string;
    actions?: React.ReactNode;
};
declare const Cover: React.FC<CoverProps>;
export default Cover;
