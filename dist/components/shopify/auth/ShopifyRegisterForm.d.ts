import React from 'react';
import { ShopifyCustomerType } from 'frontend-shopify';
type ShopifyRegisterFormProps = {
    loading: boolean;
    customer: ShopifyCustomerType;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin: () => void;
};
declare const ShopifyRegisterForm: React.FC<ShopifyRegisterFormProps>;
export default ShopifyRegisterForm;
