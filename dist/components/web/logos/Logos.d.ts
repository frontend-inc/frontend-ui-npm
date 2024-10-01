import React from 'react';
export type LogosProps = {
    title?: string;
    logos: {
        image: string;
        title: string;
    }[];
};
declare const Logos: React.FC<LogosProps>;
export default Logos;
