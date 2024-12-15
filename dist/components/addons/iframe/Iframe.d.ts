import React from 'react';
export type IframeProps = {
    src: string;
    height?: string;
    mobileHeight?: string;
    className?: string;
};
declare const Iframe: React.FC<IframeProps>;
export default Iframe;
