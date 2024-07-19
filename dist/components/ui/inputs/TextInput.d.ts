import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextInputProps = TextInputPropsType & {
    onBlur?: () => void;
    onFocus?: () => void;
    disableDebounce?: boolean;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
