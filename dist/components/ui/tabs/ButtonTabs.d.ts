import React from 'react';
type ButtonTabsProps = {
    handleChange: (value: number) => void;
    options: {
        icon?: string;
        label?: string;
        value: number;
    }[];
    value: number;
    disablePadding?: boolean;
    disableBorder?: boolean;
    iconPosition?: 'start' | 'end' | 'top' | 'bottom';
    variant?: 'fullWidth' | 'scrollable';
    size?: 'small' | 'large';
    debounceDelay?: number;
    disableDebounce?: boolean;
};
declare const ButtonTabs: React.FC<ButtonTabsProps>;
export default ButtonTabs;
