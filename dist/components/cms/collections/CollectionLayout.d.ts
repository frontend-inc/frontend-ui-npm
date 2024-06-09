import React from 'react';
type CollectionLayoutProps = {
    loading?: boolean;
    header?: React.ReactNode;
    expandLeft?: boolean;
    expandRight?: boolean;
    leftPanel?: React.ReactNode;
    rightPanel?: React.ReactNode;
    children: React.ReactNode;
};
declare const CollectionLayout: React.FC<CollectionLayoutProps>;
export default CollectionLayout;
