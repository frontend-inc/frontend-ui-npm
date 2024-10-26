type UseKlaviyoParams = {
    apiKey: string;
};
declare const useKlaviyo: (params: UseKlaviyoParams) => {
    loading: boolean;
    handleSubmit: (params: any) => Promise<any>;
};
export default useKlaviyo;
