import React from 'react';
type FieldWrapperProps = {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    label?: string;
    icon?: string;
    color?: string;
    disablePadding?: boolean;
    enableBorder?: boolean;
    children?: React.ReactNode;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
