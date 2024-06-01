import React from 'react';
type UseFiltersProps = {
    query?: any;
};
declare const useFilters: (props: UseFiltersProps) => {
    filter: undefined;
    findFilter: (fieldName: any, filters: any) => any;
    showFilterModal: boolean;
    setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpenFilterModal: () => void;
    handleCloseFilterModal: () => void;
    handleAddFilter: (filter: any) => void;
    queryFilters: {};
    activeFilters: any[];
    setActiveFilters: React.Dispatch<React.SetStateAction<any[]>>;
    findDuplicateFilter: (filters: any, filter: any) => any;
    findDuplicateFilterIndex: (filters: any, filter: any) => any;
    mergeFilters: (filters: any, newFilters: any) => any;
    mergeAllFilters: (filters: any) => any;
    buildUserFilters: (currentUser: any, filterUser: any, filterTeam: any) => {
        AND: ({
            user_id: {
                eq: any;
            };
            team_id?: undefined;
        } | {
            team_id: {
                eq: any;
            };
            user_id?: undefined;
        })[];
    };
    buildQueryFilters: (activeFilters: any) => {};
};
export default useFilters;
