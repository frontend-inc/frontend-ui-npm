import React from 'react';
import { MetafieldProductsProps } from '../../components/shopify/products/metafields/MetafieldProducts';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyMetafieldProductsProps = SectionProps & HeadingProps & MetafieldProductsProps;
declare const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps>;
export default ShopifyMetafieldProducts;
