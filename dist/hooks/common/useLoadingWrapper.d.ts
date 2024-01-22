declare const useLoadingWrapper: () => {
    data: any;
    loading: boolean;
    errors: any;
    loadingWrapper: (fn: any) => Promise<any>;
};
export default useLoadingWrapper;
