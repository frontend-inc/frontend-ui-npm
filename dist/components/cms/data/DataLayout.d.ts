import React from 'react';
type DataLayoutProps = {
    loading?: boolean;
    layout?: 'grid' | 'list' | 'slider';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
};
export default function DataLayout(props: DataLayoutProps): React.JSX.Element;
export {};
