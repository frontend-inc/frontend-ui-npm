import React from 'react';
type ShopProviderProps = {
    cartCookie: string;
    children: React.ReactNode;
};
declare const ShopProvider: (props: ShopProviderProps) => React.JSX.Element;
export default ShopProvider;
