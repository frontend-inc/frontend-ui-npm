import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextInputProps = TextInputPropsType & {
    onBlur?: () => void;
    onFocus?: () => void;
    debounceDelay?: number;
    disableDebounce?: boolean;
    fontSize?: number;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
