declare const usePublicApp: () => {
    loading: boolean;
    errors: Record<string, any>;
    loaded: any;
    empty: any;
    app: import("frontend-js").ResourceType;
    findApp: (id: import("frontend-js").ID) => import("frontend-js").ResourceType;
    authorize: (appId: string) => Promise<void>;
};
export default usePublicApp;
