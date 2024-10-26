declare const useGTM: () => {
    sendDataToGTM: (data: object) => void;
    identify: (email: any) => void;
    trackProductAdded: ({ variant, quantity, product }: {
        variant: any;
        quantity: any;
        product: any;
    }) => Promise<void>;
    trackRemoveFromCart: ({ variant, quantity, product }: {
        variant: any;
        quantity: any;
        product: any;
    }) => void;
    trackCartViewed: (checkout: any) => void;
    trackProductViewed: (product: any) => void;
    trackProductRemoved: (line: any) => void;
    trackProductList: (collection: any) => void;
    trackProductClicked: (product: any) => void;
    trackProductsSearched: (query: any) => void;
    trackCheckoutStarted: () => void;
};
export default useGTM;
