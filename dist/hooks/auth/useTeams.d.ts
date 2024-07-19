import React from 'react';
import { UserType, TeamType } from '../../types';
declare const useTeams: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    team: any;
    teams: any[];
    findTeam: (id: import("frontend-js").ID) => any;
    findTeams: (queryParams?: import("frontend-js").QueryParamsType) => void;
    updateTeam: (resource: any) => any;
    createTeam: (resource: any) => any;
    deleteTeam: (id: import("frontend-js").ID) => Promise<any>;
    selectTeam: (teamId: any) => Promise<UserType>;
    setTeam: (value: any) => void;
    user: {};
    setUser: React.Dispatch<React.SetStateAction<{}>>;
    inviteUser: (teamId: any, user: any) => Promise<void>;
    deleteImage: (teamId: any) => Promise<TeamType>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadTeams: () => Promise<any>;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    loadMore: () => void;
    loadingWrapper: (fn: () => void) => void;
    paginate: (page: number) => Promise<any>;
    removeAttachment: (id: import("frontend-js").ID, fieldName: string) => any;
};
export default useTeams;
