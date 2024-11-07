import React from 'react';
export type LogosProps = {
    logos: {
        image: string;
        title: string;
    }[];
    height?: number;
    width?: number;
};
declare const Logos: React.FC<LogosProps>;
export default Logos;
