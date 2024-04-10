import React from 'react';
export type LogosProps = {
    title?: string;
    items?: {
        image: string;
        title?: string;
    }[];
};
declare const Logos: React.FC<LogosProps>;
export default Logos;
