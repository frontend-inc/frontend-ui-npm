declare const useCart: () => {
    loading: boolean;
    errors: any;
    fetchCart: () => Promise<void>;
    cart: any;
    cartOpen: any;
    setCartOpen: any;
    setCart: any;
    addToCart: (productId: any, quantity?: number) => Promise<void>;
    removeFromCart: (productId: any) => Promise<void>;
    addQuantity: (productId: any) => Promise<void>;
    removeQuantity: (productId: any) => Promise<void>;
    checkout: (options: any) => Promise<any>;
};
export default useCart;
