import React from 'react';
type PageAutosuggestProps = {
    errors?: any;
    value: string;
    name?: string;
    label?: string;
    handleChange: (e: any) => void;
    query?: any;
    valueParam?: string;
    direction?: 'row' | 'column';
};
declare const PageAutosuggest: React.FC<PageAutosuggestProps>;
export default PageAutosuggest;
