import React from 'react';
import { ProductCollectionListProps } from '../../components/shop/product-collections/ProductCollectionList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductCollectionsProps = SectionProps & HeadingProps & ProductCollectionListProps;
declare const ShopProductCollections: React.FC<ShopProductCollectionsProps>;
export default ShopProductCollections;
