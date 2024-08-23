import React from 'react';
type ReviewProps = {
    resource: any;
    user?: any;
    handleDelete?: (review: any) => void;
};
declare const Review: React.FC<ReviewProps>;
export default Review;
