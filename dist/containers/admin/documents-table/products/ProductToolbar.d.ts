import React from 'react';
type ProductToolbarProps = {
    open: boolean;
    handleAddProducts: (productIds: number[]) => void;
    handleClose: () => void;
    selectedIds: number[];
    handleReload: () => void;
};
declare const ProductToolbar: React.FC<ProductToolbarProps>;
export default ProductToolbar;
