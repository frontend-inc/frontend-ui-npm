import React from "react";
type OneTimePasswordFormProps = {
    loading: boolean;
    errors: Record<string, any>;
    user: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const OneTimePasswordForm: React.FC<OneTimePasswordFormProps>;
export default OneTimePasswordForm;
