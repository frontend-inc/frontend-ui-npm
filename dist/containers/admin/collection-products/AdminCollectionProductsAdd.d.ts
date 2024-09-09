import React from 'react';
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm';
type AdminCollectionProductsAddProps = ResourceFormProps & {
    url: string;
    productCollectionId: string;
};
declare const AdminCollectionProductsAdd: React.FC<AdminCollectionProductsAddProps>;
export default AdminCollectionProductsAdd;
