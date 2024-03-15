import React from 'react';
import { CustomerType } from 'frontend-shopify';
type ForgotPasswordFormProps = {
    errors: any;
    customer: CustomerType;
    handleChange: (e: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const ForgotPasswordForm: React.FC<ForgotPasswordFormProps>;
export default ForgotPasswordForm;
