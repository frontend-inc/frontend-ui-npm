import React from 'react';
interface BreadcrumbsProps {
    links: {
        label: string;
        value: string;
    }[];
    className?: string;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export { Breadcrumbs };
