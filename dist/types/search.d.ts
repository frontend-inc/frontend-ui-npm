export type SearchFilterVariantType = 'single_choice' | 'multiple_choice' | 'boolean' | 'number_range' | 'date_range' | 'date_range_past' | 'date_range_future' | 'ratings_scale';
export type SearchFilterOptionType = {
    label: string;
    field: string;
    variant: SearchFilterVariantType;
    options?: {
        label: string;
        value: string | number;
    }[] | {
        label: string;
        min: number;
        max: number;
    }[];
};
export type SortOptionType = {
    name: string;
    label: string;
};
