import React from 'react';
interface TooltipProps {
    children: React.ReactNode;
    title: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    arrow?: boolean;
    className?: string;
    contentClassName?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
