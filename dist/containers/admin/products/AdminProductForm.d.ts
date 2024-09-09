import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
import { MetafieldType } from '../../../types';
type AdminProductFormProps = ResourceFormProps & {
    metafields: MetafieldType[];
};
declare const AdminProductForm: React.FC<AdminProductFormProps>;
export default AdminProductForm;
