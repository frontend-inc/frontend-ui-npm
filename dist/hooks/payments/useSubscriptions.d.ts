import React from 'react';
import { SubscriptionPlanType } from '../../types';
declare const useSubscriptions: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    subscriptionPlan: any;
    subscriptionPlans: any[];
    findSubscriptionPlan: (id: import("frontend-js").ID) => any;
    findSubscriptionPlans: (queryParams?: import("frontend-js").QueryParamsType) => void;
    subscribe: (subscriptionPlanId: any) => Promise<SubscriptionPlanType>;
    unsubscribe: () => Promise<SubscriptionPlanType>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadSubscriptionPlans: () => Promise<any>;
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
};
export default useSubscriptions;
