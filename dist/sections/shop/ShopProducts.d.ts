import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type ShopProductGridProps = SectionProps & HeadingProps & ProductListProps;
declare const ShopProductGrid: React.FC<ShopProductGridProps>;
export default ShopProductGrid;
