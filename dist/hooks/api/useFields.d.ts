type UseFieldsParams = {
    url: string;
};
declare const useFields: (props: UseFieldsParams) => {
    loading: boolean;
    fetchSearchFields: () => Promise<void>;
    fetchFormFields: () => Promise<void>;
    fetchDisplayFields: () => Promise<void>;
    filterFields: any[];
    sortFields: any[];
    formFields: any[];
    displayFields: any[];
};
export default useFields;
