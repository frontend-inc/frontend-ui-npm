import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type EmailSubscribeProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    handleClick?: () => void;
    direction?: string;
};
declare const EmailSubscribe: React.FC<EmailSubscribeProps>;
export default EmailSubscribe;
