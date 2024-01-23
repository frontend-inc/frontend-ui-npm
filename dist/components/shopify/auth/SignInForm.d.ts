import React from 'react';
import { Customer } from 'webstudio-shopify';
type SignInFormProps = {
    errors?: any;
    loading?: boolean;
    customer: Customer;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleForgotPassword: () => void;
    handleSignup: () => void;
};
declare const SignInForm: React.FC<SignInFormProps>;
export default SignInForm;
