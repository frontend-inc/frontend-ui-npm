declare const useCart: () => {
    cartCookie: any;
    loading: boolean;
    errors: any;
    createCart: () => Promise<void>;
    fetchCart: (cartId: any) => Promise<void>;
    cart: any;
    cartOpen: any;
    setCartOpen: any;
    setCart: any;
    addToCart: (productId: any, quantity?: number) => Promise<void | "Cart not found">;
    removeFromCart: (productId: any) => Promise<void | "Cart not found">;
    addQuantity: (productId: any) => Promise<void | "Cart not found">;
    removeQuantity: (productId: any) => Promise<void | "Cart not found">;
    checkout: (options: any) => Promise<any>;
};
export default useCart;
