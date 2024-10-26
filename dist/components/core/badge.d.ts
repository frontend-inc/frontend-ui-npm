import React from 'react';
type BadgeVariant = 'standard' | 'dot';
type BadgeColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
interface BadgeProps {
    children: React.ReactNode;
    badgeContent?: React.ReactNode;
    variant?: BadgeVariant;
    color?: BadgeColor;
    max?: number;
    showZero?: boolean;
    invisible?: boolean;
    className?: string;
    badgeClassName?: string;
}
declare const Badge: React.FC<BadgeProps>;
export { Badge };
