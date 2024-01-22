import React from "react";
type LoadMoreProps = {
    enableInfiniteLoad?: boolean;
    page?: number;
    numPages?: number;
    loadMore: () => void;
};
declare const LoadMore: React.FC<LoadMoreProps>;
export default LoadMore;
