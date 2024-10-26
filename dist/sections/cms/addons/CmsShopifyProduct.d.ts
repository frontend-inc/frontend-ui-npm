import React from 'react';
import { FieldShopifyProductProps } from '../../../components/cms/addons/FieldShopifyProduct';
import { SectionProps } from '../../../types';
type CmsShopifyProductProps = SectionProps & FieldShopifyProductProps;
declare const CmsShopifyProduct: React.FC<CmsShopifyProductProps>;
export default CmsShopifyProduct;
