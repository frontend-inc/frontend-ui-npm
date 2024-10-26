import React from 'react';
export type ShopifyCardProps = {
    collection?: {
        label?: string;
        title?: string;
        image?: {
            url: string;
        };
    };
    href?: string;
    buttonText?: string;
    handleClick?: () => void;
    enableGradient?: boolean;
    enableOverlay?: boolean;
};
export default function ShopifyCollectionCard({ collection, href, handleClick, buttonText, enableGradient, enableOverlay, }: ShopifyCardProps): React.JSX.Element;
