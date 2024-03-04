import React from 'react';
type AccordionProps = {
    title: string;
    description: string;
    image?: string;
    icon?: 'Plus' | 'ChevronDown';
};
declare const AccordionItem: React.FC<AccordionProps>;
export default AccordionItem;
