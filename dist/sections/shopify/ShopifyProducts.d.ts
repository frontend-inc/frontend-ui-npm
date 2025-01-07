import React from 'react';
import { ShopifyProductSearchProps } from '../../components/shopify/products/ShopifyProductSearch';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsProps = SectionProps & HeadingProps & ShopifyProductSearchProps;
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
