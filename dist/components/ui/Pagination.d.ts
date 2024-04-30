import React from 'react';
type PaginationProps = {
    loading?: boolean;
    totalCount?: number;
    startIndex?: number;
    endIndex?: number;
    page?: number;
    perPage?: number;
    numPages?: number;
    numResults?: number;
    handlePaginate: (event: React.ChangeEvent<unknown>, page: number) => void;
};
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
