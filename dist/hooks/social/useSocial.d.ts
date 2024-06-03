type UseSocialProps = {
    url: string;
};
declare const useSocial: (props: UseSocialProps) => {
    loading: boolean;
    like: (itemId: any) => Promise<any>;
    unlike: (itemId: any) => Promise<any>;
    favorite: (itemId: any) => Promise<any>;
    unfavorite: (itemId: any) => Promise<any>;
    follow: (itemId: any) => Promise<any>;
    unfollow: (itemId: any) => Promise<any>;
    loadingWrapper: (fn: any) => Promise<any>;
};
export default useSocial;
