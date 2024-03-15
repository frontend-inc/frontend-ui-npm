import React from 'react';
import { AddressType } from 'frontend-shopify';
type AddressItemProps = {
    address: AddressType;
    handleClick?: (id: string) => void;
    handleEdit?: (id: string) => void;
    handleDelete?: (address: AddressType) => void;
    disableActions?: boolean;
};
declare const AddressItem: React.FC<AddressItemProps>;
export default AddressItem;
