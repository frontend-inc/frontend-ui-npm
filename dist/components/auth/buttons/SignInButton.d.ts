import React from 'react';
export type SignInButtonProps = {
    showIcon?: boolean;
    color?: 'primary' | 'secondary';
    buttonText?: string;
};
declare const SignInButton: React.FC<SignInButtonProps>;
export default SignInButton;
