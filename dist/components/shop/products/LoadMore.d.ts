import React from 'react';
type LoadMoreProps = {
    page: number;
    numPages: number;
    handlePaginate: () => void;
    enableInfiniteLoad?: boolean;
};
declare const LoadMore: React.FC<LoadMoreProps>;
export default LoadMore;
