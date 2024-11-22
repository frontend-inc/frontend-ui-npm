import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type TextProps = {
    title?: string;
    text: string;
    textAlign?: 'left' | 'center' | 'right';
    variant?: TypographyVariantsType;
};
declare const Text: React.FC<TextProps>;
export default Text;
