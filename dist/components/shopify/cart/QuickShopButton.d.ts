import React from "react";
type QuickShopProps = {
    size?: "small" | "medium" | "large";
    buttonVariant?: "contained" | "outlined" | "text";
    buttonText?: string;
    quickShopButtonText?: string;
    product?: any;
    enableQuantity?: boolean;
};
declare const QuickShop: React.FC<QuickShopProps>;
export default QuickShop;
