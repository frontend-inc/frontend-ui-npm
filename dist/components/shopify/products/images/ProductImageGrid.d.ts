import React from 'react';
type ImageGridProps = {
    images: any;
    loading?: boolean;
    handleClick: any;
    itemWidth?: number;
    itemHeight?: number;
    numSkeletons?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
};
declare const ImageGrid: React.FC<ImageGridProps>;
export default ImageGrid;
