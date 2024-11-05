declare const useSubscription: () => {
    loading: boolean;
    delayedLoading: boolean;
    errors: any;
    subscribe: (options: {
        success_url: string;
        cancel_url: string;
    }) => Promise<void>;
    unsubscribe: () => Promise<void>;
};
export default useSubscription;
