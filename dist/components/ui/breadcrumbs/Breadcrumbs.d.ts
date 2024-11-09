import React from 'react';
export type BreadcrumbType = {
    icon?: string;
    label: string;
    path: string;
};
export type BreadcrumbsProps = {
    links: BreadcrumbType[];
    className?: string;
};
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
