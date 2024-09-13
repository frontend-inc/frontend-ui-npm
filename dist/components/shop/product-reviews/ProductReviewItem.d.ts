import React from 'react';
type ProductReviewItemProps = {
    resource: any;
    user?: any;
    handleDelete?: (review: any) => void;
};
declare const ProductReviewItem: React.FC<ProductReviewItemProps>;
export default ProductReviewItem;
