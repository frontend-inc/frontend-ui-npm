import React from 'react';
import { Customer } from 'webstudio-shopify';
type RegisterFormProps = {
    loading: boolean;
    customer: Customer;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin: () => void;
};
declare const RegisterForm: React.FC<RegisterFormProps>;
export default RegisterForm;
