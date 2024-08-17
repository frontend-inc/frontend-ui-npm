import { UnsplashImageType } from '../../types';
type UseUnsplashParams = {
    apiKey: string;
};
declare const useUnsplash: (params: UseUnsplashParams) => {
    loading: boolean;
    images: UnsplashImageType[];
    search: (keywords: any, page?: number) => Promise<any>;
    loadMore: (keywords: any) => Promise<any>;
    fetchDownloadLocation: (image: any) => Promise<any>;
};
export default useUnsplash;
