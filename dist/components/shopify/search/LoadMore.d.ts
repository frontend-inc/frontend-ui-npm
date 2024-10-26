import React from 'react';
type LoadMoreProps = {
    loading?: boolean;
    hasNextPage?: boolean;
    handleSearch?: () => void;
};
export default function LoadMore({ loading, hasNextPage, handleSearch, }: LoadMoreProps): React.JSX.Element;
export {};
