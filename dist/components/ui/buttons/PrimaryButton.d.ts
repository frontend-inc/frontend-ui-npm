import React from 'react';
export type PrimaryButtonProps = {
    color?: 'primary' | 'secondary';
    loading?: boolean;
    children: React.ReactNode;
    onClick: (ev: any) => void;
    icon?: string;
    endIcon?: string;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};
declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export default PrimaryButton;