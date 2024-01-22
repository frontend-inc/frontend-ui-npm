import React from "react";
type RemoteAutosuggestProps = {
    errors?: any;
    value?: any;
    label?: string;
    name?: string;
    url?: string;
    displayField?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    valueParam?: string;
    placeholder?: string;
    imageField?: string;
    direction?: "row" | "column";
    defaultQuery?: Record<string, any>;
};
declare const RemoteAutosuggest: React.FC<RemoteAutosuggestProps>;
export default RemoteAutosuggest;
