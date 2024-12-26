import React from 'react';
export type LeadFormProps = {
    buttonText?: string;
    href?: string;
    url?: string;
    path?: string;
    handleClick?: () => void;
    enablePhone?: boolean;
    enableCompany?: boolean;
    enableReason?: boolean;
    enableMessage?: boolean;
    reasonOptions?: string[];
};
declare const LeadForm: React.FC<LeadFormProps>;
export default LeadForm;
