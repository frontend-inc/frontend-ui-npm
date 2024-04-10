import React from 'react';
import { ProductFeaturedProps } from '../../components/shopify/products/ProductFeatured';
import { SectionProps } from '../../types';
type ShopifyProductFeaturedProps = SectionProps & ProductFeaturedProps;
declare const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps>;
export default ShopifyProductFeatured;
