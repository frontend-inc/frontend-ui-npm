import React from 'react';
type CellImageProps = {
    value: {
        url: any;
    };
    handleClick?: (value?: string) => void;
    size?: number;
};
declare const CellImage: React.FC<CellImageProps>;
export default CellImage;
