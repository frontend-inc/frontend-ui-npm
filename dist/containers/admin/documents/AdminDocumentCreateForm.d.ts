import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { FormFieldType } from '../../../types';
type AdminDocumentCreateFormProps = ResourceFormProps & {
    fields: FormFieldType[];
};
declare const AdminDocumentCreateForm: React.FC<AdminDocumentCreateFormProps>;
export default AdminDocumentCreateForm;
