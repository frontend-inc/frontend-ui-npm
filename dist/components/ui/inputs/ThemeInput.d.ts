import React from 'react';
type ThemePickerProps = {
    name: string;
    value: string;
    handleChange: (ev: any) => void;
    placeholder?: string;
};
export default function ThemePicker(props: ThemePickerProps): React.JSX.Element;
export {};
