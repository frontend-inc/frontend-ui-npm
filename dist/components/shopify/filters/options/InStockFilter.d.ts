import React from 'react';
import { ProductCollectionFilter } from 'webstudio-shopify';
type InStockFilterProps = {
    filters: ProductCollectionFilter[];
    handleClick: (value: string) => void;
};
declare const InStockFilter: React.FC<InStockFilterProps>;
export default InStockFilter;
