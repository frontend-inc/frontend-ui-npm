import React from 'react';
import { FormFieldType } from '../../../types';
export type ContactFormProps = {
    buttonText?: string;
    href?: string;
    metafields?: FormFieldType[];
    handleClick?: () => void;
};
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
