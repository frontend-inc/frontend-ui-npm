import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextButtonInputProps = TextInputPropsType & {
    loading?: boolean;
    onClick: () => void;
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
};
declare const TextButtonInput: React.FC<TextButtonInputProps>;
export default TextButtonInput;
