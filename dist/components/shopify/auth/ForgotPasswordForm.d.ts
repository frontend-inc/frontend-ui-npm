import React from "react";
import { Customer } from "webstudio-shopify";
type ForgotPasswordFormProps = {
    errors: any;
    customer: Customer;
    handleChange: (e: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const ForgotPasswordForm: React.FC<ForgotPasswordFormProps>;
export default ForgotPasswordForm;
