import React from 'react';
type SignupFormProps = {
    loading: boolean;
    user: Record<string, any>;
    errors: Record<string, any>;
    handleChange: (ev: any) => void;
    handleSubmit: () => void;
    handleLogin: false | (() => void);
    enableGoogle?: boolean;
    handleGoogleSuccess?: () => void;
};
declare const SignupForm: React.FC<SignupFormProps>;
export default SignupForm;
