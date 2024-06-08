import React from 'react';
import { AddonShopifyProductProps } from '../../../components/cms/addons/AddonShopifyProduct';
import { SectionProps } from '../../../types';
type CmsShopifyProductProps = SectionProps & AddonShopifyProductProps;
declare const CmsShopifyProduct: React.FC<CmsShopifyProductProps>;
export default CmsShopifyProduct;
