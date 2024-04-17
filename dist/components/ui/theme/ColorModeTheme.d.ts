import React from 'react';
type ColorModeThemeProps = {
    mode?: 'light' | 'dark' | 'accent';
    children?: React.ReactNode;
};
declare const ColorModeTheme: React.FC<ColorModeThemeProps>;
export default ColorModeTheme;
