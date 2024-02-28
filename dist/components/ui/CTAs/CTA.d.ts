import React from 'react';
import { TypographyVariants } from '../../../types';
type CallToActionProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariants;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const CTA: React.FC<CallToActionProps>;
export default CTA;
