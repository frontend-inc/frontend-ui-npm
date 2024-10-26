import React from 'react';
type TBrandfetchBrand = {
    id: string;
    logos: {
        domain: string;
        formats: {
            src: string;
            format: 'png' | 'jpg' | 'svg' | 'webp';
        }[];
    }[];
};
type TBrandfetchLogo = {
    brandId: string;
    claimed: boolean;
    domain: string;
    icon: string;
    _score: number;
    qualityScore: number;
};
declare const useBrandfetch: () => {
    loading: boolean;
    resizeLogo: (icon: string, options: any) => string;
    brand: TBrandfetchBrand;
    setBrand: React.Dispatch<React.SetStateAction<TBrandfetchBrand>>;
    brands: TBrandfetchLogo[];
    setBrands: React.Dispatch<React.SetStateAction<TBrandfetchLogo[]>>;
    fetchBrand: (domain: any) => Promise<any>;
    fetchBrands: (keywords: any) => Promise<any>;
};
export default useBrandfetch;
