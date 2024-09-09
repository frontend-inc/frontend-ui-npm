import React from 'react';
import { ShopifyCustomerType } from 'frontend-shopify';
type SignInFormProps = {
    errors?: any;
    loading?: boolean;
    customer: ShopifyCustomerType;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleForgotPassword: () => void;
    handleSignup: () => void;
};
declare const SignInForm: React.FC<SignInFormProps>;
export default SignInForm;
