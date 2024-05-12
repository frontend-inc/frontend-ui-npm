import React from 'react';
export type SignupProps = {
    navigateUrl: string;
    loginUrl: string;
    title?: string;
    subtitle?: string;
};
declare const Signup: React.FC<SignupProps>;
export default Signup;
