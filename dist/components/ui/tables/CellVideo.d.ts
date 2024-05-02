import React from 'react';
type CellVideoProps = {
    value: {
        url: string;
    };
    size?: number;
    handleClick?: () => void;
};
declare const CellVideo: React.FC<CellVideoProps>;
export default CellVideo;
