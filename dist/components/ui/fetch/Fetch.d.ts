import React from 'react';
type FetchProps = {
    url: string;
    handle: number | string;
    children: any;
};
declare const Fetch: React.FC<FetchProps>;
export default Fetch;
