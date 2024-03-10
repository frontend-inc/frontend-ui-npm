import React from 'react';
import { TypographyVariantsType } from '../../../types';
type FieldTextProps = {
    value?: any;
    label?: string;
    placeholder?: string;
    variant?: TypographyVariantsType;
    color?: string;
    rest?: any;
};
declare const FieldText: React.FC<FieldTextProps>;
export default FieldText;
