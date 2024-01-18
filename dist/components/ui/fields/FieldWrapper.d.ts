import React from 'react';
import { TypographyVariants } from 'types';
type FieldWrapperProps = {
    variant?: TypographyVariants;
    flexDirection?: 'row' | 'column';
    label?: string;
    color?: string;
    helperText?: string;
    children?: React.ReactNode;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
