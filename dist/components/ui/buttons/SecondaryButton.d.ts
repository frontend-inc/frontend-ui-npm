import React from 'react';
export type SecondaryButtonProps = {
    loading?: boolean;
    children: string;
    icon?: string;
    onClick: (ev: any) => void;
    fullWidth?: boolean;
};
declare const SecondaryButton: React.FC<SecondaryButtonProps>;
export default SecondaryButton;
