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
    variant?: 'solid' | 'underlined' | 'bordered' | 'light';
    isVertical?: boolean;
};
export default function ButtonTabs(props: ButtonTabsProps): React.JSX.Element;
export {};
