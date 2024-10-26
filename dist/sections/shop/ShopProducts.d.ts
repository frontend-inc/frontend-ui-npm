import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductsProps = SectionProps & HeadingProps & ProductListProps;
declare const ShopProducts: React.FC<ShopProductsProps>;
export default ShopProducts;
