import React from 'react';
import { ShopifyProductRecommendationsProps as ProductRecommendationsProps } from '../../components/shopify/products/ShopifyProductRecommendations';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsProps = SectionProps & HeadingProps & ProductRecommendationsProps;
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
