import React from 'react';
import { ShopifyProductFeaturedProps as ProductFeaturedProps } from '../../components/shopify/products/ShopifyProductFeatured';
import { SectionProps } from '../../types';
type ShopifyProductFeaturedProps = SectionProps & ProductFeaturedProps;
declare const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps>;
export default ShopifyProductFeatured;
