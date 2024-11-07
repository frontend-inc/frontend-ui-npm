declare const usePolicies: () => {
    loading: boolean;
    policy: any;
    policies: any[];
    findPolicy: (id: import("frontend-js").ID) => any;
    findPolicies: (queryParams?: import("frontend-js").QueryParamsType) => void;
};
export default usePolicies;
