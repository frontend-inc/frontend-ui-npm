import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductFavoritesGridProps = ProductListProps & SectionProps & HeadingProps;
declare const ShopProductFavoritesGrid: React.FC<ShopProductFavoritesGridProps>;
export default ShopProductFavoritesGrid;
