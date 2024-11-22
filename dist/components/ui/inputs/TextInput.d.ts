import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextInputProps = TextInputPropsType & {
    debounceDelay?: number;
    disableDebounce?: boolean;
};
export default function TextInput(props: TextInputProps): React.JSX.Element;
export {};
