import React from 'react';
import { MetafieldType } from '../../../types';
type DisplayFieldsProps = {
    fields: MetafieldType[];
    resource: any;
    className?: string;
};
declare const DisplayFields: React.FC<DisplayFieldsProps>;
export default DisplayFields;
