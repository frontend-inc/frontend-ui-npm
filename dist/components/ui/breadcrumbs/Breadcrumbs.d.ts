import React from 'react';
export type Breadcrumb = {
    label: string;
    path: string;
};
export type BreadcrumbsProps = {
    links: Breadcrumb[];
    maxLinks?: number;
};
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
