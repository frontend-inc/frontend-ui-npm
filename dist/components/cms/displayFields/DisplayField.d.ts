import React from 'react';
import { DisplayFieldType } from '../../../types';
type FieldProps = {
    label?: string;
    color?: string;
    direction?: 'row' | 'column';
    placeholder?: string;
    field: DisplayFieldType;
    resource?: any;
    disableBorder?: boolean;
    disableLabel?: boolean;
};
declare const DisplayField: React.FC<FieldProps>;
export default DisplayField;
