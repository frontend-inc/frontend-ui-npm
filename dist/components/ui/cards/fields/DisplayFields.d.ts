import React from 'react';
import { DisplayFieldType } from '../../../../types';
type DisplayFieldsProps = {
    color?: string;
    fields: DisplayFieldType[];
    resource: any;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
};
declare const DisplayFields: React.FC<DisplayFieldsProps>;
export default DisplayFields;
