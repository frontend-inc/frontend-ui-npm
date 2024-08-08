import React from 'react';
import { TypographyVariantsType } from '../../../types';
type HeadingProps = {
    buttons?: React.ReactNode;
    label?: string;
    title?: string;
    description?: string;
    textAlign?: 'left' | 'center';
    textVariant?: TypographyVariantsType;
    enableBorder?: boolean;
};
declare const Heading: React.FC<HeadingProps>;
export default Heading;
