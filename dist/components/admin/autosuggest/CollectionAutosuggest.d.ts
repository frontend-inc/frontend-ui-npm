import React from 'react';
type CollectionAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    handleChange: any;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const CollectionAutosuggest: React.FC<CollectionAutosuggestProps>;
export default CollectionAutosuggest;
