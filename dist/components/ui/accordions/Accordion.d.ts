import React from 'react';
type AccordionProps = {
    title?: string;
    url: string;
    fields?: any;
    editing?: boolean;
    enableInfiniteLoad?: boolean;
    enableLoadMore?: boolean;
    perPage?: number;
    query?: any;
    enableSearch?: boolean;
    enableFilters?: boolean;
};
declare const AccordionView: React.FC<AccordionProps>;
export default AccordionView;
