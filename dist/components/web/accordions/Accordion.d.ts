import React from 'react';
export type AccordionProps = {
    items?: {
        title: string;
        subtitle: string;
        image?: string;
    }[];
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
