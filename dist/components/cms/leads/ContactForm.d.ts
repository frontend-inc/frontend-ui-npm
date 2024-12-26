import React from 'react';
export type ContactFormProps = {
    enablePhone?: boolean;
    enableCompany?: boolean;
    enableReason?: boolean;
    reasonOptions?: string[];
    buttonText?: string;
    href?: string;
    handleClick?: () => void;
};
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
