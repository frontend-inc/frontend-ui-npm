import React from 'react';
type SimplePageProps = {
    title: string;
    body: string;
    publishedAt?: string;
    html?: boolean;
    disablePadding?: boolean;
};
declare const SimplePage: React.FC<SimplePageProps>;
export default SimplePage;
