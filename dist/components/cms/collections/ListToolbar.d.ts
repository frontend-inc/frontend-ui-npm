import React from 'react';
export type ListToolbarProps = {
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
declare const ListToolbar: React.FC<ListToolbarProps>;
export default ListToolbar;
