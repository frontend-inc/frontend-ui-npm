import React from 'react';
import { TextInputPropsType } from '../../../types';
type AutocompleteInput = TextInputPropsType & {
    handleInputChange: (keywords: string) => void;
};
declare const AutocompleteInput: React.FC<AutocompleteInput>;
export default AutocompleteInput;
