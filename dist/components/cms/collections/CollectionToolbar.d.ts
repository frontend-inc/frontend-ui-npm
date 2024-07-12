import React from 'react';
export type CollectionToolbarProps = {
    query: any;
    url: string;
    filterUser: boolean;
    filterTeam: boolean;
    perPage: number;
    enableSearch?: boolean;
    enableGeoSearch?: boolean;
    enableCreate?: boolean;
    enableFilters?: boolean;
    enableSorting?: boolean;
    handleAdd?: () => void;
};
declare const CollectionToolbar: React.FC<CollectionToolbarProps>;
export default CollectionToolbar;
