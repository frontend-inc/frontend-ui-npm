declare const useSubscription: () => {
    loading: boolean;
    delayedLoading: boolean;
    errors: any;
    subscribe: (productId: any, stripeOptions: {
        success_url: string;
        cancel_url: string;
    }) => Promise<void>;
};
export default useSubscription;
