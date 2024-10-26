import React from 'react';
type ButtonTabsProps = {
    handleChange: (value: string | number) => void;
    options: {
        icon?: string;
        label?: string;
        value: string | number;
    }[];
    className?: string;
    fullWidth?: boolean;
    value: string | number;
};
export default function ButtonTabs({ handleChange, options, value, className, fullWidth, }: ButtonTabsProps): React.JSX.Element;
export {};
