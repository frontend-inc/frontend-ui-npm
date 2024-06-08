import React from 'react';
import { DisplayFieldType, TypographyVariantsType } from '../../../../types';
export type FieldElementProps = {
    label?: string;
    value: any;
    color?: string;
    direction?: 'row' | 'column';
    variant?: TypographyVariantsType;
    placeholder?: string;
    enableBorder?: boolean;
    disablePadding?: boolean;
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
};
declare const DisplayField: React.FC<FieldProps>;
export default DisplayField;
