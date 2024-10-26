declare const useStripeConnect: () => {
    loading: boolean;
    stripeConnect: (returnUrl: any) => Promise<any>;
};
export default useStripeConnect;
