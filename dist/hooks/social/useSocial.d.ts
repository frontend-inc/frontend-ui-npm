declare const useSocial: () => {
    loading: boolean;
    like: (itemId: any) => Promise<any>;
    unlike: (itemId: any) => Promise<any>;
    favorite: (itemId: any) => Promise<any>;
    unfavorite: (itemId: any) => Promise<any>;
    follow: (username: any) => Promise<any>;
    unfollow: (username: any) => Promise<any>;
    likeProduct: (productId: any) => Promise<any>;
    unlikeProduct: (productId: any) => Promise<any>;
    favoriteProduct: (productId: any) => Promise<any>;
    unfavoriteProduct: (productId: any) => Promise<any>;
    shopifyFavorite: (handle: any) => Promise<any>;
    shopifyUnfavorite: (handle: any) => Promise<any>;
    loadingWrapper: (fn: any) => Promise<any>;
};
export default useSocial;
