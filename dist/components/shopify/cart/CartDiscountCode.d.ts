import React from 'react';
type CartDiscountCodeProps = {
    discountCode: {
        code: string;
        applicable: boolean;
    };
    handleDelete?: () => void;
};
declare const CartDiscountCode: React.FC<CartDiscountCodeProps>;
export default CartDiscountCode;
