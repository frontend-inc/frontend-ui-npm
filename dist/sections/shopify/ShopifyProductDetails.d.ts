import React from 'react';
import { ShopifyProductDetailsProps } from '../../components/shopify/products/ShopifyProductDetails';
import { SectionProps } from '../../types';
type ShopifyPDPProps = SectionProps & ShopifyProductDetailsProps;
declare const ShopifyPDP: React.FC<ShopifyPDPProps>;
export default ShopifyPDP;
