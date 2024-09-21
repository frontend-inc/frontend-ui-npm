declare const useStripeCustomerPortal: () => {
    loading: boolean;
    stripeCustomerPortal: (returnUrl: any) => Promise<any>;
};
export default useStripeCustomerPortal;
