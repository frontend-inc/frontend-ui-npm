import React from 'react';
import { TextInputPropsType } from '../../../types';
type AutocompleteInput = TextInputPropsType & {
    handleInputChange: (keywords: string) => void;
};
export default function AutocompleteInput(props: AutocompleteInput): React.JSX.Element;
export {};
