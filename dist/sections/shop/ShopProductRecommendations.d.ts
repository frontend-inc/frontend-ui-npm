import React from 'react';
import { ProductSimilarListProps } from '../../components/shop/products/ProductSimilarList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductRecommendationsProps = ProductSimilarListProps & SectionProps & HeadingProps;
declare const ShopProductRecommendations: React.FC<ShopProductRecommendationsProps>;
export default ShopProductRecommendations;
