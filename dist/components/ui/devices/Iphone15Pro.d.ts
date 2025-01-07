import React, { SVGProps } from 'react';
export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    src?: string;
}
export default function Iphone15Pro({ width, height, src, ...props }: Iphone15ProProps): React.JSX.Element;
