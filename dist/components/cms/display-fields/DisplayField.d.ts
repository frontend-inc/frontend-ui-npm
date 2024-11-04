import React from 'react';
import { MetafieldType } from '../../../types';
type DisplayFieldProps = {
    label?: string;
    direction?: 'row' | 'column';
    placeholder?: string;
    field: MetafieldType;
    resource?: any;
};
declare const DisplayField: React.FC<DisplayFieldProps>;
export default DisplayField;
