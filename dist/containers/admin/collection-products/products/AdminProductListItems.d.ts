import React from 'react';
import { ResourceListProps } from '../../../../components/cms/resources/ResourceList';
type AdminProductListItemsProps = ResourceListProps & {
    url: string;
    productCollectionId: string;
    handleSuccess: () => void;
};
declare const AdminProductListItems: React.FC<AdminProductListItemsProps>;
export default AdminProductListItems;
