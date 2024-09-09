import React from 'react';
import { ProductContainerProps } from '../../components/shop/pdp/ProductContainer';
import { SectionProps } from '../../types';
type ShopProductDetailsProps = ProductContainerProps & SectionProps;
declare const ShopProductDetails: React.FC<ShopProductDetailsProps>;
export default ShopProductDetails;
