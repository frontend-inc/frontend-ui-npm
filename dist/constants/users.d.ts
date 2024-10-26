export declare const USER_ROLES: {
    value: string;
    label: string;
}[];
export declare const USER_FORM_FIELDS: ({
    name: string;
    variant: string;
    label?: undefined;
} | {
    label: string;
    name: string;
    variant: string;
})[];
export declare const USER_ADDRESS_FIELDS: ({
    label: string;
    name: string;
    variant: string;
    placeholder: string;
    options?: undefined;
    conditions?: undefined;
    default?: undefined;
} | {
    label: string;
    name: string;
    variant: string;
    placeholder?: undefined;
    options?: undefined;
    conditions?: undefined;
    default?: undefined;
} | {
    label: string;
    name: string;
    variant: string;
    options: import("..").OptionType[];
    conditions: {
        name: string;
        operator: string;
        value: string;
    }[];
    placeholder?: undefined;
    default?: undefined;
} | {
    label: string;
    name: string;
    variant: string;
    options: import("..").OptionType[];
    default: string;
    placeholder?: undefined;
    conditions?: undefined;
})[];
export declare const ACCOUNT_FORM_FIELDS: ({
    name: string;
    variant: string;
    label?: undefined;
} | {
    label: string;
    name: string;
    variant: string;
})[];
