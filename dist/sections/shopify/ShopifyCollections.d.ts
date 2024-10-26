import React from 'react';
import { ShopifyCollectionsProps as CollectionProps } from '../../components/shopify/collections/ShopifyCollections';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyCollectionsProps = SectionProps & HeadingProps & CollectionProps;
declare const ShopifyCollections: React.FC<ShopifyCollectionsProps>;
export default ShopifyCollections;
