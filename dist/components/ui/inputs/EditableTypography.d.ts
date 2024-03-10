import React from 'react';
import { SyntheticEventType } from '../../../types';
type EditableTypographyProps = {
    variant: any;
    name: string;
    handleChange: (e: SyntheticEventType) => void;
    children: string;
    text: string;
};
declare const EditableTypography: React.FC<EditableTypographyProps>;
export default EditableTypography;
