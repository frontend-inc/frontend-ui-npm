import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductFavoritesListProps = ProductListProps & SectionProps & HeadingProps;
declare const ShopProductFavoritesList: React.FC<ShopProductFavoritesListProps>;
export default ShopProductFavoritesList;
