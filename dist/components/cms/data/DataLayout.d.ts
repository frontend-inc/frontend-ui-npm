import React from 'react';
type DataLayoutProps = {
    loading?: boolean;
    layout?: 'grid' | 'list' | 'slider';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};
export default function DataLayout({ loading, layout, size, children, }: DataLayoutProps): React.JSX.Element;
export {};
