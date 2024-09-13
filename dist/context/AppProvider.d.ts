import React from 'react';
type AppProviderProps = {
    apiUrl: string;
    clientUrl: string;
    children: React.ReactNode;
    logo?: any;
    enableShopify?: boolean;
    enableStripe?: boolean;
    name: string;
};
declare const AppProvider: (props: AppProviderProps) => React.JSX.Element;
export default AppProvider;
