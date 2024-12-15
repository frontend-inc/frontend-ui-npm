import React from 'react';
interface DotPatternProps {
    width?: any;
    height?: any;
    x?: any;
    y?: any;
    cx?: any;
    cy?: any;
    cr?: any;
    className?: string;
    [key: string]: any;
}
export declare function DotPattern({ width, height, x, y, cx, cy, cr, className, ...props }: DotPatternProps): React.JSX.Element;
export default DotPattern;
