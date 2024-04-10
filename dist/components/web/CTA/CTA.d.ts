import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type CTAProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const CTA: React.FC<CTAProps>;
export default CTA;
