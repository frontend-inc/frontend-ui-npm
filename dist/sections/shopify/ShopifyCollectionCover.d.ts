import React from 'react';
import { ShopifyCollectionCoverProps as CollectionCoverProps } from '../../components/shopify/collections/ShopifyCollectionCover';
import { SectionProps } from '../../types';
type ShopifyCollectionCoverProps = SectionProps & CollectionCoverProps;
declare const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps>;
export default ShopifyCollectionCover;
