import React from 'react';
export type PrimaryButtonProps = {
    color?: 'primary' | 'secondary';
    loading?: boolean;
    children: string;
    onClick: (ev: any) => void;
    icon?: string;
    fullWidth?: boolean;
};
declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export default PrimaryButton;
