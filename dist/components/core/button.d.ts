import React from 'react';
import { ButtonProps as NextButtonProps } from '@nextui-org/react';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonProps = NextButtonProps & {
    size: ButtonSize;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    displayAlertWarning?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export type { ButtonProps };
