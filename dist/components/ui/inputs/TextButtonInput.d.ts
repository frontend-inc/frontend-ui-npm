import React from 'react';
import { TextInputProps } from '../../../types';
type TextButtonInputProps = TextInputProps & {
    loading?: boolean;
    onClick: () => void;
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
};
export default function TextButtonInput({ name, value, handleChange, placeholder, color, onClick, loading, children, }: TextButtonInputProps): React.JSX.Element;
export {};
