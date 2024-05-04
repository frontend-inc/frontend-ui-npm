import React from 'react';
type FieldWrapperProps = {
    direction?: 'row' | 'column';
    label?: string;
    enableBorder?: boolean;
    children?: React.ReactNode;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
