import React from 'react';
import { FormFieldType } from '../../../../types';
type DataMultiselectUpdateProps = {
    buttonText?: string;
    icon?: string;
    fields: FormFieldType[];
};
declare const DataMultiselectUpdateButton: React.FC<DataMultiselectUpdateProps>;
export default DataMultiselectUpdateButton;
