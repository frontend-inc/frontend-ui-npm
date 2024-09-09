import React from 'react';
type ShopifyCartDiscountCodeProps = {
    discountCode: {
        code: string;
        applicable: boolean;
    };
    handleDelete?: () => void;
};
declare const ShopifyCartDiscountCode: React.FC<ShopifyCartDiscountCodeProps>;
export default ShopifyCartDiscountCode;
