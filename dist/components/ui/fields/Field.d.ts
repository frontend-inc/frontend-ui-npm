import React from 'react';
import { DisplayFieldType, TypographyVariantsType } from '../../../types';
export type FieldElementProps = {
    label?: string;
    value: any;
    color?: string;
    direction?: 'row' | 'column';
    variant?: TypographyVariantsType;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    placeholder?: string;
    enableBorder?: boolean;
    disablePadding?: boolean;
    dateFormat?: string;
};
type FieldProps = {
    label?: string;
    color?: string;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    variant?: TypographyVariantsType;
    placeholder?: string;
    enableBorder?: boolean;
    disablePadding?: boolean;
    field: DisplayFieldType;
    resource?: any;
    dateFormat?: string;
};
declare const Field: React.FC<FieldProps>;
export default Field;
