type DisplayFieldParams = {
    displaySubtitle?: boolean;
    displayCategory?: boolean;
    displayDescription?: boolean;
    displayLocation?: boolean;
    displayTags?: boolean;
};
export declare const buildDisplayFields: (params: DisplayFieldParams) => any[];
type SortFieldParams = {
    sortPosition?: boolean;
    sortTitle?: boolean;
    sortName?: boolean;
    sortDate?: boolean;
    sortPublished?: boolean;
    sortPrice?: boolean;
};
export declare const buildSortFields: (params: SortFieldParams) => any[];
export declare const buildFilterFields: (params: {
    filterChoices: string[];
}) => {
    label: string;
    name: string;
    variant: string;
    options: {
        label: string;
        value: string;
    }[];
}[];
export {};
