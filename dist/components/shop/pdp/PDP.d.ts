import React from 'react';
export type PDPProps = {
    direction?: 'row' | 'column';
    label?: string;
    image?: string;
    price?: string;
    compareAtPrice?: string;
    description?: string;
    primary?: string;
    secondary?: React.ReactNode;
    actions?: React.ReactNode;
    addToCart?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    children?: React.ReactNode;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const PDP: React.FC<PDPProps>;
export default PDP;
