import React from 'react';
type PolicyAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    valueParam?: string;
    handleChange: any;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const PolicyAutosuggest: React.FC<PolicyAutosuggestProps>;
export default PolicyAutosuggest;
