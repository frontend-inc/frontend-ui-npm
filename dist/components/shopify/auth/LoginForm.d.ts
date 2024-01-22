import React from "react";
import { Customer } from "webstudio-shopify";
type LoginFormProps = {
    errors?: any;
    loading?: boolean;
    customer: Customer;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleForgotPassword: () => void;
    handleSignup: () => void;
};
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
