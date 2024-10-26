import React from 'react';
type BrandLogosProps = {
    height?: number;
    width?: number;
    logos: {
        title: string;
        image: string;
    }[];
};
declare const BrandLogos: React.FC<BrandLogosProps>;
export default BrandLogos;
