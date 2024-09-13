import React from 'react';
type ProductReviewFormProps = {
    loading: boolean;
    errors?: any;
    review: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
};
declare const ProductReviewForm: React.FC<ProductReviewFormProps>;
export default ProductReviewForm;
