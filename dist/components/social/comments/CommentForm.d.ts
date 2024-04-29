import React from 'react';
type CommentFormProps = {
    pl?: number;
    loading: boolean;
    errors?: any;
    comment: any;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
};
declare const CommentForm: React.FC<CommentFormProps>;
export default CommentForm;
