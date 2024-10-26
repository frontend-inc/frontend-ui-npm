import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { FormFieldType } from '../../../types';
type AdminProductEditFormProps = ResourceFormProps & {
    metafields?: FormFieldType[];
};
declare const AdminProductEditForm: React.FC<AdminProductEditFormProps>;
export default AdminProductEditForm;
