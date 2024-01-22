import React from "react";
type ButtonProps = {
    children: any;
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
    onClick?: (ev: any) => void;
};
declare const TextButton: React.FC<ButtonProps>;
export default TextButton;
