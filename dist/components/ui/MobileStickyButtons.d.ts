import React from "react";
type MobileStickyButtonsProps = {
  children: React.ReactNode;
  flexDirection?: {
    xs: "row" | "column";
    sm: "row" | "column";
  };
};
declare const MobileStickyButtons: React.FC<MobileStickyButtonsProps>;
export default MobileStickyButtons;
