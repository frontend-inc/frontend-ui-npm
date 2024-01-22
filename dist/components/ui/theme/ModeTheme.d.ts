import React from "react";
type ModeThemeProps = {
    mode?: "light" | "dark" | "accent";
    children?: React.ReactNode;
};
declare const ModeTheme: React.FC<ModeThemeProps>;
export default ModeTheme;
