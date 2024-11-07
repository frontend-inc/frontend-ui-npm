import React from "react";
export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}
declare const ShimmerButton: React.ForwardRefExoticComponent<ShimmerButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default ShimmerButton;
