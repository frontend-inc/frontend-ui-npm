import React from 'react';
type StripeProviderProps = {
    publishableKey: string;
    customerPortalUrl?: string;
    children: React.ReactNode;
};
declare const StripeProvider: (props: StripeProviderProps) => React.JSX.Element;
export default StripeProvider;
