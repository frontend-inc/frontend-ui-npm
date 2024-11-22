import React from 'react';
import { HeadingProps } from '../../../types';
export type VideoCoverProps = HeadingProps & {
    src: string;
    height?: number;
    path?: string;
    handleClick?: (ev: any) => void;
    alignItems?: 'items-center' | 'items-start' | 'items-end';
    buttonText?: string;
    actions?: React.ReactNode;
    enableOverlay?: boolean;
};
declare const VideoCover: React.FC<VideoCoverProps>;
export default VideoCover;
