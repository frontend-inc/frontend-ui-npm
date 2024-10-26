import React from 'react';
import { TextInputPropsType } from '../../../types';
type TextButtonInputProps = TextInputPropsType & {
    loading?: boolean;
    onClick: () => void;
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
};
export default function TextButtonInput({ name, value, handleChange, placeholder, color, onClick, loading, children, }: TextButtonInputProps): React.JSX.Element;
export {};
