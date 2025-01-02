import React from 'react';
type LoadMoreProps = {
    loading?: boolean;
    hasNextPage?: boolean;
    handleSearch?: () => void;
};
export default function LoadMore(props: LoadMoreProps): React.JSX.Element;
export {};
