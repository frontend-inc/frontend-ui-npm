import React from 'react';
interface CollapseProps {
    in: boolean;
    children: React.ReactNode;
    className?: string;
    timeout?: number;
}
export declare const Collapse: React.FC<CollapseProps>;
export {};
