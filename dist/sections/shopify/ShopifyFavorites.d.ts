import React from 'react';
import { ProductFavoritesProps } from '../../components/shopify/favorites/ProductFavorites';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyFavoritesProps = SectionProps & HeadingProps & ProductFavoritesProps;
declare const ShopifyFavorites: React.FC<ShopifyFavoritesProps>;
export default ShopifyFavorites;
