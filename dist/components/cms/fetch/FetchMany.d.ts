import React from 'react';
import { QueryParamsType } from 'frontend-js';
type FetchManyProps = {
    url: string;
    children: any;
    defaultQuery: QueryParamsType;
};
declare const FetchMany: React.FC<FetchManyProps>;
export default FetchMany;
