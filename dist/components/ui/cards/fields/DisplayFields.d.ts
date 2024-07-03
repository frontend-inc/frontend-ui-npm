import React from 'react';
import { DisplayFieldType } from '../../../../types';
type DisplayFieldsProps = {
    fields: DisplayFieldType[];
    resource: any;
    enableTitle?: boolean;
    enableRatings?: boolean;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
};
declare const DisplayFields: React.FC<DisplayFieldsProps>;
export default DisplayFields;
