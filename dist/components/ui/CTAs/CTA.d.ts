import React from 'react';
import { TypographyVariantsType } from '../../../types';
type CallToActionProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const CTA: React.FC<CallToActionProps>;
export default CTA;
