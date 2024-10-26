import React from 'react';
type LoginFormProps = {
    errors?: any;
    loading?: boolean;
    user: any;
    enableGoogle?: boolean;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleForgotPassword: false | (() => void);
    handleSignup: false | (() => void);
    handleOneTimePassword?: false | (() => void);
    handleGoogleSuccess?: () => void;
};
declare const LoginForm: React.FC<LoginFormProps>;
export default LoginForm;
