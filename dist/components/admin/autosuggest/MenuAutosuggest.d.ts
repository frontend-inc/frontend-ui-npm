import React from 'react';
type MenuAutosuggestProps = {
    errors?: any;
    appId: string;
    value: string;
    name?: string;
    label?: string;
    handleChange: (e: any) => void;
    query?: any;
    direction?: 'row' | 'column';
    placeholder?: string;
};
declare const MenuAutosuggest: React.FC<MenuAutosuggestProps>;
export default MenuAutosuggest;
