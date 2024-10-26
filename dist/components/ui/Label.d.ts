import React from 'react';
type LabelProps = {
    label?: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    className?: string;
};
declare const Label: React.FC<LabelProps>;
export default Label;
