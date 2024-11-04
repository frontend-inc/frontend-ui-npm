import React from 'react';
import { MetafieldType } from '../../../types';
type FieldProps = {
    label?: string;
    color?: string;
    direction?: 'row' | 'column';
    placeholder?: string;
    field: MetafieldType;
    resource?: any;
};
declare const ListField: React.FC<FieldProps>;
export default ListField;
