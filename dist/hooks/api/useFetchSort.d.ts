type UseFetchSortParams = {
    url: string;
};
declare const useFetchSort: (props: UseFetchSortParams) => {
    loading: boolean;
    errors: any;
    fields: any;
};
export default useFetchSort;
