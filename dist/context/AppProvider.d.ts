import React from 'react';
type AppProviderProps = {
    apiUrl: string;
    clientUrl: string;
    children: React.ReactNode;
    logo?: any;
    name: string;
    editable?: boolean;
    enableShopify?: boolean;
    enableStripe?: boolean;
};
declare const AppProvider: (props: AppProviderProps) => React.JSX.Element;
export default AppProvider;
