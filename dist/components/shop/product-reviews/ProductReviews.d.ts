import React from 'react';
export type ProductReviewsProps = {
    productId: string;
    enableSearch?: boolean;
    enableSorting?: boolean;
    enableFilters?: boolean;
    enableCreate?: boolean;
};
declare const ProductReviews: React.FC<ProductReviewsProps>;
export default ProductReviews;
