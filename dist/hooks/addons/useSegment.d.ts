declare const useSegment: () => {
  segment: any;
  trackCartViewed: (cart: any) => void;
  trackCheckoutStarted: (cart: any) => void;
  trackAddToCart: ({
    variant,
    quantity,
    product,
  }: {
    variant: any;
    quantity: any;
    product: any;
  }) => void;
  trackRemoveFromCart: ({
    variant,
    quantity,
    product,
  }: {
    variant: any;
    quantity: any;
    product: any;
  }) => void;
  trackProductClicked: (product: any) => void;
  trackProductViewed: (product: any) => void;
  trackProductsSearched: (query: any) => void;
  trackProductList: (collection: any) => void;
};
export default useSegment;
