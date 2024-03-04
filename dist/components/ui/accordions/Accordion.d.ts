import React from 'react';
type AccordionProps = {
    title?: string;
    items?: {
        title: string;
        description: string;
        image?: string;
    }[];
    editing?: boolean;
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
