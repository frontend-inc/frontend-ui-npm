import React from 'react';
export type QueryProps = {
    query?: any;
    loadMore?: boolean;
    children: React.ReactNode;
};
declare const Query: React.FC<QueryProps>;
export default Query;
