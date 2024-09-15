import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductsSimilarProps = ProductListProps & SectionProps & HeadingProps;
declare const ShopProductsSimilar: React.FC<ShopProductsSimilarProps>;
export default ShopProductsSimilar;
