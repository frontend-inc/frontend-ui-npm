import React from 'react';
import { TypographyVariantsType } from '../../../types';
export type ContactFormProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    handleClick?: () => void;
};
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
