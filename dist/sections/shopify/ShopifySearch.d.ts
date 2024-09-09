import React from 'react';
import { ShopifyProductSearchProps as ProductSearchProps } from '../../components/shopify/products/ShopifyProductSearch';
import { SectionProps, HeadingProps } from '../../types';
type ShopifySearchProps = SectionProps & HeadingProps & ProductSearchProps;
declare const ShopifySearch: React.FC<ShopifySearchProps>;
export default ShopifySearch;
