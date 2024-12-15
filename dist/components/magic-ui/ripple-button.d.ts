import React from 'react';
interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    rippleColor?: string;
    duration?: string;
}
declare const RippleButton: React.ForwardRefExoticComponent<RippleButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default RippleButton;
