import React from 'react';
export type StackProps = {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
    children: React.ReactNode;
    size?: '1/2' | '1/3' | '1/4' | '2/3' | '3/4' | 'full';
    className?: string;
};
declare const Stack: React.FC<StackProps>;
export default Stack;
