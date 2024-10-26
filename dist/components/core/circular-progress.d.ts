import React from 'react';
interface CircularProgressProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    thickness?: number;
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    className?: string;
}
declare const CircularProgress: React.FC<CircularProgressProps>;
export { CircularProgress };
