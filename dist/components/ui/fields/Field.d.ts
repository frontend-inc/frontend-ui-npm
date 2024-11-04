import React from 'react';
import { MetafieldType, TypographyVariantsType } from '../../../types';
export type FieldElementProps = {
    label?: string;
    value: any;
    color?: string;
    direction?: 'row' | 'column';
    variant?: TypographyVariantsType;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    placeholder?: string;
    dateFormat?: string;
    className?: string;
};
type FieldProps = {
    field: MetafieldType;
    resource?: any;
    label?: string | null;
    color?: string;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    variant?: TypographyVariantsType;
    placeholder?: string;
    enableBorder?: boolean;
    disablePadding?: boolean;
    dateFormat?: string;
};
declare const Field: React.FC<FieldProps>;
export default Field;
