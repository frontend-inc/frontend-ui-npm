import React from 'react';
import { ButtonProps as ShadcnButtonProps } from 'frontend-shadcn';
type IconButtonColor = 'primary' | 'secondary' | 'ghost';
type IconButtonVariant = 'rounded' | 'circular';
interface IconButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
    color?: IconButtonColor;
    variant?: IconButtonVariant;
    children: React.ReactNode;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton };
