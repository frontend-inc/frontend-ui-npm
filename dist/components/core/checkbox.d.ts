import React from 'react';
interface CheckboxProps {
    name: string;
    value: boolean;
    handleChange: (ev: any) => void;
    label?: string;
    className?: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export { Checkbox };
