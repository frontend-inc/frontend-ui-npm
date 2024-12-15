import React from 'react';
type LoadMoreProps = {
    page: number;
    numPages: number;
    handlePaginate: () => void;
};
export default function LoadMore(props: LoadMoreProps): React.JSX.Element;
export {};
