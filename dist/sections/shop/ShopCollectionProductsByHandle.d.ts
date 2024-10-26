import React from 'react';
import { CollectionProductsProps } from '../../components/shop/collection-products/CollectionProducts';
import { SectionProps, HeadingProps } from '../../types';
type ShopCollectionProductsProps = CollectionProductsProps & SectionProps & HeadingProps;
declare const ShopCollectionProducts: React.FC<ShopCollectionProductsProps>;
export default ShopCollectionProducts;
