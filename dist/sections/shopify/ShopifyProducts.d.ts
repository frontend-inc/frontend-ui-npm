import React from 'react';
import { ShopifyProductCollectionProps as ProductCollectionProps } from '../../components/shopify/products/ShopifyProductCollection';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsProps = SectionProps & HeadingProps & ProductCollectionProps;
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
