import React from 'react';
type ButtonTabsProps = {
    handleChange: (value: string | number | boolean) => void;
    options: {
        icon?: string;
        label?: string;
        value: number | string | boolean;
    }[];
    value: number | string | boolean;
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
