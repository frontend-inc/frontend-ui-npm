import React from 'react';
type FieldWrapperProps = {
    direction?: 'row' | 'column';
    label?: string;
    icon?: string;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    children?: React.ReactNode;
    className?: string;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
