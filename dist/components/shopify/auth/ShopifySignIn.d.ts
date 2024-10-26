import React from 'react';
type ShopifySignInProps = {
    redirectUrl: string;
    title?: string;
    subtitle?: string;
    forgotPasswordUrl?: string;
    signupUrl?: string;
    oneTimePasswordUrl?: string;
};
declare const ShopifySignIn: React.FC<ShopifySignInProps>;
export default ShopifySignIn;
