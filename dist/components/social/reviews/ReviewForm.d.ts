import React from 'react';
type ReviewFormProps = {
    loading: boolean;
    errors?: any;
    review: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
};
declare const ReviewForm: React.FC<ReviewFormProps>;
export default ReviewForm;
