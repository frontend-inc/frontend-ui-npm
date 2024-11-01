import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { FormFieldType } from '../../../types';
type AdminDocumentEditFormProps = ResourceFormProps & {
    fields?: FormFieldType[];
};
declare const AdminDocumentEditForm: React.FC<AdminDocumentEditFormProps>;
export default AdminDocumentEditForm;
