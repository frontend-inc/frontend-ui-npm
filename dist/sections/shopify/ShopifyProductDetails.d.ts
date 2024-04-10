import React from 'react';
import { ProductDetailsProps } from '../../components/shopify/products/ProductDetails';
import { SectionProps } from '../../types';
type ShopifyPDPProps = SectionProps & ProductDetailsProps;
declare const ShopifyPDP: React.FC<ShopifyPDPProps>;
export default ShopifyPDP;
