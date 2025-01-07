import React, { SVGProps } from 'react';
export interface SafariProps extends SVGProps<SVGSVGElement> {
    url?: string;
    src?: string;
    width?: number;
    height?: number;
}
export default function Safari({ src, url, width, height, ...props }: SafariProps): React.JSX.Element;
