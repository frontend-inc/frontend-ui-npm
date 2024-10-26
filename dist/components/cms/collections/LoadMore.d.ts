import React from 'react';
type LoadMoreProps = {
    page: number;
    numPages: number;
    handlePaginate: () => void;
};
export default function LoadMore({ page, numPages, handlePaginate, }: LoadMoreProps): React.JSX.Element;
export {};
