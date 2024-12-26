import React from 'react';
import { TextInputProps } from '../../../types';
type TextAreaProps = Omit<TextInputProps, 'type'> & {
    debounceDelay?: number;
    disableDebounce?: boolean;
    rows?: number;
    className?: string;
};
export default function TextArea(props: TextAreaProps): React.JSX.Element;
export {};
