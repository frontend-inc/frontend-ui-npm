import React from 'react';
type ButtonGroupProps = {
    handleChange: (newValue: number) => void;
    tabs: {
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
};
declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
