type UseSocialProps = {
    url: string;
};
declare const useSocial: (props: UseSocialProps) => {
    loading: boolean;
    like: (itemId: any) => Promise<any>;
    unlike: (itemId: any) => Promise<any>;
    favorite: (itemId: any) => Promise<any>;
    unfavorite: (itemId: any) => Promise<any>;
    follow: (username: any) => Promise<any>;
    unfollow: (username: any) => Promise<any>;
    loadingWrapper: (fn: any) => Promise<any>;
};
export default useSocial;
