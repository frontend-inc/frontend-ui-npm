import React from 'react';
declare const useProducts: () => {
    paginate: (page: number) => Promise<any>;
    loading: boolean;
    loaded: any;
    delayedLoading: any;
    errors: Record<string, any>;
    empty: any;
    editing: any;
    isValid: any;
    product: any;
    products: any[];
    findProduct: (id: import("frontend-js").ID) => any;
    findProducts: (queryParams?: import("frontend-js").QueryParamsType) => void;
    loadMore: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    reloadProduct: any;
    reloadProducts: () => Promise<any>;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    setProduct: (value: any) => void;
    setProducts: (value: any[]) => void;
    startIndex: any;
    endIndex: any;
};
export default useProducts;
