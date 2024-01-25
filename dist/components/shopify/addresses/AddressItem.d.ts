import React from 'react';
import { Address } from 'frontend-shopify';
type AddressItemProps = {
    address: Address;
    handleClick?: (id: string) => void;
    handleEdit?: (id: string) => void;
    handleDelete?: (address: Address) => void;
    disableActions?: boolean;
};
declare const AddressItem: React.FC<AddressItemProps>;
export default AddressItem;
