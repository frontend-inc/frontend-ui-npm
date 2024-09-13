import React from 'react';
import { ProductCollectionType } from '../../../types';
type AdminProductCollectionCoverProps = {
    productCollection: ProductCollectionType;
    handleEdit: () => void;
};
declare const AdminProductCollectionDetails: React.FC<AdminProductCollectionCoverProps>;
export default AdminProductCollectionDetails;
