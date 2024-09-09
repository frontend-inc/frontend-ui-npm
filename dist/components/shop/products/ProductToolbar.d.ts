import React from 'react';
import { ToolbarButtonType } from '../../../types';
type ProductToolbarModalProps = {
    enableDelete?: boolean;
    enableAddToList?: boolean;
    toolbarButtons?: ToolbarButtonType[];
};
declare const ProductToolbar: React.FC<ProductToolbarModalProps>;
export default ProductToolbar;
