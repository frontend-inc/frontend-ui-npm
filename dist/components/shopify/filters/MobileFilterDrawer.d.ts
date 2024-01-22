import React from "react";
type MobileFilterDrawerProps = {
    open: boolean;
    handleClose: () => void;
    priceRange: number[];
    handlePriceChange: (event: any, newValue: number | number[]) => void;
    minPrice: number;
    maxPrice: number;
};
declare const MobileFilterDrawer: React.FC<MobileFilterDrawerProps>;
export default MobileFilterDrawer;
