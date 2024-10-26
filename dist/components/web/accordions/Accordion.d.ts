import React from 'react';
export type AccordionProps = {
    items?: {
        title: string;
        description: string;
        image?: string;
    }[];
    editing?: boolean;
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
