import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { MetafieldType } from '../../../types';
type AdminProductCreateFormProps = ResourceFormProps & {
    metafields: MetafieldType[];
};
declare const AdminProductCreateForm: React.FC<AdminProductCreateFormProps>;
export default AdminProductCreateForm;
