import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type TextProps = {
    title: string;
    description?: string;
    label?: string;
    textAlign?: 'center' | 'left';
    text: string;
    textVariant?: TypographyVariantsType;
    html?: boolean;
};
declare const Text: React.FC<TextProps>;
export default Text;
