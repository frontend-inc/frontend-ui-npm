import React from 'react';
import { ShopifyAddressType } from 'frontend-shopify';
type AddressListProps = {
    addresses: ShopifyAddressType[];
    handleClick: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (address: ShopifyAddressType) => void;
};
declare const AddressList: React.FC<AddressListProps>;
export default AddressList;
