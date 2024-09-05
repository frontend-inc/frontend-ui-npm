import React from 'react';
type DocumentAutosuggestProps = {
    errors?: any;
    value: any;
    name?: string;
    label?: string;
    collectionId?: string;
    handleChange: any;
    query?: any;
    placeholder?: string;
    enableSearchRemote?: boolean;
    direction?: 'row' | 'column';
};
declare const DocumentAutosuggest: React.FC<DocumentAutosuggestProps>;
export default DocumentAutosuggest;
