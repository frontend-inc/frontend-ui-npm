import React from 'react';
type ZapAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    handleChange: any;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const ZapAutosuggest: React.FC<ZapAutosuggestProps>;
export default ZapAutosuggest;
