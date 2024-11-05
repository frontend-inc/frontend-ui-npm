import React from 'react';
type ShopifySortListProps = {
    enableIcons?: boolean;
    value: string;
    reverse?: boolean;
    options: Array<{
        value: string;
        reverse?: boolean;
        label: string;
    }>;
    handleClick: (value: string, reverse?: boolean) => void;
};
declare const ShopifySortList: React.FC<ShopifySortListProps>;
export default ShopifySortList;
