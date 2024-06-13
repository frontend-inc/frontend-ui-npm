import React from 'react';
type ThemeProviderProps = {
    children: React.ReactNode;
    muiTheme?: any;
    primaryColor?: string;
    bgcolor?: string;
    headerFont?: string;
    bodyFont?: string;
    borderRadius?: number;
    textPrimary?: string;
    textSecondary?: string;
    deviceSize?: 'mobile' | 'tablet' | 'desktop';
    offsetX?: number;
    offsetY?: number;
};
declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export default ThemeProvider;
