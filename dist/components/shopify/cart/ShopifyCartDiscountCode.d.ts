import React from 'react';
type ShopifyCartDiscountCodeProps = {
    discountCode: {
        code: string;
        applicable: boolean;
    };
    handleDelete?: () => void;
};
export default function ShopifyCartDiscountCode({ discountCode, }: ShopifyCartDiscountCodeProps): React.JSX.Element;
export {};
