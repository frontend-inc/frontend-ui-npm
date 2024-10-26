import React from 'react';
import { TypographyVariantsType } from '../../../types';
type ExpandableTextProps = {
    text: string;
    variant?: TypographyVariantsType;
    maxChars?: number;
    color?: string;
    className?: string;
};
declare const ExpandableText: React.FC<ExpandableTextProps>;
export default ExpandableText;
