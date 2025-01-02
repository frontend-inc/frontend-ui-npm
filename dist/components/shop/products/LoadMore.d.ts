import React from 'react';
type LoadMoreProps = {
    page: number;
    numPages: number;
    handlePaginate: () => void;
};
declare const LoadMore: React.FC<LoadMoreProps>;
export default LoadMore;
