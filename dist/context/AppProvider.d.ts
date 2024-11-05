import React from 'react';
type AppProviderProps = {
    apiUrl: string;
    clientUrl: string;
    children: React.ReactNode;
    logo?: any;
    name: string;
    description: string;
    enableShopify?: boolean;
    enableStripe?: boolean;
    enableSubscription: boolean;
};
declare const AppProvider: (props: AppProviderProps) => React.JSX.Element;
export default AppProvider;
