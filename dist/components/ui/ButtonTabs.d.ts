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
export default function ButtonTabs(props: ButtonTabsProps): React.JSX.Element;
export {};
