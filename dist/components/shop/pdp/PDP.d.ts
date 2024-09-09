import React from 'react';
export type PDPProps = {
    label?: string;
    image?: string;
    price?: string;
    compareAtPrice?: string;
    availableForSale?: boolean;
    primary?: string;
    secondary?: React.ReactNode;
    actions?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    children?: React.ReactNode;
    slots?: {
        image?: any;
        content?: any;
    };
};
declare const PDP: React.FC<PDPProps>;
export default PDP;
