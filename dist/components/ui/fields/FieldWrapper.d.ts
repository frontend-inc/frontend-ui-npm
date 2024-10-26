import React from 'react';
type FieldWrapperProps = {
    direction?: 'row' | 'column';
    label?: string;
    icon?: string;
    color?: string;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    disableLabel?: boolean;
    children?: React.ReactNode;
    className?: string;
};
declare const FieldWrapper: React.FC<FieldWrapperProps>;
export default FieldWrapper;
