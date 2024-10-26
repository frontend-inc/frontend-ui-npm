import React from 'react';
import { QueryParamsType, SyntheticEventType } from '../../../types';
export type RemoteAutosuggestProps = {
    errors?: any;
    value?: any;
    label?: string;
    name: string;
    url: string;
    handleChange: (event: SyntheticEventType) => void;
    handleClear?: () => void;
    displayField?: string;
    valueParam?: string;
    placeholder?: string;
    imageField?: string;
    direction?: 'row' | 'column';
    defaultQuery?: QueryParamsType;
    defaultOptions?: {
        label: string;
        value: string;
    }[];
    enableRemoteSearch?: boolean;
    enableClear?: boolean;
    perPage?: number;
};
declare const RemoteAutosuggest: React.FC<RemoteAutosuggestProps>;
export default RemoteAutosuggest;
