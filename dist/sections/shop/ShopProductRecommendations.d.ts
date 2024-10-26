import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductRecommendationsProps = ProductListProps & SectionProps & HeadingProps;
declare const ShopProductRecommendations: React.FC<ShopProductRecommendationsProps>;
export default ShopProductRecommendations;
