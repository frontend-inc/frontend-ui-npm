import { Option } from "../types";
type SortDirectionOption = {
  label: string;
  value: "asc" | "desc";
};
export declare const BOOLEAN_FIELDS: String[];
export declare const STRING_FIELDS: String[];
export declare const SELECT_FIELDS: String[];
export declare const NUMBER_FIELDS: String[];
export declare const DATE_FIELDS: String[];
export declare const JSON_FIELDS: String[];
export declare const ARRAY_FIELDS: String[];
export declare const NUMBER_AND_STRING_FIELDS: String[];
export declare const WHERE_OPTIONS: Option[];
export declare const SORT_DIRECTIONS: SortDirectionOption[];
export declare const BOOLEAN_OPTIONS: Option[];
export declare const EQUAL_OPERATOR: Option[];
export declare const TEXT_FILTER_OPERATORS: Option[];
export declare const NUMBER_FILTER_OPERATORS: Option[];
export declare const DATE_FILTER_OPERATORS: Option[];
export declare const BOOLEAN_FILTER_OPERATORS: Option[];
export declare const DATE_RANGE_OPTIONS: Option[];
export declare const FILTER_OPERATORS: Record<string, Option[]>;
export declare const FILTERABLE_TYPES: String[];
export declare const SORTABLE_TYPES: String[];
export declare const TITLE_SORT: {
  label: string;
  name: string;
};
export declare const PRICE_SORT: {
  label: string;
  name: string;
};
export declare const START_DATE_SORT: {
  label: string;
  name: string;
};
export declare const SEARCH_FILTER_TYPES: String[];
export {};
