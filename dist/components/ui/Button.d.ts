import React from "react";
type ButtonProps = {
  component?: any;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  buttonText?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
