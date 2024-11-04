import React from 'react';
import { MetafieldType } from '../../../types';
type ShowFieldProps = {
    label?: string;
    direction?: 'row' | 'column';
    placeholder?: string;
    field: MetafieldType;
    resource?: any;
};
declare const ShowField: React.FC<ShowFieldProps>;
export default ShowField;
