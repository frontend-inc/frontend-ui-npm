import React from 'react';
import { ProductRecommendationsProps } from '../../components/shopify/products/ProductRecommendations';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyProductsProps = SectionProps & HeadingProps & ProductRecommendationsProps;
declare const ShopifyProducts: React.FC<ShopifyProductsProps>;
export default ShopifyProducts;
