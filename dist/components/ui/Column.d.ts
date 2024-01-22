import React from "react";
type ColumnProps = {
  children: React.ReactNode;
  bgcolor?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};
declare const Column: React.FC<ColumnProps>;
export default Column;
