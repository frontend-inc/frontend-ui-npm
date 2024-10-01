import React from 'react';
type PageCollectionAutosuggestProps = {
    errors?: any;
    value: string;
    name?: string;
    label?: string;
    handleChange: (e: any) => void;
    query?: any;
    valueParam?: string;
    direction?: 'row' | 'column';
    collectionId: string;
};
declare const PageCollectionAutosuggest: React.FC<PageCollectionAutosuggestProps>;
export default PageCollectionAutosuggest;
