import React from 'react';
import { TextInputProps } from '../../../types';
type AutocompleteInput = TextInputProps & {
    handleInputChange: (keywords: string) => void;
};
export default function AutocompleteInput(props: AutocompleteInput): React.JSX.Element;
export {};
