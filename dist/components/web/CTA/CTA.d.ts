import React from 'react';
import { ButtonType, TypographyVariantsType } from '../../../types';
export type CTAProps = {
    label?: string;
    title: string;
    description: string;
    textVariant?: TypographyVariantsType;
    buttons: ButtonType[];
    direction?: string;
};
declare const CTA: React.FC<CTAProps>;
export default CTA;
