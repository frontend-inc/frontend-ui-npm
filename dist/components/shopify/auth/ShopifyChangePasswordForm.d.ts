import React from 'react';
import { ShopifyCustomerType } from 'frontend-shopify';
type ShopifyForgotPasswordFormProps = {
    errors: any;
    customer: ShopifyCustomerType;
    handleChange: (e: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const ShopifyForgotPasswordForm: React.FC<ShopifyForgotPasswordFormProps>;
export default ShopifyForgotPasswordForm;
