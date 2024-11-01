import React from 'react';
type DataLayoutProps = {
    loading?: boolean;
    layout?: 'grid' | 'list' | 'slider';
    children: React.ReactNode;
};
export default function DataLayout({ loading, layout, children, }: DataLayoutProps): React.JSX.Element;
export {};
