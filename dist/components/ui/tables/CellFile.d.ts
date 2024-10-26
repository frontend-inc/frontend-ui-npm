import React from 'react';
type CellFileProps = {
    value: {
        url: string;
    };
    handleClick: (value: any) => void;
};
declare const CellFile: React.FC<CellFileProps>;
export default CellFile;
