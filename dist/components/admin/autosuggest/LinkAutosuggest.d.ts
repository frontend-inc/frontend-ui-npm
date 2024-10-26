import React from 'react';
type LinkAutosuggestProps = {
    errors?: any;
    value: string;
    name?: string;
    menuId: string;
    label?: string;
    handleChange: (e: any) => void;
    handleClear: () => void;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const LinkAutosuggest: React.FC<LinkAutosuggestProps>;
export default LinkAutosuggest;
