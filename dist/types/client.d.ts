import { OptionType } from '../types';
export type ConfigParams = {
    collection?: string;
    path?: string;
};
export type FetchOptionType = {
    method: string;
    headers: Record<string, any>;
    body: any;
};
export type OperatorType = 'asc' | 'desc' | 'true' | 'false' | 'eq' | 'neq' | 'like' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'include' | '1_day_ago' | '7_days_ago' | '14_days_ago' | '30_days_ago' | '60_days_ago' | '90_days_ago';
export type Value = string | number | string[] | number[];
export type FilterType = {
    [field: string]: {
        [operator in OperatorType]?: Value;
    };
};
export type FiltersType = {
    AND?: FilterType[];
    OR?: FilterType[];
};
export type QueryParamsType = {
    sort_by?: string;
    sort_direction?: 'asc' | 'desc' | null;
    keywords?: string | null;
    filters?: FiltersType | Record<string, any>;
    page?: number | null;
    per_page?: number | null;
    current_user?: boolean;
    current_team?: boolean;
    belongs_to?: number;
    similar_to?: number;
    location?: string;
    radius?: number;
    method?: string;
    resource_id?: number | string;
    rest?: any;
};
export type FilterOperatorType = 'asc' | 'desc' | 'true' | 'false' | 'eq' | 'neq' | 'like' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'btw' | '1_day_ago' | '7_days_ago' | '14_days_ago' | '30_days_ago' | '60_days_ago' | '90_days_ago' | 'current_year' | '1_day' | '7_days' | '14_days' | '30_days' | '60_days' | '90_days' | 'next_year';
export type FilterWhereType = 'AND' | 'OR';
export type FilterOptionType = {
    where: FilterWhereType;
    field: string;
    operator: FilterOperatorType;
    value: any;
};
export type SearchFilterInputProps = {
    filter?: FilterOptionType;
    field?: string;
    label?: string;
    where?: FilterWhereType;
    operator?: FilterOperatorType;
    options?: OptionType[];
    handleSubmit: (value: any) => void;
};
