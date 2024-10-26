import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { FormFieldType } from '../../../types';
type AdminProductCollectionFormProps = ResourceFormProps & {
    metafields?: FormFieldType[];
};
declare const AdminProductCollectionForm: React.FC<AdminProductCollectionFormProps>;
export default AdminProductCollectionForm;
