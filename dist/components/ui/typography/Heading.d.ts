import React from 'react';
type HeadingProps = {
    text: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | undefined;
    color?: string;
    description?: string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
};
declare const Heading: React.FC<HeadingProps>;
export default Heading;
