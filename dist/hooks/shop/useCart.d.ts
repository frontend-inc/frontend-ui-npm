declare const useCart: () => {
    cartId: any;
    cartCookie: any;
    loading: boolean;
    errors: any;
    createCart: () => Promise<any>;
    fetchCart: (cartId: any) => Promise<any>;
    cart: any;
    cartOpen: any;
    setCartOpen: any;
    setCart: any;
    addToCart: (productId: any, quantity?: number) => Promise<any>;
    removeFromCart: (productId: any) => Promise<any>;
    addQuantity: (productId: any) => Promise<any>;
    removeQuantity: (productId: any) => Promise<any>;
    checkout: (options: any) => Promise<any>;
};
export default useCart;
