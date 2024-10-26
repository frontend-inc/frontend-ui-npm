import React from 'react';
interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
    textAlign?: 'left' | 'center' | 'right';
    className?: string;
    children: React.ReactNode;
}
declare const Typography: React.FC<TypographyProps>;
export { Typography };
