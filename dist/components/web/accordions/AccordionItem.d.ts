import React from 'react';
type AccordionProps = {
    primary: string;
    secondary: React.ReactNode;
    image?: string;
    icon?: string;
    startIcon?: string;
    disablePadding?: boolean;
};
declare const AccordionItem: React.FC<AccordionProps>;
export default AccordionItem;
