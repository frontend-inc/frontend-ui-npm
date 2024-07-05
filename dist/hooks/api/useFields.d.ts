type UseFieldParams = {
    contentType: string;
};
declare const useFields: (props: UseFieldParams) => {
    loading: boolean;
    fetchFields: () => Promise<void>;
    filterFields: any[];
    sortFields: any[];
    formFields: any[];
    displayFields: any[];
};
export default useFields;
