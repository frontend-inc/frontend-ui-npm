import React from 'react';
type LightDarkModeProps = {
    mode: 'dark' | 'light' | 'accent';
    children: React.ReactNode;
};
declare const LightDarkMode: React.FC<LightDarkModeProps>;
export default LightDarkMode;
