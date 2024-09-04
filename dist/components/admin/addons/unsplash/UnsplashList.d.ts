import React from 'react';
type UnsplashProps = {
    apiKey: string;
    onComplete?: (resp: any) => void;
};
declare const UnsplashList: React.FC<UnsplashProps>;
export default UnsplashList;
