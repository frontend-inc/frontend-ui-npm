import React from 'react';
export type QueryProps = {
    perPage?: number;
    query?: any;
    filterUser?: boolean;
    filterTeam?: boolean;
    children: React.ReactNode;
};
declare const Query: React.FC<QueryProps>;
export default Query;
