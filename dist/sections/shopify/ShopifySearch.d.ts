import React from 'react';
import { ProductSearchProps } from '../../components/shopify/products/ProductSearch';
import { SectionProps, HeadingProps } from '../../types';
type ShopifySearchProps = SectionProps & HeadingProps & ProductSearchProps;
declare const ShopifySearch: React.FC<ShopifySearchProps>;
export default ShopifySearch;
