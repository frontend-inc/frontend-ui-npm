import React from 'react';
type ButtonGroupProps = {
    handleChange: (newValue: number) => void;
    tabs: {
        icon?: string;
        label?: string;
        value: number | string;
    }[];
    value: number | string;
    disablePadding?: boolean;
};
declare const ButtonGroup: React.FC<ButtonGroupProps>;
export default ButtonGroup;
