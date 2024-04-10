import React from 'react';
export type ForeignCollectionProps = {
    layout?: 'list' | 'grid';
    style?: 'card' | 'avatar' | 'cover';
    field: any;
    resource: any;
    url: string;
    handle: string;
    navigateUrl?: any;
    foreignUrl?: string;
    perPage?: number;
    query?: any;
    buttonText?: string;
    enableBorder?: boolean;
    enableGradient?: boolean;
    enableLoadMore?: boolean;
};
declare const ForeignCollection: React.FC<ForeignCollectionProps>;
export default ForeignCollection;
