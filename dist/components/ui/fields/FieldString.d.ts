import React from 'react';
import { TypographyVariantsType } from '../../../types';
type FieldStringProps = {
    value: string;
    variant?: TypographyVariantsType;
    label?: string;
    color?: string;
    placeholder?: string;
    rest?: any;
};
declare const FieldString: React.FC<FieldStringProps>;
export default FieldString;
