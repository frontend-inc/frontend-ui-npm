import React from 'react';
import { ShopifyProductMetafieldsProps as ProductMetafieldsProps } from '../../components/shopify/products/metafields/ShopifyMetafields';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyMetafieldsProps = SectionProps & HeadingProps & ProductMetafieldsProps;
declare const ShopifyMetafields: React.FC<ShopifyMetafieldsProps>;
export default ShopifyMetafields;
