import React from "react";
type ResetPasswordFormProps = {
    loading: boolean;
    errors: Record<string, any>;
    user: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const ResetPasswordForm: React.FC<ResetPasswordFormProps>;
export default ResetPasswordForm;
