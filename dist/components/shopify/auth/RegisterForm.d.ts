import React from 'react';
import { CustomerType } from 'frontend-shopify';
type RegisterFormProps = {
    loading: boolean;
    customer: CustomerType;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin: () => void;
};
declare const RegisterForm: React.FC<RegisterFormProps>;
export default RegisterForm;
