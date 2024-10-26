import React from 'react';
import { ShopifyProductFavoritesProps } from '../../components/shopify/favorites/ShopifyProductFavorites';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyFavoritesProps = SectionProps & HeadingProps & ShopifyProductFavoritesProps;
declare const ShopifyFavorites: React.FC<ShopifyFavoritesProps>;
export default ShopifyFavorites;
