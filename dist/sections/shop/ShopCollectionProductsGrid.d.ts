import React from 'react';
import { CollectionProductsGridProps } from '../../components/shop/collection-products/CollectionProductsGrid';
import { SectionProps, HeadingProps } from '../../types';
type ShopCollectionProductsGridProps = CollectionProductsGridProps & SectionProps & HeadingProps;
declare const ShopCollectionProductsGrid: React.FC<ShopCollectionProductsGridProps>;
export default ShopCollectionProductsGrid;
