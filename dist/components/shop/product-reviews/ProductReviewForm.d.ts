import React from 'react';
import { SyntheticEventType } from '../../../types';
type ProductReviewFormProps = {
    loading: boolean;
    errors?: any;
    review: any;
    handleChange: (ev: SyntheticEventType) => void;
    handleSubmit: () => void;
};
declare const ProductReviewForm: React.FC<ProductReviewFormProps>;
export default ProductReviewForm;
