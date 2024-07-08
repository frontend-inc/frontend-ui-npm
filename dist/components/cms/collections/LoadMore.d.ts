import React from 'react';
type LoadMoreProps = {
    page: number;
    numPages: number;
    loadMore: () => void;
    enableInfiniteLoad?: boolean;
};
declare const LoadMore: React.FC<LoadMoreProps>;
export default LoadMore;
