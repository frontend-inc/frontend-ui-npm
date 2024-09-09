import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { FormFieldType } from '../../../types';
type AdminProductFormProps = ResourceFormProps & {
    metafields?: FormFieldType[];
};
declare const AdminProductForm: React.FC<AdminProductFormProps>;
export default AdminProductForm;
