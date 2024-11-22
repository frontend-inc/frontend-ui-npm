import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextAreaProps = Omit<TextInputPropsType, 'type'> & {
    debounceDelay?: number;
    disableDebounce?: boolean;
    rows?: number;
    className?: string;
};
export default function TextArea(props: TextAreaProps): React.JSX.Element;
export {};
