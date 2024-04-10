import React from 'react';
import { ProductMetafieldsProps } from '../../components/shopify/products/metafields/Metafields';
import { SectionProps, HeadingProps } from '../../types';
type ShopifyMetafieldsProps = SectionProps & HeadingProps & ProductMetafieldsProps;
declare const ShopifyMetafields: React.FC<ShopifyMetafieldsProps>;
export default ShopifyMetafields;
