type UseFetchFormParams = {
    url: string;
};
declare const useFetchForm: (props: UseFetchFormParams) => {
    loading: boolean;
    errors: any;
    fields: any;
};
export default useFetchForm;
