import React from 'react';
export type AccordionProps = {
    variant?: 'light' | 'shadow' | 'bordered' | 'splitted';
    items?: {
        title: string;
        subtitle: string;
        image?: string;
    }[];
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
