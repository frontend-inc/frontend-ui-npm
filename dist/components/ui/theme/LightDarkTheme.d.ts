import React from 'react';
type LightDarkThemeProps = {
    theme: 'dark' | 'light' | 'accent';
    children: React.ReactNode;
};
declare const LightDarkTheme: React.FC<LightDarkThemeProps>;
export default LightDarkTheme;
