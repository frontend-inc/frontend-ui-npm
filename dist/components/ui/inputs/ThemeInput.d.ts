import React from 'react';
type ThemePickerProps = {
    name: string;
    value: string;
    handleChange: (ev: any) => void;
    placeholder?: string;
};
export default function ThemePicker({ name, value, handleChange, placeholder, }: ThemePickerProps): React.JSX.Element;
export {};
