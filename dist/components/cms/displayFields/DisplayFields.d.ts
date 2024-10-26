import React from 'react';
import { DisplayFieldType } from '../../../types';
type DisplayFieldsProps = {
    fields: DisplayFieldType[];
    resource: any;
    direction?: 'row' | 'column';
    disableBorder?: boolean;
    disableLabel?: boolean;
    className?: string;
};
declare const DisplayFields: React.FC<DisplayFieldsProps>;
export default DisplayFields;
