import React from 'react';
import { ButtonProps as ShadcnButtonProps } from 'frontend-shadcn';
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
interface ButtonProps extends ShadcnButtonProps {
    size?: ButtonSize;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export type { ButtonProps };
