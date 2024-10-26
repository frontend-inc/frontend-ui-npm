import React from 'react';
import { TextInputPropsType } from '../../../types';
type AutocompleteInput = TextInputPropsType & {
    handleInputChange: (keywords: string) => void;
};
export default function AutocompleteInput({ name, value, label, placeholder, handleChange, handleInputChange, options, direction, info, }: AutocompleteInput): React.JSX.Element;
export {};
