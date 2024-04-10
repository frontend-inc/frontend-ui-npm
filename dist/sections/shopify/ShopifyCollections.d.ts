import React from 'react';
import { CollectionsProps } from '../../components/shopify/collections/Collections';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyCollectionsProps = SectionProps & HeadingProps & CollectionsProps;
declare const ShopifyCollections: React.FC<ShopifyCollectionsProps>;
export default ShopifyCollections;
