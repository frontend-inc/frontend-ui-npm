import React from 'react';
import { CollectionProductsGridProps } from '../../components/shop/collection-products/CollectionProductsGrid';
import { SectionProps, HeadingProps } from '../../types';
type ShopCollectionProductsProps = CollectionProductsGridProps & SectionProps & HeadingProps;
declare const ShopCollectionProducts: React.FC<ShopCollectionProductsProps>;
export default ShopCollectionProducts;
