import React from 'react';
type LogosProps = {
    title?: string;
    items?: {
        image: string;
        title?: string;
    }[];
    editing?: boolean;
    buttonText?: string;
    autoPlay?: boolean;
    arrows?: boolean;
    showDots?: boolean;
    enableBorder?: boolean;
    enableGradient?: boolean;
};
declare const Logos: React.FC<LogosProps>;
export default Logos;
