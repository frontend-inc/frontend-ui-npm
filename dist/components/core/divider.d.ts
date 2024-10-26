import React from 'react';
interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'fullWidth' | 'inset' | 'middle';
    className?: string;
    children?: React.ReactNode;
}
declare const Divider: React.FC<DividerProps>;
export { Divider };
