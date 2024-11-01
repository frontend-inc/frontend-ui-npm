import React from 'react';
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem';
type ProductListItemProps = ResourceItemProps & {
    enableDelete?: boolean;
};
declare const ProductListItem: React.FC<ProductListItemProps>;
export default ProductListItem;
