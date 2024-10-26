import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductLikesGridProps = ProductListProps & SectionProps & HeadingProps;
declare const ShopProductLikesGrid: React.FC<ShopProductLikesGridProps>;
export default ShopProductLikesGrid;
