type UseFetchFiltersParams = {
    url: string;
};
declare const useFetchFilters: (props: UseFetchFiltersParams) => {
    loading: boolean;
    errors: any;
    fields: any;
};
export default useFetchFilters;
