import React from 'react';
interface PaginationProps {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    disabled?: boolean;
    siblingCount?: number;
    boundaryCount?: number;
    className?: string;
}
declare const Pagination: React.FC<PaginationProps>;
export { Pagination };
