import React from 'react';
import { FormFieldType } from '../../../../types';
type ToolbarUpdateProps = {
    buttonText?: string;
    icon?: string;
    fields: FormFieldType[];
};
declare const ToolbarUpdateButton: React.FC<ToolbarUpdateProps>;
export default ToolbarUpdateButton;
