import React from 'react';
type PaginationProps = {
    loading?: boolean;
    totalCount?: number;
    startIndex?: number;
    endIndex?: number;
    page?: number;
    perPage?: number;
    numPages?: number;
    handlePaginate: (page: number) => void;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
