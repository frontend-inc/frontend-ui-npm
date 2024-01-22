import React from "react";
type BoxProps = {
  children: React.ReactNode;
  height?: string;
  width?: string;
  boxRadius?: number;
  borderSize?: number;
  borderColor?: string;
  bgcolor?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: number;
  p?: number;
};
declare const Box: React.FC<BoxProps>;
export default Box;
