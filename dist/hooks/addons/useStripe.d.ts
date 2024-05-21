declare const useStripe: () => {
    loading: boolean;
    createCustomer: (token: any) => Promise<void>;
    deleteCustomer: () => Promise<void>;
};
export default useStripe;
