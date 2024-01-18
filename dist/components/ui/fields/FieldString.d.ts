import React from 'react';
import { TypographyVariants } from 'types';
type FieldStringProps = {
    value: string;
    variant?: TypographyVariants;
    label?: string;
    color?: string;
    placeholder?: string;
    rest?: any;
};
declare const FieldString: React.FC<FieldStringProps>;
export default FieldString;
