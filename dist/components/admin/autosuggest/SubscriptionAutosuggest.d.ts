import React from 'react';
import { QueryParamsType, OptionType } from '../../../types';
type SubscriptionAutosuggestProps = {
    value: any;
    name?: string;
    query?: QueryParamsType;
    label?: string;
    placeholder?: string;
    handleChange: any;
    variants?: string[];
    valueParam?: string;
    direction?: 'column' | 'row';
    defaultOptions?: OptionType[];
};
declare const SubscriptionAutosuggest: React.FC<SubscriptionAutosuggestProps>;
export default SubscriptionAutosuggest;
