import React from 'react';
import { SyntheticEventType } from '../../../types';
export type PrimaryButtonProps = {
    color?: 'primary' | 'secondary';
    loading?: boolean;
    children: React.ReactNode;
    onClick: (ev: SyntheticEventType) => void;
    icon?: string;
    endIcon?: string;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    alert?: boolean;
    title?: string;
    description?: string;
};
declare const PrimaryButton: React.FC<PrimaryButtonProps>;
export default PrimaryButton;
