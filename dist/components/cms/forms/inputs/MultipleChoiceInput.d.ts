import React from 'react';
export type MultipleChoiceInputProps = {
    label?: string;
    layout?: 'list' | 'grid';
    direction?: 'row' | 'column';
    name: string;
    value?: any;
    options: {
        label: string;
        description: string;
        value: string | number;
        image: string;
        icon?: string;
    }[];
    handleChange: (e: any) => void;
    multiSelect?: boolean;
};
declare const MultipleChoiceInput: React.FC<MultipleChoiceInputProps>;
export default MultipleChoiceInput;
