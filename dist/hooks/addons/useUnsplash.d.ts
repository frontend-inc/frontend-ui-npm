import { UnsplashImageType } from '../../types';
declare const useUnsplash: () => {
    loading: boolean;
    images: UnsplashImageType[];
    search: (keywords: any, page?: number) => Promise<any>;
    loadMore: (keywords: any) => Promise<any>;
    fetchDownloadLocation: (image: any) => Promise<any>;
};
export default useUnsplash;
