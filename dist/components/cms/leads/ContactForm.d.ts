import React from 'react';
import { FormFieldType, TypographyVariantsType } from '../../../types';
export type ContactFormProps = {
    label?: string;
    title: string;
    description: string;
    buttonText?: string;
    textVariant?: TypographyVariantsType;
    href?: string;
    metafields?: FormFieldType[];
    handleClick?: () => void;
};
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
