import * as React from 'react';
interface AutocompleteOption {
    label: string;
    value: string | number;
}
interface AutocompleteProps {
    name: string;
    value: string | number;
    onChange: (value: string | number) => void;
    options: AutocompleteOption[];
    placeholder?: string;
    emptyMessage?: string;
}
declare function Autocomplete({ name, value, onChange, options, placeholder, emptyMessage, }: AutocompleteProps): React.JSX.Element;
export { Autocomplete };
