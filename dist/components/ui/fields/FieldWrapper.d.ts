import React from 'react';
import { TypographyVariantsType } from '../../../types';
type FieldWrapperProps = {
    variant?: TypographyVariantsType;
    flexDirection?: 'row' | 'column';
    label?: string;
    color?: string;
    helperText?: string;
    children?: React.ReactNode;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
