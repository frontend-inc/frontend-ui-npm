import React from 'react';
type NewPasswordFormProps = {
    loading: boolean;
    errors: Record<string, any>;
    user: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin?: () => void;
};
declare const NewPasswordForm: React.FC<NewPasswordFormProps>;
export default NewPasswordForm;
