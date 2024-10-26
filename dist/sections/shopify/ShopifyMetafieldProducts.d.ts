import React from 'react';
import { ShopifyMetafieldProductsProps as MetafieldProductsProps } from '../../components/shopify/products/metafields/ShopifyMetafieldProducts';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyMetafieldProductsProps = SectionProps & HeadingProps & MetafieldProductsProps;
declare const ShopifyMetafieldProducts: React.FC<ShopifyMetafieldProductsProps>;
export default ShopifyMetafieldProducts;
