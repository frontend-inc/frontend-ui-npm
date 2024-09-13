import React from 'react';
import { ProductProps } from '../../components/shop/pdp/Product';
import { SectionProps } from '../../types';
type ShopProductDetailsProps = ProductProps & SectionProps;
declare const ShopProductDetails: React.FC<ShopProductDetailsProps>;
export default ShopProductDetails;
