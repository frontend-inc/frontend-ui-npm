import React from 'react';
import { ProductListProps } from '../../components/shop/products/ProductList';
import { SectionProps, HeadingProps } from '../../types';
type CmsProductReferenceListProps = SectionProps & HeadingProps & ProductListProps;
declare const CmsProductReferenceList: React.FC<CmsProductReferenceListProps>;
export default CmsProductReferenceList;
