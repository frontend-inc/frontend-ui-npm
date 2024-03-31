import React from 'react';
type LoginFormProps = {
    errors?: any;
    loading?: boolean;
    user: any;
    enableGoogle?: boolean;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleForgotPassword: () => void;
    handleSignup: () => void;
    handleOneTimePassword?: () => void;
    handleGoogleSuccess?: () => void;
};
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
