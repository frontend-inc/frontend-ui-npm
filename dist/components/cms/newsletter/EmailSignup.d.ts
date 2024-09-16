import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type EmailSignupProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const EmailSignup: React.FC<EmailSignupProps>;
export default EmailSignup;
