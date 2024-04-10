import React from 'react';
import { ProductCollectionProps } from '../../components/shopify/products/ProductCollection';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsProps = SectionProps & HeadingProps & ProductCollectionProps;
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
