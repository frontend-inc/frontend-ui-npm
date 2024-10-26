import React from 'react';
export type SignupProps = {
    href: string;
    loginUrl: string;
    title?: string;
    subtitle?: string;
    enableGoogle?: boolean;
};
declare const Signup: React.FC<SignupProps>;
export default Signup;
