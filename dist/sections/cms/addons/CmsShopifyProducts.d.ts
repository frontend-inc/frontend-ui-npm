import React from 'react';
import { FieldShopifyProductsProps } from '../../../components/cms/addons/FieldShopifyProducts';
import { SectionProps } from '../../../types';
type CmsShopifyProductProps = SectionProps & FieldShopifyProductsProps;
declare const CmsShopifyProducts: React.FC<CmsShopifyProductProps>;
export default CmsShopifyProducts;
