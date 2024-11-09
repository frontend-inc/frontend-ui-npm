import React from 'react';
type HeadingProps = {
    label?: string;
    title?: string;
    subtitle?: string;
    textAlign?: 'left' | 'center' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    secondaryAction?: React.ReactNode;
};
declare const Heading: React.FC<HeadingProps>;
export default Heading;
