import React from "react";
import { Address } from "webstudio-shopify";
type AddressListProps = {
    addresses: Address[];
    handleClick: (id: string) => void;
    handleEdit: (id: string) => void;
    handleDelete: (address: Address) => void;
};
declare const AddressList: React.FC<AddressListProps>;
export default AddressList;
