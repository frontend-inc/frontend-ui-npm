import React from 'react';
export type MultipleChoiceInputProps = {
    label?: string;
    direction?: 'row' | 'column';
    name: string;
    value?: any;
    options: any[];
    buttonText?: string;
    handleChange: (e: any) => void;
    multiSelect?: boolean;
};
declare const MultipleChoiceInput: React.FC<MultipleChoiceInputProps>;
export default MultipleChoiceInput;
