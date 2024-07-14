import React from 'react';
import { FormFieldType } from '../../../types';
export type EditModalProps = {
    fields: FormFieldType[];
    parentResource?: any;
};
declare const EditModal: React.FC<EditModalProps>;
export default EditModal;
