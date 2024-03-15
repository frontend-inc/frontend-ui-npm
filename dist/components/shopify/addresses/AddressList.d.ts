import React from 'react';
import { AddressType } from 'frontend-shopify';
type AddressListProps = {
    addresses: AddressType[];
    handleClick: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (address: AddressType) => void;
};
declare const AddressList: React.FC<AddressListProps>;
export default AddressList;
