import React from 'react';
type ActionAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    handleChange: any;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const ActionAutosuggest: React.FC<ActionAutosuggestProps>;
export default ActionAutosuggest;
