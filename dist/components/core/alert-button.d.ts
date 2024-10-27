import React from 'react';
import { ButtonProps as ShadcnButtonProps } from 'frontend-shadcn';
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
interface AlertButtonProps extends ShadcnButtonProps {
    size?: ButtonSize;
    fullWidth?: boolean;
    variant?: ButtonVariant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    displayAlertWarning?: boolean;
}
declare const AlertButton: React.ForwardRefExoticComponent<AlertButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { AlertButton };
export type { AlertButtonProps };
